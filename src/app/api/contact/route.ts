// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

let firebaseAppInstance: App | null = null;
let firestoreInstance: Firestore | null = null;
let initializationErrorDetail: string | null = null;

// Perform initialization once when the module loads
try {
  if (!serviceAccountString) {
    initializationErrorDetail = "Firebase service account key (FIREBASE_SERVICE_ACCOUNT_KEY) is not set in environment variables for /api/contact.";
    console.error(`ERROR in /api/contact: ${initializationErrorDetail}`);
  } else {
    const appName = 'contactFormAppInstance_v1'; // Unique name for this app instance

    const existingApp = getApps().find(app => app.name === appName);
    if (existingApp) {
      firebaseAppInstance = existingApp;
      // console.log(`Firebase Admin SDK for ${appName} already initialized.`);
    } else {
      let serviceAccount;
      try {
        serviceAccount = JSON.parse(serviceAccountString);
      } catch (e) {
        if (e instanceof SyntaxError) {
          initializationErrorDetail = "Error parsing FIREBASE_SERVICE_ACCOUNT_KEY for /api/contact. Ensure it's a valid single-line JSON string.";
        } else {
          initializationErrorDetail = "Error with FIREBASE_SERVICE_ACCOUNT_KEY content for /api/contact.";
        }
        console.error(`ERROR in /api/contact: ${initializationErrorDetail}`, e);
        throw e; // Propagate to the outer catch
      }

      firebaseAppInstance = initializeApp({
        credential: cert(serviceAccount)
      }, appName);
      // console.log(`Firebase Admin SDK for ${appName} initialized successfully.`);
    }

    if (firebaseAppInstance) {
      firestoreInstance = getFirestore(firebaseAppInstance);
    } else {
      initializationErrorDetail = "Firebase App (for /api/contact) could not be initialized or retrieved.";
      console.error(`ERROR in /api/contact: ${initializationErrorDetail}`);
    }
  }
} catch (e) {
  console.error("CRITICAL ERROR during Firebase Admin SDK initialization for /api/contact:", e);
  if (!initializationErrorDetail) {
      initializationErrorDetail = e instanceof Error ? e.message : "Unknown critical error during Firebase Admin SDK initialization for /api/contact.";
  }
  firebaseAppInstance = null;
  firestoreInstance = null;
}

export async function POST(request: Request) {
  if (initializationErrorDetail || !firestoreInstance) {
    console.error("POST /api/contact: API called but initialization failed or Firestore not available. Detail:", initializationErrorDetail);
    return NextResponse.json({
        message: "Server configuration error. Unable to process contact request.",
        error: process.env.NODE_ENV === 'development' ? `Initialization Error: ${initializationErrorDetail}` : "Internal server error."
    }, { status: 500 });
  }

  try {
    const formData = await request.json();
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "Missing required fields: name, email, subject, and message are required." }, { status: 400 });
    }

    const docRef = await firestoreInstance.collection('contacts').add({
      name,
      email,
      phone: phone || null,
      subject,
      message,
      submittedAt: new Date().toISOString(),
      status: 'new',
    });

    return NextResponse.json({ message: "Message sent successfully! We'll be in touch soon.", leadId: docRef.id }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact to Firestore in /api/contact:", error);
    let errorMsg = "Could not submit your message due to a server error.";
    if (error instanceof Error) {
        errorMsg = error.message; // Be cautious about sending raw error messages to client
    }
    return NextResponse.json({
        message: "Could not submit your message. Please try again later.",
        error: process.env.NODE_ENV === 'development' ? errorMsg : "Internal server error."
    }, { status: 500 });
  }
}

// Optional: Add a GET handler if you want to test the route directly in the browser (for setup issues)
// export async function GET(request: Request) {
//   if (initializationErrorDetail || !firestoreInstance) {
//     return NextResponse.json({ message: "GET /api/contact: Initialization error or Firestore not available.", error: initializationErrorDetail }, { status: 500 });
//   }
//   return NextResponse.json({ message: "GET request to /api/contact is successful. Firestore is configured.", status: "OK" });
// }