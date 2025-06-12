// import { Card } from '@/components/ui/card';
// import { Leaf, Heart, Award } from 'lucide-react';

// // Main About section component
// const About = () => {
//   return (
//     <section className="py-32 bg-gradient-to-br from-background via-kyara-cream/30 to-background relative overflow-hidden">
//       {/* === Decorative background blurred circles === */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10" id='about'>
//         <div className="text-center mb-20">
//           <div className="inline-block mb-6">
//             <span className="text-sm font-semibold text-primary uppercase tracking-widest px-4 py-2 bg-primary/10 rounded-full">
//               Our Mission
//             </span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
//             <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
//               Crafting Excellence
//             </span>
//           </h2>
//           <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-12 rounded-full"></div>
//         </div>

//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16 space-y-8">
//             <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light max-w-4xl mx-auto">
//               At Kyara Beverages, we believe that every sip should be an
//               <span className="font-semibold text-foreground"> extraordinary experience</span>.
//               We craft premium refreshments using the finest natural ingredients, innovative brewing techniques,
//               and a passion for perfection that has been our hallmark since day one.
//             </p>
//             <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light max-w-4xl mx-auto">
//               Our commitment to sustainability and community drives us to create beverages that not only
//               taste exceptional but also contribute to a
//               <span className="font-semibold text-foreground"> better world</span> for future generations.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             <Card className="group p-10 text-center bg-gradient-to-br from-background to-kyara-cream/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
//                   <Leaf className="w-10 h-10 text-primary group-hover:rotate-12 transition-transform duration-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">Natural Ingredients</h3>
//                 <p className="text-muted-foreground leading-relaxed text-lg">
//                   Sourced from sustainable farms and crafted with care for pure, authentic flavors that honor nature's bounty.
//                 </p>
//               </div>
//             </Card>

//             <Card className="group p-10 text-center bg-gradient-to-br from-background to-kyara-cream/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
//                   <Heart className="w-10 h-10 text-secondary group-hover:rotate-12 transition-transform duration-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-6 group-hover:text-secondary transition-colors duration-300">Crafted with Love</h3>
//                 <p className="text-muted-foreground leading-relaxed text-lg">
//                   Every bottle represents our passion for creating memorable taste experiences that touch the heart.
//                 </p>
//               </div>
//             </Card>

//             <Card className="group p-10 text-center bg-gradient-to-br from-background to-kyara-cream/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10">
//                 <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
//                   <Award className="w-10 h-10 text-accent group-hover:rotate-12 transition-transform duration-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-6 group-hover:text-accent transition-colors duration-300">Award Winning</h3>
//                 <p className="text-muted-foreground leading-relaxed text-lg">
//                   Recognized globally for excellence in taste, innovation, and sustainable practices that set industry standards.
//                 </p>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { Card } from '@/components/ui/card';
import { Leaf, Heart, Award } from 'lucide-react';
import React from 'react';

// Props for the reusable FeatureCard component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
  rotation?: 'left' | 'right' | 'none';
}

// Background Decoration
// Light radial blurs in the background for aesthetic depth
const BackgroundDecoration = () => (
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl" />
  </div>
);

// Section Header
// Displays "Our Mission" label and heading
const SectionHeader = () => (
  <div className="text-center mb-20">

    {/* Section label */}
    <div className="inline-block mb-6">
      <span className="text-sm font-semibold text-primary uppercase tracking-widest px-4 py-2 bg-primary/10 rounded-full">
        Our Mission
      </span>
    </div>

    {/* Main heading */}
    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
      <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
        Crafting Excellence
      </span>
    </h2>

    {/* Decorative line below heading */}
    <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-12 rounded-full" />
  </div>
);

// Mission Statement Component
// Paragraphs describing the brand values and sustainability commitment
const MissionStatement = () => (
  <div className="text-center mb-16 space-y-8">
    <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light max-w-4xl mx-auto">
      At Kyara Beverages, we believe that every sip should be an
      <span className="font-semibold text-foreground"> extraordinary experience</span>.
      We craft premium refreshments using the finest natural ingredients, innovative brewing techniques,
      and a passion for perfection that has been our hallmark since day one.
    </p>
    <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light max-w-4xl mx-auto">
      Our commitment to sustainability and community drives us to create beverages that not only
      taste exceptional but also contribute to a
      <span className="font-semibold text-foreground"> better world</span> for future generations.
    </p>
  </div>
);

// Feature Card Component
// Reusable card for highlighting brand features
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color, rotation = 'none' }) => {
  const rotationClass = {
    left: 'hover:-rotate-1',
    right: 'hover:rotate-1',
    none: ''
  }[rotation];

  return (
    <Card className={`group p-10 text-center bg-gradient-to-br from-background to-kyara-cream/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${rotationClass} relative overflow-hidden`}>

      {/* Card background glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">

        {/* Icon container with hover animation */}
        <div className={`w-20 h-20 bg-gradient-to-br from-${color}/20 to-${color}/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
          {React.cloneElement(icon as React.ReactElement, {
            className: `w-10 h-10 text-${color} group-hover:rotate-12 transition-transform duration-500`
          })}
        </div>

        {/* Title and description */}
        <h3 className={`text-2xl font-bold mb-6 group-hover:text-${color} transition-colors duration-300`}>
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </Card>
  );
};

// Features Grid Component
const FeaturesGrid = () => {
  const features = [
    {
      icon: <Leaf />,
      title: "Natural Ingredients",
      description: "Sourced from sustainable farms and crafted with care for pure, authentic flavors that honor nature's bounty.",
      color: "primary" as const,
      rotation: "left" as const
    },
    {
      icon: <Heart />,
      title: "Crafted with Love",
      description: "Every bottle represents our passion for creating memorable taste experiences that touch the heart.",
      color: "secondary" as const,
      rotation: "none" as const
    },
    {
      icon: <Award />,
      title: "Award Winning",
      description: "Recognized globally for excellence in taste, innovation, and sustainable practices that set industry standards.",
      color: "accent" as const,
      rotation: "right" as const
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-10">
      {/* Render each feature as a card */}
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

// Main About Component
// Combines all components to create the full About section with animation, branding, and responsive layout
const About = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-kyara-cream/30 to-background relative overflow-hidden">
      {/* Decorative glowing blobs */}
      <BackgroundDecoration />

      <div className="container mx-auto px-4 relative z-10" id='about'>
        {/* Decorative glowing blobs */}
        <SectionHeader />

        {/* Body content: Mission + Features */}
        <div className="max-w-5xl mx-auto">
          <MissionStatement />
          <FeaturesGrid />
        </div>
      </div>
    </section>
  );
};

export default About;
