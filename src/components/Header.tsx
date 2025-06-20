// // // // // // components/Header.tsx
// // // // // "use client";

// // // // // import Link from 'next/link';
// // // // // import { useState, useEffect } from 'react';
// // // // // import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// // // // // const navItems = [
// // // // //   { name: 'Services', href: '/services' },
// // // // //   { name: 'About Us', href: '/about' },
// // // // //   { name: 'Career', href: '/career' },
// // // // //   { name: 'Contact Us', href: '/contact' },
// // // // // ];

// // // // // const Header = () => {
// // // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// // // // //   const [headerScrolled, setHeaderScrolled] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setHeaderScrolled(window.scrollY > 50);
// // // // //     };
// // // // //     window.addEventListener('scroll', handleScroll);
// // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // //   }, []);

// // // // //   // When at top: fully transparent. Text shadow helps readability.
// // // // //   // When scrolled: solid ax-card background with shadow.
// // // // //   const headerTopClass = 'bg-transparent';
// // // // //   const headerScrolledClass = 'bg-ax-card shadow-xl';

// // // // //   return (
// // // // //     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
// // // // //                        ${headerScrolled ? headerScrolledClass : headerTopClass}`}>
// // // // //       <nav className="container-custom flex items-center justify-between h-20 lg:h-24">
// // // // //         {/* Logo */}
// // // // //         <div className="flex-shrink-0">
// // // // //           <Link href="/"
// // // // //             className={`text-3xl font-bold text-white hover:text-ax-primary transition-colors ${!headerScrolled ? 'drop-shadow-md' : ''}`}>
// // // // //             Just Placed
// // // // //           </Link>
// // // // //         </div>

// // // // //         {/* Desktop Navigation */}
// // // // //         <div className="hidden lg:flex lg:items-center lg:space-x-8">
// // // // //           {navItems.map((item) => (
// // // // //             <Link
// // // // //               key={item.name}
// // // // //               href={item.href}
// // // // //               className={`text-ax-lightest-slate hover:text-ax-primary transition-colors duration-200 font-medium text-lg ${!headerScrolled ? 'drop-shadow-sm' : ''}`}
// // // // //             >
// // // // //               {item.name}
// // // // //             </Link>
// // // // //           ))}
// // // // //           <Link href="/contact"
// // // // //             className="button-primary text-sm py-2.5 px-6"
// // // // //           >
// // // // //             Get in Touch
// // // // //           </Link>
// // // // //         </div>

// // // // //         {/* Mobile Menu Button */}
// // // // //         <div className="lg:hidden">
// // // // //           <button
// // // // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // // // //             className={`text-ax-lightest-slate focus:outline-none hover:text-ax-primary ${!headerScrolled ? 'drop-shadow-sm' : ''}`}
// // // // //           >
// // // // //             <span className="sr-only">Open main menu</span>
// // // // //             {mobileMenuOpen ? (
// // // // //               <XMarkIcon className="h-7 w-7" aria-hidden="true" />
// // // // //             ) : (
// // // // //               <Bars3Icon className="h-7 w-7" aria-hidden="true" />
// // // // //             )}
// // // // //           </button>
// // // // //         </div>
// // // // //       </nav>

// // // // //       {/* Mobile Menu - Ensure it has a readable background */}
// // // // //       {mobileMenuOpen && (
// // // // //         <div className={`lg:hidden absolute top-full left-0 right-0 shadow-xl ${headerScrolled ? headerScrolledClass : 'bg-ax-card'}`}>
// // // // //           <div className="px-4 pt-4 pb-5 space-y-2 sm:px-5">
// // // // //             {navItems.map((item) => (
// // // // //               <Link
// // // // //                 key={item.name}
// // // // //                 href={item.href}
// // // // //                 onClick={() => setMobileMenuOpen(false)}
// // // // //                 className="block px-3 py-3 rounded-md text-base font-medium text-ax-lightest-slate hover:bg-ax-border hover:text-ax-primary"
// // // // //               >
// // // // //                 {item.name}
// // // // //               </Link>
// // // // //             ))}
// // // // //             <Link
// // // // //               href="/contact"
// // // // //               onClick={() => setMobileMenuOpen(false)}
// // // // //               className="block w-full text-center mt-3 px-3 py-3 rounded-md text-base font-medium bg-ax-primary text-ax-background hover:bg-ax-primary-dark"
// // // // //             >
// // // // //               Get in Touch
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </header>
// // // // //   );
// // // // // };

