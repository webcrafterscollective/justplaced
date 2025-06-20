// // // app/page.tsx
// // import HeroSection from '@/components/HeroSection';
// // import ServiceFeaturette from '@/components/ServiceFeaturette';
// // import WhyChooseUsSection from '@/components/WhyChooseUsSection';
// // import CallToActionSection from '@/components/CallToActionSection';

// // export default function HomePage() {
// //   const firstBgImageFilename = 'after-hero.png'; // Background for Intro and Service Featurettes
// //   const secondBgImageFilename = 'ashley-byrd-Kurq9_tsRHM-unsplash.png'; // Background for WhyChooseUs and CallToAction

// //   return (
// //     <>
// //       <HeroSection />

// //       {/* First Parent wrapper for the 'after-hero.png' background */}
// //       <div
// //         className={`relative bg-cover bg-center bg-no-repeat bg-fixed min-h-screen`}
// //         style={{ backgroundImage: `url('/images/${firstBgImageFilename}')` }}
// //       >
// //         {/* Overlay for the first wrapped section */}
// //         <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

// //         {/* Content container for the first set of sections */}
// //         <div className="relative z-10">
// //           {/* Introduction Section */}
// //           <section className="section-padding bg-transparent">
// //             <div className="container-custom text-center">
// //               <h2 className="h2-heading text-white">
// //                 Efficient Recruitment, Lasting Partnerships
// //               </h2>
// //               <p className="p-lead mt-4 mb-10 text-gray-200 md:text-lg lg:text-xl">
// //                 We specialize in providing end-to-end recruitment support, from sourcing talent to final onboarding.
// //                 Our mission is to streamline hiring with efficiency, precision, and professionalism.
// //               </p>
// //             </div>
// //           </section>

// //           {/* Service Featurettes */}
// //           <ServiceFeaturette
// //             title="Permanent Hire Solutions"
// //             description="Leverage our expertise to find dedicated professionals who align with your company culture and drive long-term growth. We manage the entire lifecycle, ensuring a seamless fit."
// //             imageUrl="/images/permanent-hire-feature.jpg"
// //             imageAlt="Professionals planning long-term strategy"
// //             ctaText="Explore Permanent Staffing"
// //             ctaLink="/services/permanent-hire"
// //             sectionBgClass="bg-transparent"
// //           />
// //           <ServiceFeaturette
// //             title="Contract Staffing"
// //             description="Gain operational agility with our flexible contract staffing solutions. We connect you with skilled professionals for project-based needs, ensuring timely delivery and expertise."
// //             imageUrl="/images/contract-staffing.jpg"
// //             imageAlt="Team collaborating on a project with flexibility"
// //             ctaText="Discover Contract Solutions"
// //             ctaLink="/services/contract-staffing"
// //             reverseLayout={true}
// //             sectionBgClass="bg-transparent"
// //           />
// //            <ServiceFeaturette
// //             title="Executive Search"
// //             description="Identifying and attracting top-tier leadership talent requires a nuanced approach. Our executive search practice is discreet, targeted, and effective."
// //             imageUrl="/images/executive-search.jpg"
// //             imageAlt="Executive leader overlooking city skyline"
// //             ctaText="Find Your Next Leader"
// //             ctaLink="/services/executive-search"
// //             sectionBgClass="bg-transparent"
// //           />
// //         </div> {/* End of z-10 content wrapper for first background */}
// //       </div> {/* End of first shared background wrapper */}

// //       {/* Second Parent wrapper for the 'ashley-byrd-Kurq9_tsRHM-unsplash.png' (jellyfish) background */}
// //       <div
// //         className={`relative bg-cover bg-center bg-no-repeat bg-fixed`} // You can add min-h-screen here too if needed, or let content define height
// //         style={{ backgroundImage: `url('/images/${secondBgImageFilename}')` }}
// //       >
// //         {/* Overlay for the second wrapped section */}
// //         <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

