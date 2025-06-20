// // // // // src/app/services/page.tsx
// // // // import React from 'react';
// // // // import Link from 'next/link';
// // // // import { BriefcaseIcon, UsersIcon, UserGroupIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// // // // const services = [
// // // //   {
// // // //     name: "Permanent Hire Solutions",
// // // //     description: "Securing long-term talent that aligns with your vision and culture. We manage the full recruitment lifecycle for lasting placements.",
// // // //     href: "/services/permanent-hire", // Create this page if needed
// // // //     icon: BriefcaseIcon,
// // // //   },
// // // //   {
// // // //     name: "Contract Staffing",
// // // //     description: "Flexible, skilled professionals for your project-based requirements and fluctuating workloads. Get the expertise you need, when you need it.",
// // // //     href: "/services/contract-staffing", // Create this page
// // // //     icon: UsersIcon,
// // // //   },
// // // //   {
// // // //     name: "Executive Search",
// // // //     description: "Discreet and targeted search for identifying and attracting C-suite and senior leadership talent to guide your organization.",
// // // //     href: "/services/executive-search", // Create this page
// // // //     icon: UserGroupIcon,
// // // //   },
// // // //   {
// // // //     name: "Specialized Talent Sourcing",
// // // //     description: "Deep dive sourcing for niche skills and hard-to-find roles across various industries. We tap into hidden talent pools.",
// // // //     href: "/services/specialized-sourcing", // Create this page
// // // //     icon: MagnifyingGlassIcon,
// // // //   },
// // // // ];

// // // // const ServicesPage = () => {
// // // //   return (
// // // //     <div className="section-padding bg-ax-background">
// // // //       <div className="container-custom">
// // // //         <div className="text-center mb-16">
// // // //           <h1 className="h2-heading text-white">Our Recruitment Services</h1>
// // // //           <p className="p-lead mt-4">
// // // //             Tailored solutions to meet your diverse hiring needs with efficiency and precision.
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // //           {services.map((service) => (
// // // //             <Link href={service.href} key={service.name} className="block group">
// // // //               <div className="card-base card-interactive h-full flex flex-col p-8"> {/* Ensure consistent padding */}
// // // //                 <div className="mb-5">
// // // //                   <service.icon className="h-10 w-10 text-ax-primary" />
// // // //                 </div>
// // // //                 <h2 className="text-2xl font-semibold text-white mb-3">{service.name}</h2>
// // // //                 <p className="text-ax-muted mb-5 flex-grow leading-relaxed">{service.description}</p>
// // // //                 <div className="mt-auto text-ax-primary font-medium inline-flex items-center group-hover:text-ax-primary-dark">
// // // //                   Learn More
// // // //                   <ChevronRightIcon className="ml-1.5 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" />
// // // //                 </div>
// // // //               </div>
// // // //             </Link>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ServicesPage;

// // // // src/app/services/page.tsx
// // // import React from 'react';
// // // import Link from 'next/link';
// // // import { BriefcaseIcon, UsersIcon, UserGroupIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// // // const services = [
// // //   {
// // //     name: "Permanent Hire Solutions",
// // //     description: "Securing long-term talent that aligns with your vision and culture We manage the full recruitment lifecycle for lasting placements",
// // //     href: "/services/permanent-hire", 
// // //     icon: BriefcaseIcon,
// // //   },
// // //   {
// // //     name: "Contract Staffing",
// // //     description: "Flexible, skilled professionals for your project-based requirements and fluctuating workloads Get the expertise you need, when you need it even for short term project needs",
// // //     href: "/services/contract-staffing", 
// // //     icon: UsersIcon,
// // //   },
// // //   {
// // //     name: "Executive Search",
// // //     description: "Discreet and targeted search for identifying and attracting C-suite and senior leadership talent to guide your organization",
// // //     href: "/services/executive-search", 
// // //     icon: UserGroupIcon,
// // //   },
// // //   {
// // //     name: "Specialized Talent Sourcing",
// // //     description: "Deep dive sourcing for niche skills and hard-to-find roles across various industries We tap into hidden talent pools",
// // //     href: "/services/specialized-sourcing", 
// // //     icon: MagnifyingGlassIcon,
// // //   },
// // // ];