// // // // // export default Header;

// // // // // components/Header.tsx
// // // // "use client";

// // // // import Link from 'next/link';
// // // // import Image from 'next/image'; // Import the Next.js Image component
// // // // import { useState, useEffect } from 'react';
// // // // import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// // // // const navItems = [
// // // //   { name: 'Services', href: '/services' },
// // // //   { name: 'About Us', href: '/about' },
// // // //   { name: 'Career', href: '/career' },
// // // //   { name: 'Contact Us', href: '/contact' },
// // // // ];

// // // // const Header = () => {
// // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// // // //   const [headerScrolled, setHeaderScrolled] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setHeaderScrolled(window.scrollY > 50);
// // // //     };
// // // //     window.addEventListener('scroll', handleScroll);
// // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // //   }, []);

// // // //   const headerTopClass = 'bg-transparent';
// // // //   const headerScrolledClass = 'bg-ax-card shadow-xl';

// // // //   return (
// // // //     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
// // // //                        ${headerScrolled ? headerScrolledClass : headerTopClass}`}>
// // // //       <nav className="container-custom flex items-center justify-between h-20 lg:h-24">
// // // //         {/* Logo */}
// // // //         <div className="flex-shrink-0">
// // // //           <Link href="/" className={`hover:opacity-80 transition-opacity ${!headerScrolled ? 'drop-shadow-md' : ''}`}>
// // // //             {/* Replace text logo with Image component */}
// // // //             <Image
// // // //               src="/images/logo-circular.png" 
// // // //               alt="Just Placed Solutions Logo"
// // // //               width={80} // Adjust width as needed, e.g., 50px
// // // //               height={80} // Adjust height as needed, e.g., 50px
// // // //               className="h-10 w-10 lg:h-12 lg:w-12" 
// // // //             />
// // // //           </Link>
// // // //         </div>

// // // //         {/* Desktop Navigation */}
// // // //         <div className="hidden lg:flex lg:items-center lg:space-x-8">
// // // //           {navItems.map((item) => (
// // // //             <Link
// // // //               key={item.name}
// // // //               href={item.href}
// // // //               className={`text-ax-lightest-slate hover:text-ax-primary transition-colors duration-200 font-medium text-lg ${!headerScrolled ? 'drop-shadow-sm' : ''}`}
// // // //             >
// // // //               {item.name}
// // // //             </Link>
// // // //           ))}
// // // //           <Link href="/contact"
// // // //             className="button-primary text-sm py-2.5 px-6"
// // // //           >
// // // //             Get in Touch
// // // //           </Link>
// // // //         </div>

// // // //         {/* Mobile Menu Button */}
// // // //         <div className="lg:hidden">
// // // //           <button
// // // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // // //             className={`text-ax-lightest-slate focus:outline-none hover:text-ax-primary ${!headerScrolled ? 'drop-shadow-sm' : ''}`}
// // // //           >
// // // //             <span className="sr-only">Open main menu</span>
// // // //             {mobileMenuOpen ? (
// // // //               <XMarkIcon className="h-7 w-7" aria-hidden="true" />
// // // //             ) : (
// // // //               <Bars3Icon className="h-7 w-7" aria-hidden="true" />
// // // //             )}
// // // //           </button>
// // // //         </div>
// // // //       </nav>

// // // //       {/* Mobile Menu - Ensure it has a readable background */}
// // // //       {mobileMenuOpen && (
// // // //         <div className={`lg:hidden absolute top-full left-0 right-0 shadow-xl ${headerScrolled ? headerScrolledClass : 'bg-ax-card'}`}>
// // // //           <div className="px-4 pt-4 pb-5 space-y-2 sm:px-5">
// // // //             {navItems.map((item) => (
// // // //               <Link
// // // //                 key={item.name}
// // // //                 href={item.href}
// // // //                 onClick={() => setMobileMenuOpen(false)}
// // // //                 className="block px-3 py-3 rounded-md text-base font-medium text-ax-lightest-slate hover:bg-ax-border hover:text-ax-primary"
// // // //               >
// // // //                 {item.name}
// // // //               </Link>
// // // //             ))}
// // // //             <Link
// // // //               href="/contact"
// // // //               onClick={() => setMobileMenuOpen(false)}
// // // //               className="block w-full text-center mt-3 px-3 py-3 rounded-md text-base font-medium bg-ax-primary text-ax-background hover:bg-ax-primary-dark"
// // // //             >
// // // //               Get in Touch
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Header;