// //         {/* Content container for the second set of sections */}
// //         <div className="relative z-10">
// //           <WhyChooseUsSection /> {/* Ensure this component's outer section is bg-transparent internally */}
// //           <CallToActionSection
// //             title="Ready to Build Your Dream Team?"
// //             description="Partner with Just Placed Solutions to build a workforce that drives success and growth. Let's discuss your unique hiring needs today."
// //             ctaText="Schedule a Consultation"
// //             ctaLink="/contact"
// //           /> {/* Ensure this component's outer section is bg-transparent internally */}
// //         </div> {/* End of z-10 content wrapper for second background */}
// //       </div> {/* End of second shared background wrapper */}
// //     </>
// //   );
// // }

// // app/page.tsx
// import HeroSection from '@/components/HeroSection';
// import ServiceFeaturette from '@/components/ServiceFeaturette';
// import WhyChooseUsSection from '@/components/WhyChooseUsSection';
// import CallToActionSection from '@/components/CallToActionSection';

// export default function HomePage() {
//   const firstBgImageFilename = 'after-hero.png'; 
//   const secondBgImageFilename = 'ashley-byrd-Kurq9_tsRHM-unsplash.png';

//   return (
//     <>
//       <HeroSection /> {/* Hero handles its own dark background/overlay and light text */}

//       {/* Section 1: Introduction and Service Featurettes - Light Theme */}
//       <div className="bg-white"> {/* White background for this section block */}
//         {/* Introduction Section */}
//         <section className="section-padding bg-transparent"> {/* Transparent to inherit white from parent */}
//           <div className="container-custom text-center">
//             <h2 className="h2-heading text-gray-900">
//               Efficient Recruitment, Lasting Partnerships
//             </h2>
//             <p className="p-lead mt-4 mb-10 text-gray-700 md:text-lg lg:text-xl">
//               We specialize in providing end-to-end recruitment support, from sourcing talent to final onboarding
//               Our mission is to streamline hiring with efficiency, precision, and professionalism
//             </p>
//           </div>
//         </section>

//         {/* Service Featurettes */}
//         <ServiceFeaturette
//           title="Permanent Hire Solutions"
//           description="Leverage our expertise to find dedicated professionals who align with your company culture and drive long-term growth We manage the entire lifecycle, ensuring a seamless fit"
//           imageUrl="/images/permanent-hire-feature.jpg"
//           imageAlt="Professionals planning long-term strategy"
//           ctaText="Explore Permanent Staffing"
//           ctaLink="/services/permanent-hire"
//           sectionBgClass="bg-gray-50" // Light gray for featurette background
//           textColorClass="text-gray-800" // Explicit dark text for featurettes
//           subTextColorClass="text-gray-600"
//           primaryColorClass="text-blue-600"
//         />
//         <ServiceFeaturette
//           title="Contract Staffing"
//           description="Gain operational agility with our flexible contract staffing solutions We connect you with skilled professionals for project-based needs, ensuring timely delivery and expertise even for short term project needs"
//           imageUrl="/images/contract-staffing.jpg"
//           imageAlt="Team collaborating on a project with flexibility"
//           ctaText="Discover Contract Solutions"
//           ctaLink="/services/contract-staffing"
//           reverseLayout={true}
//           sectionBgClass="bg-white" // Alternating background
//           textColorClass="text-gray-800"
//           subTextColorClass="text-gray-600"
//           primaryColorClass="text-blue-600"
//         />
//          <ServiceFeaturette
//           title="Executive Search"
//           description="Identifying and attracting top-tier leadership talent requires a nuanced approach Our executive search practice is discreet, targeted, and effective"
//           imageUrl="/images/executive-search.jpg"
//           imageAlt="Executive leader overlooking city skyline"
//           ctaText="Find Your Next Leader"
//           ctaLink="/services/executive-search"
//           sectionBgClass="bg-gray-50" // Light gray for featurette background
//           textColorClass="text-gray-800"
//           subTextColorClass="text-gray-600"
//           primaryColorClass="text-blue-600"
//         />
//       </div>

