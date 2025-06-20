// // // // // src/app/career/page.tsx
// // // // import React from 'react';
// // // // import Link from 'next/link';
// // // // import { MapPinIcon, BuildingOffice2Icon, ClockIcon } from '@heroicons/react/24/outline';

// // // // const JobOpeningCard = ({ title, location, type, description, applyLink }: { title: string, location: string, type: string, description: string, applyLink: string }) => (
// // // //   <div className="card-base card-interactive">
// // // //     <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
// // // //     <div className="flex flex-wrap items-center text-sm text-ax-muted gap-x-4 gap-y-1 mb-4">
// // // //       <span className="inline-flex items-center"><MapPinIcon className="h-4 w-4 mr-1.5 text-ax-lightest-slate"/>{location}</span>
// // // //       <span className="inline-flex items-center"><BuildingOffice2Icon className="h-4 w-4 mr-1.5 text-ax-lightest-slate"/>{type}</span>
// // // //       {/* <span className="inline-flex items-center"><ClockIcon className="h-4 w-4 mr-1.5 text-ax-lightest-slate"/>Posted X days ago</span> */}
// // // //     </div>
// // // //     <p className="text-ax-foreground mb-5 line-clamp-3 leading-relaxed">{description}</p>
// // // //     <Link href={applyLink} className="button-secondary text-sm py-2 px-5">
// // // //       View Details & Apply
// // // //     </Link>
// // // //   </div>
// // // // );

// // // // const CareerPage = () => {
// // // //   const jobOpenings = [
// // // //     {
// // // //       title: "Recruitment Consultant",
// // // //       location: "Remote / Generic City, India",
// // // //       type: "Full-time",
// // // //       description: "Join our growing team as a Recruitment Consultant. You'll manage the end-to-end hiring process, build strong client relationships, and source top talent across various industries. Prior experience in manpower consultancy is a plus.",
// // // //       applyLink: "/contact?subject=Application%20for%20Recruitment%20Consultant" // Link to contact form with subject
// // // //     },
// // // //     {
// // // //       title: "Talent Sourcer (IT)",
// // // //       location: "Remote",
// // // //       type: "Part-time / Contract",
// // // //       description: "We are seeking a skilled Talent Sourcer specializing in IT roles. You will be responsible for identifying and engaging passive candidates through various channels. Strong understanding of tech stacks and sourcing tools required.",
// // // //       applyLink: "/contact?subject=Application%20for%20Talent%20Sourcer%20(IT)"
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="section-padding bg-ax-background">
// // // //       <div className="container-custom">
// // // //         <div className="text-center mb-16">
// // // //           <h1 className="h2-heading text-white">Join Our Team</h1>
// // // //           <p className="p-lead mt-4">
// // // //             Be part of a dynamic startup that's reshaping the future of recruitment. We value passion, innovation, and a drive for excellence.
// // // //           </p>
// // // //         </div>

// // // //         {jobOpenings.length > 0 ? (
// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // //             {jobOpenings.map(job => (
// // // //               <JobOpeningCard key={job.title} {...job} />
// // // //             ))}
// // // //           </div>
// // // //         ) : (
// // // //           <div className="card-base text-center py-12">
// // // //             <h2 className="text-2xl font-semibold text-white mb-4">No Current Openings</h2>
// // // //             <p className="text-ax-muted max-w-md mx-auto mb-6">
// // // //               We are not actively hiring for specific roles at this moment. However, as a growing startup, we're always keen to connect with talented individuals.
// // // //             </p>
// // // //             <p className="text-ax-muted">
// // // //               Feel free to send your resume to{' '}
// // // //               <a href="mailto:careers@justplaced.solutions" className="text-ax-primary hover:underline">
// // // //                 careers@justplaced.solutions {/* Example email */}
// // // //               </a>.
// // // //             </p>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CareerPage;

// // // // src/app/career/page.tsx
// // // import React from 'react';
// // // import Link from 'next/link';
// // // import { MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

