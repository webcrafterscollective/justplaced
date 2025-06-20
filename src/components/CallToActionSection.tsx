// // // components/CallToActionSection.tsx
// // import Link from 'next/link';

// // interface CallToActionProps {
// //     title?: string;
// //     description?: string;
// //     ctaText?: string;
// //     ctaLink?: string;
// // }

// // const CallToActionSection: React.FC<CallToActionProps> = ({
// //     title = "Ready to Elevate Your Business?",
// //     description = "Let's discuss how Just Placed Solutions can help you achieve your strategic goals. Contact us today for a personalized consultation.",
// //     ctaText = "Get in Touch",
// //     ctaLink = "/contact"
// // }) => {
// //   return (
// //     <section className="section-padding bg-ax-background"> {/* Or bg-ax-card for contrast */}
// //       <div className="container-custom text-center bg-ax-card p-10 sm:p-16 rounded-xl shadow-2xl">
// //         <h2 className="h2-heading text-white mb-5">
// //           {title}
// //         </h2>
// //         <p className="p-lead mb-10">
// //           {description}
// //         </p>
// //         <Link href={ctaLink} className="button-primary text-lg">
// //           {ctaText}
// //         </Link>
// //       </div>
// //     </section>
// //   );
// // };

// // export default CallToActionSection;

// // components/CallToActionSection.tsx
// import Link from 'next/link';

// interface CallToActionProps {
//     title?: string;
//     description?: string;
//     ctaText?: string;
//     ctaLink?: string;
//     sectionBgClass?: string;
//     cardBgClass?: string;
//     headingColorClass?: string;
//     textColorClass?: string;
// }

// const CallToActionSection: React.FC<CallToActionProps> = ({
//     title = "Ready to Elevate Your Business",
//     description = "Partner with Just Placed Solutions to build a workforce that drives success and growth efficiently",
//     ctaText = "Get in Touch",
//     ctaLink = "/contact",
//     sectionBgClass = "bg-gray-100", // Default light background
//     cardBgClass = "bg-white",       // Default card background
//     headingColorClass = "text-gray-900",
//     textColorClass = "text-gray-700"
// }) => {
//   return (
//     <section className={`section-padding ${sectionBgClass}`}>
//       <div className={`container-custom text-center ${cardBgClass} p-10 sm:p-16 rounded-xl shadow-2xl`}>
//         <h2 className={`h2-heading ${headingColorClass} mb-5`}>
//           {title}
//         </h2>
//         <p className={`p-lead mb-10 ${textColorClass}`}>
//           {description}
//         </p>
//         <Link href={ctaLink} className="button-primary text-lg"> {/* Uses global button-primary style */}
//           {ctaText}
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default CallToActionSection;

// components/CallToActionSection.tsx
import Link from 'next/link';

interface CallToActionProps {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    sectionBgClass?: string;
    cardBgClass?: string; // e.g. if the card needs to be white on a gray section
}

const CallToActionSection: React.FC<CallToActionProps> = ({
    title = "Ready to Elevate Your Business",
    description = "Partner with Just Placed Solutions to build a workforce that drives success and growth efficiently",
    ctaText = "Get in Touch",
    ctaLink = "/contact",
    sectionBgClass = "bg-gray-100", 
    cardBgClass = "bg-white", // Card background within this section
}) => {
  return (
    <section className={`section-padding ${sectionBgClass}`}>
      <div className={`container-custom text-center ${cardBgClass} p-10 sm:p-16 rounded-xl shadow-xl`}>
        <h2 className="h2-heading mb-5"> {/* Uses global style */}
          {title}
        </h2>
        <p className="p-lead mb-10"> {/* Uses global style */}
          {description}
        </p>
        <Link href={ctaLink} className="button-primary text-lg">
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;