//       {/* Section 2: WhyChooseUs and CallToAction - Light Theme */}
//       <div className="bg-white"> {/* White background for this section block */}
//         <WhyChooseUsSection 
//             sectionBgClass="bg-white" // Use light background
//             cardBgClass="bg-gray-50" // Cards slightly different
//             headingColorClass="text-gray-900"
//             textColorClass="text-gray-700"
//             primaryColorClass="text-blue-600"
//         />
//         <CallToActionSection
//           title="Ready to Build Your Dream Team"
//           description="Partner with Just Placed Solutions to build a workforce that drives success and growth efficiently"
//           ctaText="Schedule a Consultation"
//           ctaLink="/contact"
//           sectionBgClass="bg-gray-100" // e.g. light gray
//           cardBgClass="bg-white"
//           headingColorClass="text-gray-900"
//           textColorClass="text-gray-700"
//         />
//       </div>
//     </>
//   );
// }

// app/page.tsx
import HeroSection from '@/components/HeroSection';
import ServiceFeaturette from '@/components/ServiceFeaturette';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CallToActionSection from '@/components/CallToActionSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Section 1: Introduction and Service Featurettes - Standard Light Theme */}
      <div className="bg-white"> 
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="h2-heading"> {/* Uses global h2 style */}
              Efficient Recruitment, Lasting Partnerships
            </h2>
            <p className="p-lead mt-4 mb-10"> {/* Uses global p-lead style */}
              We specialize in providing end-to-end recruitment support, from sourcing talent to final onboarding
              Our mission is to streamline hiring with efficiency, precision, and professionalism
            </p>
          </div>
        </section>

        <ServiceFeaturette
          title="Permanent Hire Solutions"
          description="Leverage our expertise to find dedicated professionals who align with your company culture and drive long-term growth We manage the entire lifecycle, ensuring a seamless fit"
          imageUrl="/images/permanent-hire-feature.jpg"
          imageAlt="Professionals planning long-term strategy"
          ctaText="Explore Permanent Staffing"
          ctaLink="/services/permanent-hire"
          sectionBgClass="bg-gray-50" // Card-like background for distinction
        />
        <ServiceFeaturette
          title="Contract Staffing"
          description="Gain operational agility with our flexible contract staffing solutions We connect you with skilled professionals for project-based needs, ensuring timely delivery and expertise even for short term project needs"
          imageUrl="/images/contract-staffing.jpg"
          imageAlt="Team collaborating on a project with flexibility"
          ctaText="Discover Contract Solutions"
          ctaLink="/services/contract-staffing"
          reverseLayout={true}
          sectionBgClass="bg-white" 
        />
         <ServiceFeaturette
          title="Executive Search"
          description="Identifying and attracting top-tier leadership talent requires a nuanced approach Our executive search practice is discreet, targeted, and effective"
          imageUrl="/images/executive-search.jpg"
          imageAlt="Executive leader overlooking city skyline"
          ctaText="Find Your Next Leader"
          ctaLink="/services/executive-search"
          sectionBgClass="bg-gray-50" 
        />
      </div>

      {/* Section 2: WhyChooseUs and CallToAction - Standard Light Theme */}
      <div className="bg-white"> 
        <WhyChooseUsSection 
            sectionBgClass="bg-white"
            cardBgClass="bg-gray-50" // Standard card background
        />
        <CallToActionSection
          title="Ready to Build Your Dream Team"
          description="Partner with Just Placed Solutions to build a workforce that drives success and growth efficiently"
          ctaText="Schedule a Consultation"
          ctaLink="/contact"
          sectionBgClass="bg-gray-100" // Slightly different background for this CTA section
          cardBgClass="bg-white" // Card within this section
        />
      </div>
    </>
  );
}