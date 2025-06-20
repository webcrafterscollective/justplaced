// // src/app/contact/page.tsx
// "use client"
// import React, { useState } from 'react';
// import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

// const ContactPage = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({ message: '', type: '' });

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ message: '', type: '' });

//     const formData = new FormData(event.currentTarget);
//     const data = {
//       name: formData.get('name') as string,
//       email: formData.get('email') as string,
//       phone: formData.get('phone') as string | null,
//       subject: formData.get('subject') as string,
//       message: formData.get('message') as string,
//     };

//     // Basic client-side validation (you can enhance this)
//     if (!data.name || !data.email || !data.subject || !data.message) {
//       setSubmitStatus({ message: "Please fill in all required fields.", type: 'error' });
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setSubmitStatus({ message: result.message || "Thank you! Your message has been sent.", type: 'success' });
//         (event.target as HTMLFormElement).reset(); // Clear form
//       } else {
//         setSubmitStatus({ message: `Error: ${result.message || 'Could not submit form.'}`, type: 'error' });
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setSubmitStatus({ message: "An unexpected error occurred. Please try again.", type: 'error' });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="pt-20 lg:pt-24"> {/* Added top padding to account for the fixed header */}
//       <div className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h1 className="h2-heading">Get In Touch</h1>
//             <p className="p-lead mt-4">
//               We're here to answer your questions and discuss how we can help you
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//             <div className="card-base p-8 md:p-10"> {/* Uses global card style */}
//               <h2 className="h3-heading mb-6">Send Us a Message</h2> {/* Uses global style */}
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="form-label-light">Full Name</label>
//                   <input type="text" name="name" id="name" autoComplete="name" required
//                          className="form-input-light" disabled={isSubmitting} />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="form-label-light">Email</label>
//                   <input type="email" name="email" id="email" autoComplete="email" required
//                          className="form-input-light" disabled={isSubmitting} />
//                 </div>
//                  <div>
//                   <label htmlFor="phone" className="form-label-light">Phone (Optional)</label>
//                   <input type="tel" name="phone" id="phone" autoComplete="tel"
//                          className="form-input-light" disabled={isSubmitting} />
//                 </div>
//                 <div>
//                   <label htmlFor="subject" className="form-label-light">Subject</label>
//                   <input type="text" name="subject" id="subject" required
//                          className="form-input-light" disabled={isSubmitting} />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="form-label-light">Your Message</label>
//                   <textarea name="message" id="message" rows={5} required
//                             className="form-input-light" disabled={isSubmitting}></textarea>
//                 </div>
//                 <div>
//                   <button type="submit" className="button-primary w-full" disabled={isSubmitting}>
//                     {isSubmitting ? 'Submitting...' : 'Send Message'}
//                   </button>
//                 </div>
//                 {submitStatus.message && (
//                   <p className={`mt-4 text-sm text-center ${submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
//                     {submitStatus.message}
//                   </p>
//                 )}
//               </form>
//             </div>

//             <div className="space-y-8 mt-8 lg:mt-0">
//                <div className="card-base p-8"> {/* Uses global card style */}
//                   <h3 className="text-xl font-semibold text-black mb-4 inline-flex items-center">
//                       <MapPinIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
//                       Our Location
//                   </h3>
//                   <address className="not-italic text-gray-700 leading-relaxed"> {/* Standard paragraph text */}
//                       <p>Chandannagar, Hooghly</p>
//                       <p>Kolkata. Pin - 712136</p>
//                       <p>India</p>
//                       <p className="mt-2 text-sm text-muted">(As a startup, specific office details can be shared upon request or we operate remotely)</p> {/* Muted text */}
//                   </address>
//               </div>
//               {/* Corrected nested space-y-8 div */}
//               <div className="card-base p-8">
//                    <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
//                       <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
//                       Email Us
//                   </h3>
//                   <a href="mailto:support@justplaced.in" className="link-primary text-lg block mt-2">support@justplaced.in</a> {/* Global link style */}
//                    <p className="text-sm text-muted mt-1">We typically respond within 24 hours</p> {/* Muted text */}
//               </div>
//               <div className="card-base p-8">
//                   <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
//                       <PhoneIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
//                       Call Us
//                   </h3>
//                   <a href="tel:+918981453859" className="link-primary text-lg block mt-2">+91 89814 53859</a> {/* Global link style */}
//                   <p className="text-sm text-muted mt-1">Mon - Sat, 9 AM - 7 PM (IST)</p> {/* Muted text */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