// // // const ServicesPage = () => {
// // //   return (
// // //     <div className="section-padding bg-white"> {/* Light background */}
// // //       <div className="container-custom">
// // //         <div className="text-center mb-16">
// // //           <h1 className="h2-heading text-gray-900">Our Recruitment Services</h1>
// // //           <p className="p-lead mt-4 text-gray-700">
// // //             Tailored solutions to meet your diverse hiring needs with efficiency and precision
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // //           {services.map((service) => (
// // //             <Link href={service.href} key={service.name} className="block group">
// // //               <div className="card-base bg-gray-50 card-interactive h-full flex flex-col p-8"> {/* Light card background */}
// // //                 <div className="mb-5">
// // //                   <service.icon className="h-10 w-10 text-blue-600" /> {/* Primary color for icon */}
// // //                 </div>
// // //                 <h2 className="text-2xl font-semibold text-gray-800 mb-3">{service.name}</h2>
// // //                 <p className="text-gray-600 mb-5 flex-grow leading-relaxed">{service.description}</p>
// // //                 <div className="mt-auto text-blue-600 font-medium inline-flex items-center group-hover:text-blue-700">
// // //                   Learn More
// // //                   <ChevronRightIcon className="ml-1.5 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" />
// // //                 </div>
// // //               </div>
// // //             </Link>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ServicesPage;

// // // src/app/services/page.tsx
// // import React from 'react';
// // import Link from 'next/link';
// // import { BriefcaseIcon, UsersIcon, UserGroupIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// // const services = [
// //   // ... (service data remains the same)
// //   {
// //     name: "Permanent Hire Solutions",
// //     description: "Securing long-term talent that aligns with your vision and culture We manage the full recruitment lifecycle for lasting placements",
// //     href: "/services/permanent-hire", 
// //     icon: BriefcaseIcon,
// //   },
// //   {
// //     name: "Contract Staffing",
// //     description: "Flexible, skilled professionals for your project-based requirements and fluctuating workloads Get the expertise you need, when you need it even for short term project needs",
// //     href: "/services/contract-staffing", 
// //     icon: UsersIcon,
// //   },
// //   {
// //     name: "Executive Search",
// //     description: "Discreet and targeted search for identifying and attracting C-suite and senior leadership talent to guide your organization",
// //     href: "/services/executive-search", 
// //     icon: UserGroupIcon,
// //   },
// //   {
// //     name: "Specialized Talent Sourcing",
// //     description: "Deep dive sourcing for niche skills and hard-to-find roles across various industries We tap into hidden talent pools",
// //     href: "/services/specialized-sourcing", 
// //     icon: MagnifyingGlassIcon,
// //   },
// // ];