// // // const JobOpeningCard = ({ title, location, type, description, applyLink }: { title: string, location: string, type: string, description: string, applyLink: string }) => (
// // //   <div className="card-base bg-gray-50 card-interactive"> {/* Light card background */}
// // //     <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
// // //     <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-1 mb-4">
// // //       <span className="inline-flex items-center"><MapPinIcon className="h-4 w-4 mr-1.5 text-gray-400"/>{location}</span>
// // //       <span className="inline-flex items-center"><BuildingOffice2Icon className="h-4 w-4 mr-1.5 text-gray-400"/>{type}</span>
// // //     </div>
// // //     <p className="text-gray-700 mb-5 line-clamp-3 leading-relaxed">{description}</p>
// // //     <Link href={applyLink} className="button-secondary text-sm py-2 px-5"> {/* Uses global button-secondary */}
// // //       View Details & Apply
// // //     </Link>
// // //   </div>
// // // );

// // // const CareerPage = () => {
// // //   const jobOpenings = [
// // //     {
// // //       title: "Recruitment Consultant",
// // //       location: "Remote / Generic City, India",
// // //       type: "Full-time",
// // //       description: "Join our growing team as a Recruitment Consultant You'll manage the end-to-end hiring process, build strong client relationships, and source top talent across various industries Prior experience in manpower consultancy is a plus",
// // //       applyLink: "/contact?subject=Application%20for%20Recruitment%20Consultant" 
// // //     },
// // //     {
// // //       title: "Talent Sourcer (IT)",
// // //       location: "Remote",
// // //       type: "Part-time / Contract",
// // //       description: "We are seeking a skilled Talent Sourcer specializing in IT roles You will be responsible for identifying and engaging passive candidates through various channels Strong understanding of tech stacks and sourcing tools required",
// // //       applyLink: "/contact?subject=Application%20for%20Talent%20Sourcer%20(IT)"
// // //     },
// // //   ];

// // //   return (
// // //     <div className="section-padding bg-white"> {/* Light background */}
// // //       <div className="container-custom">
// // //         <div className="text-center mb-16">
// // //           <h1 className="h2-heading text-gray-900">Join Our Team</h1>
// // //           <p className="p-lead mt-4 text-gray-700">
// // //             Be part of a dynamic startup that's reshaping the future of recruitment We value passion, innovation, and a drive for excellence
// // //           </p>
// // //         </div>

// // //         {jobOpenings.length > 0 ? (
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //             {jobOpenings.map(job => (
// // //               <JobOpeningCard key={job.title} {...job} />
// // //             ))}
// // //           </div>
// // //         ) : (
// // //           <div className="card-base bg-gray-50 text-center py-12"> {/* Light card background */}
// // //             <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Current Openings</h2>
// // //             <p className="text-gray-600 max-w-md mx-auto mb-6">
// // //               We are not actively hiring for specific roles at this moment However, as a growing startup, we're always keen to connect with talented individuals
// // //             </p>
// // //             <p className="text-gray-600">
// // //               Feel free to send your resume to{' '}
// // //               <a href="mailto:careers@justplaced.solutions" className="text-blue-600 hover:underline">
// // //                 careers@justplacedsolutions {/* Example email */}
// // //               </a>
// // //             </p>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CareerPage;

// // // src/app/career/page.tsx
// // import React from 'react';
// // import Link from 'next/link';
// // import { MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

// // const JobOpeningCard = ({ title, location, type, description, applyLink }: { title: string, location: string, type: string, description: string, applyLink: string }) => (
// //   <div className="card-base card-interactive"> {/* Uses global card style */}
// //     <h3 className="text-2xl font-semibold text-black mb-3">{title}</h3> {/* Dark heading */}
// //     <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4 gap-y-1 mb-4"> {/* Muted text for details */}
// //       <span className="inline-flex items-center"><MapPinIcon className="h-4 w-4 mr-1.5 text-gray-500"/>{location}</span>
// //       <span className="inline-flex items-center"><BuildingOffice2Icon className="h-4 w-4 mr-1.5 text-gray-500"/>{type}</span>
// //     </div>
// //     <p className="text-gray-700 mb-5 line-clamp-3 leading-relaxed">{description}</p> {/* Standard text */}
// //     <Link href={applyLink} className="button-secondary text-sm py-2 px-5">
// //       View Details & Apply
// //     </Link>
// //   </div>
// // );

