import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

// Decorative Background Pattern
const BackgroundPattern = () => (
  <div className="absolute inset-0 opacity-20">
    {[
      { position: "top-1/4 left-1/4", size: "w-40 h-40", delay: "0s" },
      { position: "bottom-1/4 right-1/4", size: "w-56 h-56", delay: "1s" },
      { position: "top-1/2 right-1/3", size: "w-32 h-32", delay: "2s" },
      { position: "bottom-1/3 left-1/3", size: "w-24 h-24", delay: "3s" },
    ].map((pattern, index) => (
      <div
        key={index}
        className={`absolute ${pattern.position} ${pattern.size} bg-white rounded-full blur-3xl animate-pulse`}
        style={{ animationDelay: pattern.delay }}
      />
    ))}
  </div>
);

// Floating Particle Animation
const FloatingParticles = () => (
  <div className="absolute inset-0">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
          boxShadow: '0 0 10px 3px rgba(255, 255, 255, 0.3)'
        }}
      />
    ))}
  </div>
);

// Brand Logo Component
const Logo = () => (
  <div className="mb-12 flex justify-center">
    <div className="flex items-center space-x-4 group">
      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl border border-white/30">
        <Sparkles className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-500" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold font-playfair tracking-tight group-hover:text-white/90 transition-colors duration-300">
        Kyara
      </h1>
    </div>
  </div>
);

// Scroll Button
const ScrollButton = ({ id, children, variant = "primary" }: { id: string; children: React.ReactNode; variant?: "primary" | "outline" }) => {

  // Smooth scroll handler
  const handleClick = () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Base button styling
  const baseStyles = "transition-all duration-500 transform hover:scale-110 hover:shadow-2xl px-10 py-4 rounded-full font-semibold text-lg group";

  // Variant-specific styling
  const variantStyles = variant === "primary"
    ? "bg-white text-primary hover:bg-white/95 border-2 border-transparent hover:border-white/20"
    : "border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10";

  return (
    <Button
      onClick={handleClick}
      size="lg"
      variant={variant === "outline" ? "outline" : "default"}
      className={`${baseStyles} ${variantStyles}`}
    >
      <span className="group-hover:tracking-wide transition-all duration-300">{children}</span>
    </Button>
  );
};

// Scroll Down Indicator
const ScrollIndicator = () => (
  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="flex flex-col items-center space-y-2">
      <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
      </div>
      <ArrowDown className="w-5 h-5 text-white/60" />
    </div>
  </div>
);

// Main Hero Section Component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background visuals */}
      <BackgroundPattern />
      <FloatingParticles />

      {/* Foreground content */}
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="animate-fade-in">
          {/* Branding */}
          <Logo />

          {/* Tagline */}
          <h2 className="text-3xl md:text-5xl font-light mb-8 opacity-95 tracking-wide leading-tight">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Refreshment, Reimagined
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto opacity-85 leading-relaxed font-light">
            Experience premium beverages crafted with passion, innovation, and an
            <span className="font-medium text-white"> unwavering commitment</span> to extraordinary taste.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <ScrollButton id="products">Discover Our Products</ScrollButton>
            <ScrollButton id="about" variant="outline">Our Story</ScrollButton>
          </div>
        </div>
      </div>

      {/* Scroll down hint */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