// // const ServicesPage = () => {
// //   return (
// //     <div className="section-padding bg-white"> 
// //       <div className="container-custom">
// //         <div className="text-center mb-16">
// //           <h1 className="h2-heading">Our Recruitment Services</h1> {/* Uses global style */}
// //           <p className="p-lead mt-4"> {/* Uses global style */}
// //             Tailored solutions to meet your diverse hiring needs with efficiency and precision
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {services.map((service) => (
// //             <Link href={service.href} key={service.name} className="block group">
// //               <div className="card-base card-interactive h-full flex flex-col p-8"> {/* Uses global card style */}
// //                 <div className="mb-5">
// //                   <service.icon className="h-10 w-10 text-blue-600" /> {/* Primary color for icon */}
// //                 </div>
// //                 <h2 className="text-2xl font-semibold text-black mb-3">{service.name}</h2> {/* Dark heading */}
// //                 <p className="text-gray-700 mb-5 flex-grow leading-relaxed">{service.description}</p> {/* Standard text */}
// //                 <div className="mt-auto link-primary font-medium inline-flex items-center group-hover:text-blue-700"> {/* Global link style */}
// //                   Learn More
// //                   <ChevronRightIcon className="ml-1.5 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" />
// //                 </div>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServicesPage;

// // src/app/services/page.tsx
// import React from 'react';
// import Link from 'next/link';
// import { BriefcaseIcon, UsersIcon, UserGroupIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// const services = [
//   {
//     name: "Permanent Hire Solutions",
//     description: "Securing long-term talent that aligns with your vision and culture We manage the full recruitment lifecycle for lasting placements",
//     href: "/services/permanent-hire", 
//     icon: BriefcaseIcon,
//   },
//   {
//     name: "Contract Staffing",
//     description: "Flexible, skilled professionals for your project-based requirements and fluctuating workloads Get the expertise you need, when you need it even for short term project needs",
//     href: "/services/contract-staffing", 
//     icon: UsersIcon,
//   },
//   {
//     name: "Executive Search",
//     description: "Discreet and targeted search for identifying and attracting C-suite and senior leadership talent to guide your organization",
//     href: "/services/executive-search", 
//     icon: UserGroupIcon,
//   },
//   {
//     name: "Specialized Talent Sourcing",
//     description: "Deep dive sourcing for niche skills and hard-to-find roles across various industries We tap into hidden talent pools",
//     href: "/services/specialized-sourcing", 
//     icon: MagnifyingGlassIcon,
//   },
// ];

// const ServicesPage = () => {
//   return (
//     // Added top padding to this wrapper to account for the fixed header
//     <div className="pt-20 lg:pt-24">
//       <div className="section-padding bg-white"> 
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h1 className="h2-heading">Our Recruitment Services</h1>
//             <p className="p-lead mt-4">
//               Tailored solutions to meet your diverse hiring needs with efficiency and precision
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {services.map((service) => (
//               <Link href={service.href} key={service.name} className="block group">
//                 <div className="card-base card-interactive h-full flex flex-col p-8">
//                   <div className="mb-5">
//                     <service.icon className="h-10 w-10 text-blue-600" />
//                   </div>
//                   <h2 className="text-2xl font-semibold text-black mb-3">{service.name}</h2>
//                   <p className="text-gray-700 mb-5 flex-grow leading-relaxed">{service.description}</p>
//                   {/* <div className="mt-auto link-primary font-medium inline-flex items-center group-hover:text-blue-700">
//                     Learn More
//                     <ChevronRightIcon className="ml-1.5 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" />
//                   </div> */}
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

// src/app/services/page.tsx
import React from 'react';
import Link from 'next/link';
import { BriefcaseIcon, UsersIcon, UserGroupIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import HeroSection from '@/components/HeroSection';

const services = [
  {
    name: "Permanent Hiring Solutions",
    description: "Securing long-term talent that aligns with your vision and culture We manage the full recruitment lifecycle for lasting placements",
    href: "#",
    icon: BriefcaseIcon,
  },
  {
    name: "Contract Staffing",
    description: "Flexible, skilled professionals for your project-based requirements and fluctuating workloads Get the expertise you need, when you need it even for short term project needs",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Executive Search",
    description: "Discreet and targeted search for identifying and attracting C-suite and senior leadership talent to guide your organization",
    href: "#",
    icon: UserGroupIcon,
  },
  {
    name: "Specialized Talent Sourcing",
    description: "Deep dive sourcing for niche skills and hard-to-find roles across various industries We tap into hidden talent pools",
    href: "#",
    icon: MagnifyingGlassIcon,
  },
];

const ServicesPage = () => {
  return (
    <>
      <HeroSection
        heroTitle="Our Recruitment Services"
        heroDescription="Tailored solutions to meet your diverse hiring needs with efficiency and precision"
        videoSrc="/videos/stockv3.mp4"
        heroButtons={[]} // No buttons
      />
      <div className="bg-white">
        <div className="section-padding">
          <div className="container-custom">
            {/* The introductory text block has been removed from here.
                It's now displayed in the HeroSection above. */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 md:pt-0"> {/* Added padding top for spacing after full-screen hero, adjust as needed */}
              {services.map((service) => (
                <Link href={service.href} key={service.name} className="block group">
                  <div className="card-base card-interactive h-full flex flex-col p-8">
                    <div className="mb-5">
                      <service.icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-black mb-3">{service.name}</h2>
                    <p className="text-gray-700 mb-5 flex-grow leading-relaxed">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;