// // const CareerPage = () => {
// //   const jobOpenings = [
// //     // ... (job data remains the same)
// //     {
// //       title: "Recruitment Consultant",
// //       location: "Remote / Generic City, India",
// //       type: "Full-time",
// //       description: "Join our growing team as a Recruitment Consultant You'll manage the end-to-end hiring process, build strong client relationships, and source top talent across various industries Prior experience in manpower consultancy is a plus",
// //       applyLink: "/contact?subject=Application%20for%20Recruitment%20Consultant" 
// //     },
// //     {
// //       title: "Talent Sourcer (IT)",
// //       location: "Remote",
// //       type: "Part-time / Contract",
// //       description: "We are seeking a skilled Talent Sourcer specializing in IT roles You will be responsible for identifying and engaging passive candidates through various channels Strong understanding of tech stacks and sourcing tools required",
// //       applyLink: "/contact?subject=Application%20for%20Talent%20Sourcer%20(IT)"
// //     },
// //   ];

// //   return (
// //     <div className="section-padding bg-white">
// //       <div className="container-custom">
// //         <div className="text-center mb-16">
// //           <h1 className="h2-heading">Join Our Team</h1> {/* Uses global style */}
// //           <p className="p-lead mt-4"> {/* Uses global style */}
// //             Be part of a dynamic startup that's reshaping the future of recruitment We value passion, innovation, and a drive for excellence
// //           </p>
// //         </div>

// //         {jobOpenings.length > 0 ? (
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //             {jobOpenings.map(job => (
// //               <JobOpeningCard key={job.title} {...job} />
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="card-base text-center py-12"> {/* Uses global card style */}
// //             <h2 className="text-2xl font-semibold text-black mb-4">No Current Openings</h2> {/* Dark heading */}
// //             <p className="text-gray-700 max-w-md mx-auto mb-6"> {/* Standard text */}
// //               We are not actively hiring for specific roles at this moment However, as a growing startup, we're always keen to connect with talented individuals
// //             </p>
// //             <p className="text-muted"> {/* Muted text */}
// //               Feel free to send your resume to{' '}
// //               <a href="mailto:careers@justplaced.solutions" className="link-primary"> {/* Global link style */}
// //                 careers@justplacedsolutions
// //               </a>
// //             </p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CareerPage;

// // src/app/career/page.tsx
// import React from 'react';
// import Link from 'next/link';
// import { MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

// const JobOpeningCard = ({ title, location, type, description, applyLink }: { title: string, location: string, type: string, description: string, applyLink: string }) => (
//   <div className="card-base card-interactive">
//     <h3 className="text-2xl font-semibold text-black mb-3">{title}</h3>
//     <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4 gap-y-1 mb-4">
//       <span className="inline-flex items-center"><MapPinIcon className="h-4 w-4 mr-1.5 text-gray-500"/>{location}</span>
//       <span className="inline-flex items-center"><BuildingOffice2Icon className="h-4 w-4 mr-1.5 text-gray-500"/>{type}</span>
//     </div>
//     <p className="text-gray-700 mb-5 line-clamp-3 leading-relaxed">{description}</p>
//     <Link href={applyLink} className="button-secondary text-sm py-2 px-5">
//       View Details & Apply
//     </Link>
//   </div>
// );

// const CareerPage = () => {
//   const jobOpenings = [
//     {
//       title: "Recruitment Consultant",
//       location: "Remote / Generic City, India",
//       type: "Full-time",
//       description: "Join our growing team as a Recruitment Consultant You'll manage the end-to-end hiring process, build strong client relationships, and source top talent across various industries Prior experience in manpower consultancy is a plus",
//       applyLink: "/contact?subject=Application%20for%20Recruitment%20Consultant" 
//     },
//     {
//       title: "Talent Sourcer (IT)",
//       location: "Remote",
//       type: "Part-time / Contract",
//       description: "We are seeking a skilled Talent Sourcer specializing in IT roles You will be responsible for identifying and engaging passive candidates through various channels Strong understanding of tech stacks and sourcing tools required",
//       applyLink: "/contact?subject=Application%20for%20Talent%20Sourcer%20(IT)"
//     },
//   ];

