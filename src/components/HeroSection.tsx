// // // // components/HeroSection.tsx
// // // "use client";
// // // import Link from 'next/link';

// // // const HeroSection = () => {
// // //   // Header height is h-20 (80px) / lg:h-24 (96px)
// // //   // Add some extra space for visual separation
// // //   const contentPaddingTop = "pt-28 lg:pt-32"; // e.g., 80px + 32px / 96px + 32px

// // //   return (
// // //     // This section itself has no background color, video is the background
// // //     <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
// // //       {/* Video Background Container */}
// // //       <div className="absolute top-0 left-0 w-full h-full -z-10">
// // //         <video
// // //           autoPlay
// // //           loop
// // //           muted
// // //           playsInline
// // //           className="w-full h-full object-cover"
// // //           poster="/images/permanent-hire-feature.jpg"
// // //         >
// // //           <source src="/videos/stockv1.mp4" type="video/mp4" />
// // //           Your browser does not support the video tag.
// // //         </video>
// // //       </div>

// // //       {/* Dark Overlay on top of video for text readability - reduced opacity */}
// // //       <div className="absolute top-0 left-0 w-full h-full bg-ax-background opacity-50 z-[1]"></div> {/* Was opacity-70, now opacity-50 */}

// // //       {/* Content on top of overlay and video */}
// // //       <div className={`relative z-[2] container-custom text-center ${contentPaddingTop}`}>
// // //         <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 drop-shadow-xl text-white leading-tight">
// // //           Bridging Talent <span className="text-ax-primary">With Opportunity</span>
// // //         </h1>
// // //         <p className="text-lg sm:text-xl lg:text-2xl text-ax-foreground mb-10 max-w-3xl mx-auto drop-shadow-lg">
// // //           Just Placed Solutions is a dynamic manpower consultancy dedicated to bridging the gap between skilled candidates and leading companies across all industries.
// // //         </p>
// // //         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
// // //             <Link href="/services" className="button-primary">
// // //                 Our Services
// // //             </Link>
// // //             <Link href="/contact" className="button-secondary">
// // //                 Contact Us
// // //             </Link>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;

// // // components/HeroSection.tsx
// // "use client";
// // import Link from 'next/link';

// // const HeroSection = () => {
// //   const contentPaddingTop = "pt-28 lg:pt-32"; 

// //   return (
// //     <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
// //       <div className="absolute top-0 left-0 w-full h-full -z-10">
// //         <video
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //           className="w-full h-full object-cover"
// //           poster="/images/permanent-hire-feature.jpg"
// //         >
// //           <source src="/videos/stockv1.mp4" type="video/mp4" />
// //           Your browser does not support the video tag
// //         </video>
// //       </div>

// //       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[1]"></div> {/* Adjusted overlay for potentially lighter main theme */}

// //       <div className={`relative z-[2] container-custom text-center ${contentPaddingTop}`}>
// //         <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 drop-shadow-xl text-white leading-tight">
// //           Bridging Talent <span className="text-blue-500">With Opportunity</span> {/* Primary color updated */}
// //         </h1>
// //         <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-lg">
// //           Dedicated to bridge the talent with opportunity across all domains
// //         </p>
// //         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
// //             <Link href="/services" className="button-primary bg-blue-500 hover:bg-blue-600 text-white"> {/* Ensure button primary is styled for hero if different from global */}
// //                 Our Services
// //             </Link>
// //             <Link href="/contact" className="button-secondary border-white text-white hover:bg-white hover:text-blue-600"> {/* Ensure button secondary is styled for hero */}
// //                 Contact Us
// //             </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// // components/HeroSection.tsx
// "use client";
// import Link from 'next/link';

// const HeroSection = () => {
//   const contentPaddingTop = "pt-28 lg:pt-32"; 

//   return (
//     <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-full -z-10">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//           poster="/images/permanent-hire-feature.jpg"
//         >
//           <source src="/videos/stockv1.mp4" type="video/mp4" />
//           Your browser does not support the video tag
//         </video>
//       </div>

//       {/* Darker overlay for better text contrast on video */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[1]"></div> 

//       <div className={`relative z-[2] container-custom text-center ${contentPaddingTop}`}>
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 drop-shadow-lg text-white leading-tight">
//           Bridging Talent <span className="text-blue-400">With Opportunity</span> {/* Brighter blue for hero text */}
//         </h1>
//         <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto drop-shadow-md"> {/* Lighter gray, still very visible on dark overlay */}
//           Dedicated to bridge the talent with opportunity across all domains
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//             <Link href="/services" className="button-primary bg-blue-500 hover:bg-blue-600 text-white border border-blue-500 hover:border-blue-600">
//                 Our Services
//             </Link>
//             <Link href="/contact" className="button-secondary border-white text-white hover:bg-white hover:text-blue-700">
//                 Contact Us
//             </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// src/components/HeroSection.tsx
"use client";
import Link from 'next/link';
import React from 'react';

// Define an interface for individual button props
interface HeroButton {
  text: string;
  link: string;
  type: 'primary' | 'secondary';
}

// Update HeroSectionProps to include video and poster sources
interface HeroSectionProps {
  heroTitle?: React.ReactNode;
  heroDescription?: string;
  heroButtons?: HeroButton[];
  videoSrc?: string;    // Prop for custom video source URL
  posterSrc?: string;   // Prop for custom poster image URL
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroTitle,
  heroDescription,
  heroButtons,
  videoSrc,
  posterSrc,
}) => {
  const contentPaddingTop = "pt-28 lg:pt-32";

  // Default texts
  const defaultTitle = <>Bridging Talent <span className="text-blue-400">With Opportunity</span></>;
  const defaultDescription = "Dedicated to bridge the talent with opportunity across all domains";

  // Default video and poster sources
  const currentVideoSrc = videoSrc || "/videos/stockv1.mp4";
  const currentPosterSrc = posterSrc || "/images/permanent-hire-feature.jpg";

  const renderButtons = () => {
    if (heroButtons !== undefined) {
      if (heroButtons.length > 0) {
        return heroButtons.map((button, index) => {
          let buttonClasses = "";
          if (button.type === 'primary') {
            buttonClasses = "button-primary bg-blue-500 hover:bg-blue-600 text-white border border-blue-500 hover:border-blue-600";
          } else if (button.type === 'secondary') {
            buttonClasses = "button-secondary border-white text-white hover:bg-white hover:text-blue-700";
          }
          return (
            <Link key={index} href={button.link} className={buttonClasses}>
              {button.text}
            </Link>
          );
        });
      } else {
        return null;
      }
    } else {
      return (
        <>
          <Link href="/services" className="button-primary bg-blue-500 hover:bg-blue-600 text-white border border-blue-500 hover:border-blue-600">
            Our Services
          </Link>
          <Link href="/contact" className="button-secondary border-white text-white hover:bg-white hover:text-blue-700">
            Contact Us
          </Link>
        </>
      );
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={currentPosterSrc} // Use prop or default poster
        >
          <source src={currentVideoSrc} type="video/mp4" /> {/* Use prop or default video */}
          Your browser does not support the video tag
        </video>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[1]"></div>

      <div className={`relative z-[2] container-custom text-center ${contentPaddingTop}`}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 drop-shadow-lg text-white leading-tight">
          {heroTitle !== undefined ? heroTitle : defaultTitle}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto drop-shadow-md">
          {heroDescription !== undefined ? heroDescription : defaultDescription}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {renderButtons()}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;