// // // // components/Header.tsx
// // // "use client";

// // // import Link from 'next/link';
// // // import Image from 'next/image'; 
// // // import { useState, useEffect } from 'react';
// // // import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// // // const navItems = [
// // //   { name: 'Services', href: '/services' },
// // //   { name: 'About Us', href: '/about' },
// // //   { name: 'Career', href: '/career' },
// // //   { name: 'Contact Us', href: '/contact' },
// // // ];

// // // const Header = () => {
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// // //   const [headerScrolled, setHeaderScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setHeaderScrolled(window.scrollY > 50);
// // //     };
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   // When at top: Hero video needs light text, so header text needs to be visible
// // //   // When scrolled: light solid background with dark text
// // //   const headerTopClass = 'bg-transparent'; // Text color handled below
// // //   const headerScrolledClass = 'bg-gray-100 shadow-xl'; // Light background when scrolled

// // //   const textClassDefault = `text-gray-700 hover:text-blue-600`; // Dark text for scrolled header
// // //   const textClassHero = `text-white hover:text-gray-200`; // Light text for transparent header on hero

// // //   return (
// // //     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
// // //                        ${headerScrolled ? headerScrolledClass : headerTopClass}`}>
// // //       <nav className="container-custom flex items-center justify-between h-20 lg:h-24">
// // //         {/* Logo */}
// // //         <div className="flex-shrink-0">
// // //           <Link href="/" className={`hover:opacity-80 transition-opacity ${!headerScrolled ? 'drop-shadow-md' : ''}`}>
// // //             <Image
// // //               src="/images/logo-circular.png" 
// // //               alt="Just Placed Solutions Logo"
// // //               width={80} 
// // //               height={80} 
// // //               className="h-10 w-10 lg:h-12 lg:w-12" 
// // //             />
// // //           </Link>
// // //         </div>

// // //         {/* Desktop Navigation */}
// // //         <div className="hidden lg:flex lg:items-center lg:space-x-8">
// // //           {navItems.map((item) => (
// // //             <Link
// // //               key={item.name}
// // //               href={item.href}
// // //               className={`transition-colors duration-200 font-medium text-lg ${headerScrolled ? textClassDefault : textClassHero} ${!headerScrolled ? 'drop-shadow-sm' : ''}`}
// // //             >
// // //               {item.name}
// // //             </Link>
// // //           ))}
// // //           <Link href="/contact"
// // //             className={`button-primary text-sm py-2.5 px-6 ${headerScrolled ? '' : 'border border-white hover:bg-white hover:text-blue-600'}`} // Adjust button style for hero if needed
// // //           >
// // //             Get in Touch
// // //           </Link>
// // //         </div>

// // //         {/* Mobile Menu Button */}
// // //         <div className="lg:hidden">
// // //           <button
// // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // //             className={`focus:outline-none ${headerScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-gray-200'} ${!headerScrolled ? 'drop-shadow-sm' : ''}`}
// // //           >
// // //             <span className="sr-only">Open main menu</span>
// // //             {mobileMenuOpen ? (
// // //               <XMarkIcon className="h-7 w-7" aria-hidden="true" />
// // //             ) : (
// // //               <Bars3Icon className="h-7 w-7" aria-hidden="true" />
// // //             )}
// // //           </button>
// // //         </div>
// // //       </nav>