//   return (
//     // Added top padding to this wrapper to account for the fixed header
//     <div className="pt-20 lg:pt-24">
//       <div className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h1 className="h2-heading">Join Our Team</h1>
//             <p className="p-lead mt-4">
//               Be part of a dynamic startup that's reshaping the future of recruitment We value passion, innovation, and a drive for excellence
//             </p>
//           </div>

//           {jobOpenings.length > 0 ? (
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {jobOpenings.map(job => (
//                 <JobOpeningCard key={job.title} {...job} />
//               ))}
//             </div>
//           ) : (
//             <div className="card-base text-center py-12">
//               <h2 className="text-2xl font-semibold text-black mb-4">No Current Openings</h2>
//               <p className="text-gray-700 max-w-md mx-auto mb-6">
//                 We are not actively hiring for specific roles at this moment However, as a growing startup, we're always keen to connect with talented individuals
//               </p>
//               <p className="text-muted">
//                 Feel free to send your resume to{' '}
//                 <a href="mailto:careers@justplaced.solutions" className="link-primary">
//                   careers@justplacedsolutions
//                 </a>
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerPage;

// src/app/career/page.tsx
import React from 'react';
import Link from 'next/link';
import { MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import HeroSection from '@/components/HeroSection';

const JobOpeningCard = ({ title, location, type, description, applyLink }: { title: string, location: string, type: string, description: string, applyLink: string }) => (
  <div className="card-base card-interactive">
    <h3 className="text-2xl font-semibold text-black mb-3">{title}</h3>
    <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4 gap-y-1 mb-4">
      <span className="inline-flex items-center"><MapPinIcon className="h-4 w-4 mr-1.5 text-gray-500"/>{location}</span>
      <span className="inline-flex items-center"><BuildingOffice2Icon className="h-4 w-4 mr-1.5 text-gray-500"/>{type}</span>
    </div>
    <p className="text-gray-700 mb-5 line-clamp-3 leading-relaxed">{description}</p>
    <Link href={applyLink} className="button-secondary text-sm py-2 px-5">
      View Details & Apply
    </Link>
  </div>
);

const CareerPage = () => {
  const jobOpenings = [
    {
      title: "Recruitment Consultant",
      location: "Remote / PAN INDIA",
      type: "Full-time",
      description: "Join our growing team as a Recruitment Consultant You'll manage the end-to-end hiring process, build strong client relationships, and source top talent across various industries Prior experience in manpower consultancy is a plus",
      applyLink: "/contact?subject=Application%20for%20Recruitment%20Consultant"
    },
    {
      title: "Talent Sourcer (IT)",
      location: "Remote",
      type: "Part-time / Contract",
      description: "We are seeking a skilled Talent Sourcer specializing in IT roles You will be responsible for identifying and engaging passive candidates through various channels Strong understanding of tech stacks and sourcing tools required",
      applyLink: "/contact?subject=Application%20for%20Talent%20Sourcer%20(IT)"
    },
  ];

  return (
    <>
      <HeroSection
        heroTitle="Join Our Team"
        heroDescription="Be part of a dynamic startup that's reshaping the future of recruitment We value passion, innovation, and a drive for excellence"
        heroButtons={[]} // No buttons
        videoSrc="/videos/stockv5.mp4"
      />
      <div className="bg-white">
        <div className="section-padding">
          <div className="container-custom">
            {/* The introductory text block ("Join Our Team" and paragraph) 
                has been removed from here as it's now in the HeroSection. 
            */}

            {/* The jobOpenings section starts here. 
                Added pt-12 md:pt-0 for spacing after full-screen hero, adjust as needed.
            */}
            <div className="pt-12 md:pt-0">
              {jobOpenings.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {jobOpenings.map(job => (
                    <JobOpeningCard key={job.title} {...job} />
                  ))}
                </div>
              ) : (
                <div className="card-base text-center py-12">
                  <h2 className="text-2xl font-semibold text-black mb-4">No Current Openings</h2>
                  <p className="text-gray-700 max-w-md mx-auto mb-6">
                    We are not actively hiring for specific roles at this moment However, as a growing startup, we're always keen to connect with talented individuals
                  </p>
                  <p className="text-muted">
                    Feel free to send your resume to{' '}
                    <a href="mailto:careers@justplaced.solutions" className="link-primary">
                      careers@justplacedsolutions
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;