// src/app/contact/page.tsx
"use client"
import React, { useState } from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import HeroSection from '@/components/HeroSection';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({ message: '', type: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', type: '' });

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string | null,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    if (!data.name || !data.email || !data.subject || !data.message) {
      setSubmitStatus({ message: "Please fill in all required fields.", type: 'error' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ message: result.message || "Thank you! Your message has been sent.", type: 'success' });
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({ message: `Error: ${result.message || 'Could not submit form.'}`, type: 'error' });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({ message: "An unexpected error occurred. Please try again.", type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <HeroSection
        heroTitle="Get In Touch"
        heroDescription="We're here to answer your questions and discuss how we can help you"
        heroButtons={[]} // No buttons
         videoSrc="/videos/stockv6.mp4"
      />
      <div className="bg-white">
        <div className="section-padding">
          <div className="container-custom">
            {/* The introductory text block ("Get In Touch" and paragraph)
                has been removed from here as it's now in the HeroSection.
            */}

            {/* Added pt-12 md:pt-0 for spacing after full-screen hero, adjust as needed */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-12 md:pt-0">
              <div className="card-base p-8 md:p-10">
                <h2 className="h3-heading mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="form-label-light">Full Name</label>
                    <input type="text" name="name" id="name" autoComplete="name" required
                           className="form-input-light" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label-light">Email</label>
                    <input type="email" name="email" id="email" autoComplete="email" required
                           className="form-input-light" disabled={isSubmitting} />
                  </div>
                   <div>
                    <label htmlFor="phone" className="form-label-light">Phone (Optional)</label>
                    <input type="tel" name="phone" id="phone" autoComplete="tel"
                           className="form-input-light" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label htmlFor="subject" className="form-label-light">Subject</label>
                    <input type="text" name="subject" id="subject" required
                           className="form-input-light" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label-light">Your Message</label>
                    <textarea name="message" id="message" rows={5} required
                              className="form-input-light" disabled={isSubmitting}></textarea>
                  </div>
                  <div>
                    <button type="submit" className="button-primary w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Send Message'}
                    </button>
                  </div>
                  {submitStatus.message && (
                    <p className={`mt-4 text-sm text-center ${submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                      {submitStatus.message}
                    </p>
                  )}
                </form>
              </div>

              <div className="space-y-8 mt-8 lg:mt-0">
                 <div className="card-base p-8">
                    <h3 className="text-xl font-semibold text-black mb-4 inline-flex items-center">
                        <MapPinIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                        Our Location
                    </h3>
                    <address className="not-italic text-gray-700 leading-relaxed">
                        <p>Chandannagar, Hooghly</p>
                        <p>Kolkata. Pin - 712136</p>
                        <p>India</p>
                        <p className="mt-2 text-sm text-muted">(As a startup, specific office details can be shared upon request or we operate remotely)</p>
                    </address>
                </div>
                <div className="card-base p-8">
                     <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                        <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                        Email Us
                    </h3>
                    <a href="mailto:support@justplaced.in" className="link-primary text-lg block mt-2">support@justplaced.in</a>
                     <p className="text-sm text-muted mt-1">We typically respond within 24 hours</p>
                </div>
                <div className="card-base p-8">
                    <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                        <PhoneIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                        Call Us
                    </h3>
                    <a href="tel:+918981453859" className="link-primary text-lg block mt-2">+91 89814 53859</a>
                    <p className="text-sm text-muted mt-1">Mon - Sat, 9 AM - 7 PM (IST)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;