// // //       {/* Mobile Menu - Ensure it has a readable background */}
// // //       {mobileMenuOpen && (
// // //         <div className={`lg:hidden absolute top-full left-0 right-0 shadow-xl ${headerScrolled ? headerScrolledClass : 'bg-gray-800'}`}> {/* Darker bg for mobile menu when header is transparent */}
// // //           <div className="px-4 pt-4 pb-5 space-y-2 sm:px-5">
// // //             {navItems.map((item) => (
// // //               <Link
// // //                 key={item.name}
// // //                 href={item.href}
// // //                 onClick={() => setMobileMenuOpen(false)}
// // //                 className={`block px-3 py-3 rounded-md text-base font-medium ${headerScrolled ? 'text-gray-700 hover:bg-gray-200 hover:text-blue-600' : 'text-white hover:bg-gray-700 hover:text-gray-200'}`}
// // //               >
// // //                 {item.name}
// // //               </Link>
// // //             ))}
// // //             <Link
// // //               href="/contact"
// // //               onClick={() => setMobileMenuOpen(false)}
// // //               className="block w-full text-center mt-3 px-3 py-3 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
// // //             >
// // //               Get in Touch
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </header>
// // //   );
// // // };

// // // export default Header;

// // // components/Header.tsx
// // "use client";

// // import Link from 'next/link';
// // import Image from 'next/image'; 
// // import { useState, useEffect } from 'react';
// // import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// // const navItems = [
// //   { name: 'Services', href: '/services' },
// //   { name: 'About Us', href: '/about' },
// //   { name: 'Career', href: '/career' },
// //   { name: 'Contact Us', href: '/contact' },
// // ];

// // const Header = () => {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [headerScrolled, setHeaderScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setHeaderScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const headerTopClass = 'bg-transparent';
// //   const headerScrolledClass = 'bg-white shadow-lg'; // White background when scrolled

// //   // Text styling for links in the header
// //   const navLinkBaseStyle = "transition-colors duration-200 font-medium text-lg";
// //   const navLinkHeroStyle = "text-white hover:text-gray-200 drop-shadow-sm"; // White text with shadow for hero
// //   const navLinkScrolledStyle = "text-gray-800 hover:text-blue-600"; // Dark text for scrolled header

// //   return (
// //     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
// //                        ${headerScrolled ? headerScrolledClass : headerTopClass}`}>
// //       <nav className="container-custom flex items-center justify-between h-20 lg:h-24">
// //         <div className="flex-shrink-0">
// //           <Link href="/" className={`hover:opacity-80 transition-opacity ${!headerScrolled ? 'drop-shadow-md' : ''}`}>
// //             <Image
// //               src="/images/logo-circular.png" 
// //               alt="Just Placed Solutions Logo"
// //               width={80} 
// //               height={80} 
// //               className="h-10 w-10 lg:h-12 lg:w-12" 
// //             />
// //           </Link>
// //         </div>

// //         <div className="hidden lg:flex lg:items-center lg:space-x-8">
// //           {navItems.map((item) => (
// //             <Link
// //               key={item.name}
// //               href={item.href}
// //               className={`${navLinkBaseStyle} ${headerScrolled ? navLinkScrolledStyle : navLinkHeroStyle}`}
// //             >
// //               {item.name}
// //             </Link>
// //           ))}
// //           <Link href="/contact"
// //              className={`button-primary text-sm py-2 px-5 ${!headerScrolled ? 'bg-opacity-80 hover:bg-opacity-100 border border-white' : ''}`}
// //           >
// //             Get in Touch
// //           </Link>
// //         </div>

// //         <div className="lg:hidden">
// //           <button
// //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //             className={`focus:outline-none ${headerScrolled ? navLinkScrolledStyle : navLinkHeroStyle }`}
// //           >
// //             <span className="sr-only">Open main menu</span>
// //             {mobileMenuOpen ? (
// //               <XMarkIcon className="h-7 w-7" aria-hidden="true" />
// //             ) : (
// //               <Bars3Icon className="h-7 w-7" aria-hidden="true" />
// //             )}
// //           </button>
// //         </div>
// //       </nav>

