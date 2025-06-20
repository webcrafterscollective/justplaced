// // // components/WhyChooseUsSection.tsx
// // import { ShieldCheckIcon, LightBulbIcon, UsersIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

// // const benefits = [
// //   {
// //     icon: RocketLaunchIcon,
// //     title: 'Efficient Process',
// //     description: 'Streamlined hiring with precision, from sourcing to onboarding.'
// //   },
// //   {
// //     icon: UsersIcon,
// //     title: 'Industry Wide Reach',
// //     description: 'Connecting skilled candidates with leading companies across all industries.'
// //   },
// //   {
// //     icon: ShieldCheckIcon,
// //     title: 'Professional Partnership',
// //     description: 'Dedicated support to build a workforce that drives your success and growth.'
// //   }
// // ];

// // const WhyChooseUsSection = () => {
// //   return (
// //     <section className="section-padding bg-ax-card">
// //       <div className="container-custom">
// //         <div className="text-center mb-12 lg:mb-16">
// //           <h2 className="h2-heading text-white">
// //             Why Partner with Just Placed?
// //           </h2>
// //           <p className="p-lead mt-4">
// //             We are committed to your success, providing tailored solutions that drive growth and efficiency.
// //           </p>
// //         </div>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {benefits.map((benefit) => (
// //             <div key={benefit.title} className="card-base bg-ax-background p-8 text-center card-interactive"> {/* Deeper dark for cards */}
// //               <div className="flex justify-center mb-5">
// //                 <benefit.icon className="h-12 w-12 text-ax-primary" />
// //               </div>
// //               <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
// //               <p className="text-ax-muted leading-relaxed">{benefit.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WhyChooseUsSection;

// // components/WhyChooseUsSection.tsx
// import { ShieldCheckIcon, LightBulbIcon, UsersIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

// interface WhyChooseUsSectionProps {
//   sectionBgClass?: string;
//   cardBgClass?: string;
//   headingColorClass?: string;
//   textColorClass?: string;
//   primaryColorClass?: string;
// }

// const benefits = [
//   {
//     icon: RocketLaunchIcon,
//     title: 'Efficient Process',
//     description: 'Streamlined hiring with precision, from sourcing to onboarding'
//   },
//   {
//     icon: UsersIcon,
//     title: 'Industry Wide Reach',
//     description: 'Connecting skilled candidates with leading companies across all industries'
//   },
//   {
//     icon: ShieldCheckIcon,
//     title: 'Professional Partnership',
//     description: 'Dedicated support to build a workforce that drives your success and growth'
//   }
// ];

// const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
//   sectionBgClass = "bg-gray-50", // Default light background
//   cardBgClass = "bg-white",       // Default even lighter card background
//   headingColorClass = "text-gray-900",
//   textColorClass = "text-gray-700",
//   primaryColorClass = "text-blue-600"
// }) => {
//   return (
//     <section className={`section-padding ${sectionBgClass}`}>
//       <div className="container-custom">
//         <div className="text-center mb-12 lg:mb-16">
//           <h2 className={`h2-heading ${headingColorClass}`}>
//             Why Partner with Just Placed
//           </h2>
//           <p className={`p-lead mt-4 ${textColorClass}`}>
//             We are committed to your success, providing tailored solutions that drive growth and efficiency
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {benefits.map((benefit) => (
//             <div key={benefit.title} className={`card-base ${cardBgClass} p-8 text-center card-interactive`}>
//               <div className="flex justify-center mb-5">
//                 <benefit.icon className={`h-12 w-12 ${primaryColorClass}`} />
//               </div>
//               <h3 className={`text-xl font-semibold ${headingColorClass} mb-3`}>{benefit.title}</h3>
//               <p className={`${textColorClass} leading-relaxed`}>{benefit.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;

// components/WhyChooseUsSection.tsx
import { ShieldCheckIcon, UsersIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

interface WhyChooseUsSectionProps {
  sectionBgClass?: string;
  cardBgClass?: string; // Retain for flexibility if cards need different bg than global .card-base on this section
}

const benefits = [
  {
    icon: RocketLaunchIcon,
    title: 'Efficient Process',
    description: 'Streamlined hiring with precision, from sourcing to onboarding'
  },
  {
    icon: UsersIcon,
    title: 'Industry Wide Reach',
    description: 'Connecting skilled candidates with leading companies across all industries'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Professional Partnership',
    description: 'Dedicated support to build a workforce that drives your success and growth'
  }
];

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  sectionBgClass = "bg-white", 
  cardBgClass, // If undefined, global .card-base style will apply if outer is card-base
}) => {
  return (
    <section className={`section-padding ${sectionBgClass}`}>
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="h2-heading"> {/* Uses global style */}
            Why Partner with Just Placed
          </h2>
          <p className="p-lead mt-4"> {/* Uses global style */}
            We are committed to your success, providing tailored solutions that drive growth and efficiency
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className={`card-base ${cardBgClass || ''} p-8 text-center card-interactive`}>
              <div className="flex justify-center mb-5">
                <benefit.icon className="h-12 w-12 text-blue-600" /> {/* Primary color for icon */}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{benefit.title}</h3> {/* Dark heading */}
              <p className="text-gray-700 leading-relaxed">{benefit.description}</p> {/* Standard paragraph text */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;