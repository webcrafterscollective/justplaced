// src/components/Footer.tsx
import Link from 'next/link';

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link href={href} className="link-muted text-sm"> {/* Use global muted link style */}
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-300 pt-16 pb-10"> {/* Light gray bg, slightly darker border */}
      <div className="container-custom">
        {/* Changed to grid-cols-1 md:grid-cols-3 for a 3-column layout on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Just Placed</h3>
            <p className="text-sm text-gray-700 leading-relaxed"> {/* Darker text */}
              Dynamic manpower consultancy bridging talent with opportunity across all industries
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/career">Career</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* "Our Services" section has been removed */}

          <div>
            <h4 className="text-lg font-semibold text-black mb-5">Get In Touch</h4>
            <address className="not-italic text-sm space-y-3">
              <p className="text-gray-700">Chandannagar, Hooghly, Kolkata, Pin - 712138, India</p>
              <p>
                <Link href="mailto:support@justplaced.in" className="link-muted">
                  support@justplaced.in
                </Link>
              </p>
              <p>
                <Link href="tel:+918981453859" className="link-muted">
                  +91 89814 53859
                </Link>
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600"> {/* Muted text for copyright */}
          <p>&copy; {currentYear} Just Placed Solutions All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;