// //       {/* Mobile Menu */}
// //       {mobileMenuOpen && (
// //         <div className={`lg:hidden absolute top-full left-0 right-0 shadow-xl ${headerScrolled ? 'bg-white' : 'bg-gray-900'}`}> {/* Darker bg for mobile when hero is transparent */}
// //           <div className="px-4 pt-4 pb-5 space-y-2 sm:px-5">
// //             {navItems.map((item) => (
// //               <Link
// //                 key={item.name}
// //                 href={item.href}
// //                 onClick={() => setMobileMenuOpen(false)}
// //                 className={`block px-3 py-3 rounded-md text-base font-medium ${headerScrolled ? 'text-gray-800 hover:bg-gray-100 hover:text-blue-600' : 'text-white hover:bg-gray-700'}`}
// //               >
// //                 {item.name}
// //               </Link>
// //             ))}
// //             <Link
// //               href="/contact"
// //               onClick={() => setMobileMenuOpen(false)}
// //               className="block w-full text-center mt-3 px-3 py-3 rounded-md text-base font-medium button-primary" // Use button-primary styling
// //             >
// //               Get in Touch
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;
// // components/Header.tsx
// "use client";

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation'; // Import usePathname
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const navItems = [
//   { name: 'Services', href: '/services' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Career', href: '/career' },
//   { name: 'Contact Us', href: '/contact' },
// ];

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [headerScrolled, setHeaderScrolled] = useState(false);
//   const pathname = usePathname(); // Get current pathname

//   const isHomePage = pathname === '/';

//   useEffect(() => {
//     const handleScroll = () => {
//       setHeaderScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Define base class for header background
//   const headerBaseBgClass = "transition-all duration-300 ease-in-out";
//   let headerCurrentBgClass = headerScrolled ? "bg-white shadow-lg" : "bg-transparent";
//   if (!isHomePage && !headerScrolled) {
//     // On non-homepages, if not scrolled, make header background effectively white/transparent
//     // but text will be dark. If your non-homepages have a non-white top bg, this might need adjustment.
//     // For now, assuming non-homepages start with a light/white background.
//     headerCurrentBgClass = "bg-transparent"; // Or bg-white if pages truly start white
//   }


//   // Define text styles based on scroll, and page type for the "top" state
//   const navLinkBaseStyle = "transition-colors duration-200 font-medium text-lg";
//   let navLinkCurrentStyle;
//   let mobileButtonCurrentStyle;
//   let getInTouchTopButtonStyle;


//   if (headerScrolled) {
//     navLinkCurrentStyle = "text-gray-800 hover:text-blue-600";
//     mobileButtonCurrentStyle = "text-gray-800 hover:text-blue-600";
//     getInTouchTopButtonStyle = ""; // Standard button primary style applies
//   } else {
//     if (isHomePage) {
//       // Top of Home page (Hero section)
//       navLinkCurrentStyle = "text-white hover:text-gray-200 drop-shadow-sm";
//       mobileButtonCurrentStyle = "text-white hover:text-gray-200 drop-shadow-sm";
//       getInTouchTopButtonStyle = "bg-opacity-80 hover:bg-opacity-100 border border-white text-white hover:bg-white hover:text-blue-600";
//     } else {
//       // Top of other pages (light background)
//       navLinkCurrentStyle = "text-gray-700 hover:text-blue-600"; // Dark text for visibility on light bg
//       mobileButtonCurrentStyle = "text-gray-700 hover:text-blue-600";
//       getInTouchTopButtonStyle = ""; // Standard button primary style applies
//     }
//   }


//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 ${headerBaseBgClass} ${headerCurrentBgClass}`}>
//       <nav className="container-custom flex items-center justify-between h-20 lg:h-24">
//         <div className="flex-shrink-0">
//           <Link href="/" className={`hover:opacity-80 transition-opacity ${(!headerScrolled && isHomePage) ? 'drop-shadow-md' : ''}`}>
//             <Image
//               src="/images/logo-circular.png"
//               alt="Just Placed Solutions Logo"
//               width={80}
//               height={80}
//               className="h-10 w-10 lg:h-12 lg:w-12"
//             />
//           </Link>
//         </div>

//         <div className="hidden lg:flex lg:items-center lg:space-x-8">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={`${navLinkBaseStyle} ${navLinkCurrentStyle}`}
//             >
//               {item.name}
//             </Link>
//           ))}
//           <Link href="/contact"
//              className={`button-primary text-sm py-2 px-5 ${getInTouchTopButtonStyle}`}
//           >
//             Get in Touch
//           </Link>
//         </div>

//         <div className="lg:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className={`focus:outline-none ${mobileButtonCurrentStyle}`}
//           >
//             <span className="sr-only">Open main menu</span>
//             {mobileMenuOpen ? (
//               <XMarkIcon className="h-7 w-7" aria-hidden="true" />
//             ) : (
//               <Bars3Icon className="h-7 w-7" aria-hidden="true" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className={`lg:hidden absolute top-full left-0 right-0 shadow-xl 
//                          ${headerScrolled ? 'bg-white' : (isHomePage ? 'bg-gray-900' : 'bg-white')}`}>
//           <div className="px-4 pt-4 pb-5 space-y-2 sm:px-5">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className={`block px-3 py-3 rounded-md text-base font-medium 
//                             ${headerScrolled ? 'text-gray-800 hover:bg-gray-100 hover:text-blue-600' : (isHomePage ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600')}`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Link
//               href="/contact"
//               onClick={() => setMobileMenuOpen(false)}
//               className="block w-full text-center mt-3 px-3 py-3 rounded-md text-base font-medium button-primary"
//             >
//               Get in Touch
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// src/components/Header.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Career', href: '/career' },
  { name: 'Contact Us', href: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/'; // Still useful for minor distinctions if needed

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBaseBgClass = "transition-all duration-300 ease-in-out";
  const navLinkBaseStyle = "transition-colors duration-200 font-medium text-lg";

  let headerCurrentBgClass: string;
  let navLinkCurrentStyle: string;
  let mobileButtonCurrentStyle: string;
  let getInTouchTopButtonStyle: string;
  let logoDropShadowClass = '';
  let mobileMenuBgClass: string;

  if (headerScrolled) {
    headerCurrentBgClass = "bg-white shadow-lg";
    navLinkCurrentStyle = "text-gray-800 hover:text-blue-600";
    mobileButtonCurrentStyle = "text-gray-800 hover:text-blue-600";
    getInTouchTopButtonStyle = ""; // Standard button primary style
    mobileMenuBgClass = "bg-white";
    logoDropShadowClass = ""; // No shadow when header has solid background
  } else {
    // Styles for header at the TOP of the page (over a HeroSection)
    headerCurrentBgClass = "bg-transparent";
    navLinkCurrentStyle = "text-white hover:text-gray-200 drop-shadow-sm";
    mobileButtonCurrentStyle = "text-white hover:text-gray-200 drop-shadow-sm";
    getInTouchTopButtonStyle = "bg-opacity-80 hover:bg-opacity-100 border border-white text-white hover:bg-white hover:text-blue-600";
    logoDropShadowClass = 'drop-shadow-md'; // Apply drop shadow when header is transparent
    mobileMenuBgClass = "bg-gray-900"; // Dark background for mobile menu when over hero
  }

  // Override logo drop shadow specifically for non-home pages at top if desired
  // For now, consistent drop shadow when transparent.
  // if (!isHomePage && !headerScrolled) {
  //   logoDropShadowClass = ''; // Example: if you wanted non-home transparent headers to have no logo shadow
  // }


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${headerBaseBgClass} ${headerCurrentBgClass}`}>
      <nav className="container-custom flex items-center justify-between h-20 lg:h-24">
        <div className="flex-shrink-0">
          <Link href="/" className={`hover:opacity-80 transition-opacity ${logoDropShadowClass}`}>
            <Image
              src="/images/logo-circular.png"
              alt="Just Placed Solutions Logo"
              width={80}
              height={80}
              className="h-10 w-10 lg:h-12 lg:w-12"
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${navLinkBaseStyle} ${navLinkCurrentStyle}`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact"
             className={`button-primary text-sm py-2 px-5 ${getInTouchTopButtonStyle}`}
          >
            Get in Touch
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`focus:outline-none ${mobileButtonCurrentStyle}`}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-7 w-7" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 shadow-xl ${mobileMenuBgClass}`}>
          <div className="px-4 pt-4 pb-5 space-y-2 sm:px-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium 
                            ${headerScrolled ? 'text-gray-800 hover:bg-gray-100 hover:text-blue-600' : 'text-white hover:bg-gray-700'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center mt-3 px-3 py-3 rounded-md text-base font-medium button-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;