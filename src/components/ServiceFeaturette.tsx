// // // // components/ServiceFeaturette.tsx
// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import { ChevronRightIcon } from '@heroicons/react/20/solid'; // Smaller, solid icon

// // // interface ServiceFeaturetteProps {
// // //   title: string;
// // //   description: string;
// // //   imageUrl: string;
// // //   imageAlt: string;
// // //   ctaText: string;
// // //   ctaLink: string;
// // //   reverseLayout?: boolean;
// // //   sectionBgClass?: string; // Optional background class for the section
// // // }

// // // const ServiceFeaturette: React.FC<ServiceFeaturetteProps> = ({
// // //   title,
// // //   description,
// // //   imageUrl,
// // //   imageAlt,
// // //   ctaText,
// // //   ctaLink,
// // //   reverseLayout = false,
// // //   sectionBgClass = "bg-ax-background", // Default background
// // // }) => {
// // //   return (
// // //     <section className={`section-padding ${sectionBgClass}`}>
// // //       <div className="container-custom">
// // //         <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center`}>
// // //           {/* Text Column */}
// // //           <div className={`space-y-5 ${reverseLayout ? 'md:order-last' : ''}`}>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
// // //               {title}
// // //             </h2>
// // //             <p className="text-lg text-ax-muted leading-relaxed">
// // //               {description}
// // //             </p>
// // //             <Link href={ctaLink}
// // //               className="inline-flex items-center text-ax-primary hover:text-ax-primary-dark font-semibold group transition-colors duration-200 text-lg"
// // //             >
// // //               {ctaText}
// // //               <ChevronRightIcon className="ml-1.5 h-6 w-6 transform transition-transform duration-200 group-hover:translate-x-1" />
// // //             </Link>
// // //           </div>

// // //           {/* Image Column */}
// // //           <div className={`mt-10 md:mt-0 ${reverseLayout ? 'md:order-first' : ''}`}>
// // //             <div className="relative aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-2xl group">
// // //               <Image
// // //                 src={imageUrl}
// // //                 alt={imageAlt}
// // //                 fill
// // //                 className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
// // //                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
// // //               />
// // //                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ServiceFeaturette;

// // // src/components/ServiceFeaturette.tsx
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { ChevronRightIcon } from '@heroicons/react/20/solid'; // Smaller, solid icon

// // interface ServiceFeaturetteProps {
// //   title: string;
// //   description: string;
// //   imageUrl: string;
// //   imageAlt: string;
// //   ctaText: string;
// //   ctaLink: string;
// //   reverseLayout?: boolean;
// //   sectionBgClass?: string; // Optional background class for the section
// // }

// // const ServiceFeaturette: React.FC<ServiceFeaturetteProps> = ({
// //   title,
// //   description,
// //   imageUrl,
// //   imageAlt,
// //   ctaText,
// //   ctaLink,
// //   reverseLayout = false,
// //   sectionBgClass = "bg-ax-background", // Default background
// // }) => {
// //   return (
// //     <section className={`section-padding ${sectionBgClass}`}>
// //       <div className="container-custom">
// //         <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center`}>
// //           {/* Text Column */}
// //           <div className={`space-y-5 ${reverseLayout ? 'md:order-last' : ''}`}>
// //             <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
// //               {title}
// //             </h2>
// //             <p className="text-lg text-ax-muted leading-relaxed">
// //               {description}
// //             </p>
// //             <Link href={ctaLink}
// //               className="inline-flex items-center text-ax-primary hover:text-ax-primary-dark font-semibold group transition-colors duration-200 text-lg"
// //             >
// //               {ctaText}
// //               <ChevronRightIcon className="ml-1.5 h-6 w-6 transform transition-transform duration-200 group-hover:translate-x-1" />
// //             </Link>
// //           </div>

// //           {/* Image Column */}
// //           <div className={`mt-10 md:mt-0 ${reverseLayout ? 'md:order-first' : ''}`}>
// //             {/* This div uses Tailwind CSS aspect ratio classes */}
// //             <div className="relative aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-2xl group"> {/* */}
// //               <Image
// //                 src={imageUrl}
// //                 alt={imageAlt}
// //                 fill
// //                 className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
// //                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
// //               />
// //                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div> {/* */}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServiceFeaturette;

// // src/components/ServiceFeaturette.tsx
// import Image from 'next/image';
// import Link from 'next/link';
// import { ChevronRightIcon } from '@heroicons/react/20/solid';

// interface ServiceFeaturetteProps {
//   title: string;
//   description: string;
//   imageUrl: string;
//   imageAlt: string;
//   ctaText: string;
//   ctaLink: string;
//   reverseLayout?: boolean;
//   sectionBgClass?: string;
//   textColorClass?: string; // For main text like title
//   subTextColorClass?: string; // For paragraph/description text
//   primaryColorClass?: string; // For CTA link text
// }

// const ServiceFeaturette: React.FC<ServiceFeaturetteProps> = ({
//   title,
//   description,
//   imageUrl,
//   imageAlt,
//   ctaText,
//   ctaLink,
//   reverseLayout = false,
//   sectionBgClass = "bg-white", 
//   textColorClass = "text-gray-900",
//   subTextColorClass = "text-gray-700",
//   primaryColorClass = "text-blue-600",
// }) => {
//   return (
//     <section className={`section-padding ${sectionBgClass}`}>
//       <div className="container-custom">
//         <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center`}>
//           {/* Text Column */}
//           <div className={`space-y-5 ${reverseLayout ? 'md:order-last' : ''}`}>
//             <h2 className={`text-3xl lg:text-4xl font-bold ${textColorClass} leading-tight`}>
//               {title}
//             </h2>
//             <p className={`text-lg ${subTextColorClass} leading-relaxed`}>
//               {description}
//             </p>
//             <Link href={ctaLink}
//               className={`inline-flex items-center ${primaryColorClass} hover:opacity-80 font-semibold group transition-colors duration-200 text-lg`}
//             >
//               {ctaText}
//               <ChevronRightIcon className="ml-1.5 h-6 w-6 transform transition-transform duration-200 group-hover:translate-x-1" />
//             </Link>
//           </div>

//           {/* Image Column */}
//           <div className={`mt-10 md:mt-0 ${reverseLayout ? 'md:order-first' : ''}`}>
//             <div className="relative aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-2xl group">
//               <Image
//                 src={imageUrl}
//                 alt={imageAlt}
//                 fill
//                 className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
//               />
//                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div> {/* Slightly reduced overlay */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceFeaturette;

// src/components/ServiceFeaturette.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface ServiceFeaturetteProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
  reverseLayout?: boolean;
  sectionBgClass?: string; 
}

const ServiceFeaturette: React.FC<ServiceFeaturetteProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  ctaText,
  ctaLink,
  reverseLayout = false,
  sectionBgClass = "bg-white", 
}) => {
  return (
    <section className={`section-padding ${sectionBgClass}`}>
      <div className="container-custom">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center`}>
          <div className={`space-y-5 ${reverseLayout ? 'md:order-last' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight"> {/* Directly use dark text */}
              {title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed"> {/* Standard paragraph text color */}
              {description}
            </p>
            
          </div>

          <div className={`mt-10 md:mt-0 ${reverseLayout ? 'md:order-first' : ''}`}>
            <div className="relative aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeaturette;