// src/app/admin/leads/page.tsx
"use client";
import React, { useState, useEffect } from 'react';

// !!! IMPORTANT SECURITY WARNING !!!
// This is a placeholder for a real password.
// Hardcoding passwords in client-side code is highly insecure.
// Replace with a proper authentication mechanism for production.
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_LEADS_PASSWORD || "yourSecretPassword123";


interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  submittedAt: string; // Assuming ISO string format
  status?: string;
  [key: string]: any; // For any other dynamic fields
}

const LeadsAdminPage = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setLoginError(null);
      localStorage.setItem('leadsLoggedIn', 'true'); // Simple persistence
    } else {
      setLoginError("Incorrect password.");
      setIsLoggedIn(false);
    }
    setPassword(''); // Clear password field
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLeads([]);
    localStorage.removeItem('leadsLoggedIn');
  }

  useEffect(() => {
    // Check if user was previously logged in
    if (localStorage.getItem('leadsLoggedIn') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);


  useEffect(() => {
    if (isLoggedIn) {
      const fetchLeads = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch('/api/leads');
          if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.message || `Error: ${response.status}`);
          }
          const data: Lead[] = await response.json();
          setLeads(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "An unknown error occurred");
          setLeads([]); // Clear leads on error
        } finally {
          setIsLoading(false);
        }
      };
      fetchLeads();
    }
  }, [isLoggedIn]);

  const exportToCSV = () => {
    if (leads.length === 0) {
      alert("No leads to export.");
      return;
    }

    const headers = [
        "ID", "Submitted At", "Name", "Email", "Phone",
        "Subject", "Message", "Status"
    ];
    // Find all unique keys across all leads for dynamic columns, beyond the standard ones.
    // const allKeys = new Set<string>(headers.map(h => h.toLowerCase()));
    // leads.forEach(lead => Object.keys(lead).forEach(key => allKeys.add(key)));
    // const dynamicHeaders = Array.from(allKeys);


    // Using fixed headers for simplicity here, but you can make it dynamic
    const csvRows = [headers.join(',')];

    leads.forEach(lead => {
      const submittedDate = lead.submittedAt ? new Date(lead.submittedAt).toLocaleString() : 'N/A';
      const row = [
        `"${lead.id || 'N/A'}"`,
        `"${submittedDate}"`,
        `"${(lead.name || '').replace(/"/g, '""')}"`,
        `"${(lead.email || '').replace(/"/g, '""')}"`,
        `"${(lead.phone || 'N/A').replace(/"/g, '""')}"`,
        `"${(lead.subject || '').replace(/"/g, '""')}"`,
        `"${(lead.message || '').replace(/"/g, '""')}"`,
        `"${(lead.status || 'N/A').replace(/"/g, '""')}"`
      ];
      csvRows.push(row.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'leads.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-20 lg:pt-24 min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input-light w-full" // Using existing class from globals.css
                required
              />
            </div>
            {loginError && <p className="text-red-500 text-sm mb-3">{loginError}</p>}
            <button type="submit" className="button-primary w-full"> {/* Using existing class from globals.css */}
              Login
            </button>
          </form>
        </div>
         <p className="mt-4 text-xs text-red-600 px-4 text-center">
            <strong>Warning:</strong> --------- SESSION DEBUG REQUIRED ------- Abir 
        </p>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24 section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h1 className="h2-heading text-gray-900">Leads Management</h1> {/* Using existing class from globals.css */}
          <div>
            <button onClick={exportToCSV} className="button-secondary mr-3"> {/* Using existing class from globals.css */}
              Export to CSV
            </button>
            <button onClick={handleLogout} className="button-primary bg-red-600 hover:bg-red-700"> {/* Using existing class from globals.css */}
              Logout
            </button>
          </div>
        </div>

        {isLoading && <p className="text-center text-gray-700">Loading leads...</p>}
        {error && <p className="text-center text-red-600 bg-red-100 p-3 rounded-md">Error: {error}</p>}

        {!isLoading && !error && leads.length === 0 && (
          <p className="text-center text-gray-600 py-8">No leads found.</p>
        )}

        {!isLoading && !error && leads.length > 0 && (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Submitted At</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Phone</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Subject</th>
                   <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider max-w-xs truncate">Message</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map(lead => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{new Date(lead.submittedAt).toLocaleString()}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{lead.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{lead.email}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{lead.phone || 'N/A'}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{lead.subject}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{lead.status || 'N/A'}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 max-w-xs truncate" title={lead.message}>{lead.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadsAdminPage;