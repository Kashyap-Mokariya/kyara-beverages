import { Sparkles, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

// Types
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface FooterSectionProps {
  title: string;
  links: string[];
  gradientDirection?: 'normal' | 'reverse';
}

// Background Gradient Blur Decoration
// Used to give the footer a soft visual appeal with blurred color blobs
const BackgroundDecoration = () => (
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
  </div>
);

// Brand Section
// Contains logo, brand name, tagline, and social icons
const BrandSection = () => {
  const socialIcons = [Instagram, Twitter, Facebook, Linkedin];

  return (
    <div className="md:col-span-2">

      {/* Logo with animation on hover */}
      <div className="flex items-center space-x-4 mb-8 group">

        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/20">
          <Sparkles className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />
        </div>

        <h3 className="text-3xl font-bold font-playfair group-hover:text-white/90 transition-colors duration-300">
          Kyara Beverages
        </h3>

      </div>

      {/* Tagline */}
      <p className="text-white/80 mb-8 leading-relaxed max-w-md text-lg font-light">
        Crafting premium beverages that redefine refreshment.
        Every sip tells a story of passion, quality, and innovation that transcends ordinary taste experiences.
      </p>

      {/* Social media links */}
      <div className="flex space-x-4">
        {socialIcons.map((Icon, index) => (
          <SocialLink key={index} Icon={Icon} />
        ))}
      </div>
    </div>
  );
};

// Social Link Icon Button
// Animated and styled link button for each social icon
const SocialLink = ({ Icon }: { Icon: React.ElementType }) => (
  <a
    href="#"
    className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-rotate-6 shadow-lg border border-white/20"
  >
    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
  </a>
);

// Footer Link Item
// A single navigational link in the footer section
const FooterLink: React.FC<FooterLinkProps> = ({ href = "#", children }) => (
  <li>
    <a
      href={href}
      className="text-white/80 hover:text-white transition-all duration-200 text-lg font-light hover:translate-x-2 transform inline-block hover:font-normal"
    >
      {children}
    </a>
  </li>
);

// Footer Link Section
// Displays a list of footer links under a given title with an underline gradient
const FooterSection: React.FC<FooterSectionProps> = ({ title, links, gradientDirection = 'normal' }) => {
  const gradientClass = gradientDirection === 'normal'
    ? 'from-primary to-secondary'
    : 'from-secondary to-primary';

  return (
    <div>

      {/* Section title with gradient underline */}
      <h4 className="text-xl font-bold mb-8 text-white relative">
        {title}
        <div className={`absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r ${gradientClass}`} />
      </h4>

      {/* List of links */}
      <ul className="space-y-4">
        {links.map((link, index) => (
          <FooterLink key={index} href="#">{link}</FooterLink>
        ))}
      </ul>

    </div>
  );
};

// Bottom Bar
// Contains copyright and additional legal/policy links
const BottomBar = () => {
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

  return (
    <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center">

      <p className="text-white/60 text-lg mb-6 md:mb-0 font-light">
        © {new Date().getFullYear()} Kyara Beverages. All rights reserved.
      </p>

      <div className="flex space-x-8 text-lg">

        {legalLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-white/60 hover:text-white transition-all duration-100 font-light hover:font-normal"
          >
            {link}
          </a>
        ))}

      </div>
    </div>
  );
};

// Main Footer Component
// Renders the full footer section including branding, quick/support links, background, and bottom bar
const Footer = () => {
  const quickLinks = ['Products', 'About Us', 'Sustainability', 'News', 'Careers'];
  const supportLinks = ['Contact Us', 'FAQ', 'Store Locator', 'Customer Service', 'Returns'];

  return (
    <footer className="bg-gradient-to-br from-kyara-navy via-kyara-navy to-kyara-navy/90 text-white py-20 relative overflow-hidden">

      {/* Soft gradient background visuals */}
      <BackgroundDecoration />

      <div className="container mx-auto px-4 relative z-10">

        {/* Main footer grid layout with branding and two sections */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          <BrandSection />

          <FooterSection title="Quick Links" links={quickLinks} />

          <FooterSection
            title="Support"
            links={supportLinks}
            gradientDirection="reverse"
          />
        </div>

        {/* Copyright and legal links */}
        <BottomBar />
      </div>

    </footer>
  );
};

export default Footer;
