// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { ArrowRight } from 'lucide-react';

// const Products = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Tropical Fusion",
//       description: "A vibrant blend of exotic fruits with a refreshing twist that transports you to paradise with every sip.",
//       image: "https://imgs.search.brave.com/1FagwwizOnU3j75TFtmyWzbrqS84MIAwl8lqu0DRpjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZXli/YWlydGVuZGVyLnMz/LmFtYXpvbmF3cy5j/b20vcmVjaXBlcy90/cm9waWNhbC1mdXNp/b24xNTQ1LnBuZw",
//       badge: "Bestseller",
//       badgeColor: "bg-gradient-to-r from-kyara-orange to-kyara-orange-light text-white",
//     },
//     {
//       id: 2,
//       name: "Zen Garden",
//       description: "Calming botanicals and premium green tea create a serene drinking experience for mindful moments of tranquility.",
//       image: "https://heybairtender.s3.amazonaws.com/recipes/emerald-zen-garden8379.png",
//       badge: "New",
//       badgeColor: "bg-gradient-to-r from-kyara-sage to-kyara-teal text-white",
//     },
//     {
//       id: 3,
//       name: "Citrus Burst",
//       description: "Energizing citrus medley with natural sparkling water for the perfect afternoon pick-me-up that awakens your senses.",
//       image: "https://images.stockcake.com/public/d/6/8/d68e6c1d-389c-42a6-84a7-7ae376a3e0f9_large/refreshing-citrus-sparkle-stockcake.jpg",
//       badge: "Limited Edition",
//       badgeColor: "bg-gradient-to-r from-kyara-teal to-kyara-teal-light text-white",
//     }
//   ];

//   return (
//     <section className="py-32 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10" id='products'>
//         <div className="text-center mb-20">
//           <div className="inline-block mb-6">
//             <span className="text-sm font-semibold text-secondary uppercase tracking-widest px-4 py-2 bg-secondary/10 rounded-full">
//               Premium Collection
//             </span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
//             Our Signature
//             <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
//               Collection
//             </span>
//           </h2>
//           <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-12 rounded-full"></div>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
//             Discover our carefully curated selection of premium beverages,
//             each crafted to deliver an unforgettable taste experience that defines luxury refreshment.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
//           {products.map((product, index) => (
//             <Card
//               key={product.id}
//               className="group overflow-hidden border-0 bg-gradient-to-br from-background to-kyara-cream/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 relative"
//             >
//               <div className="absolute top-6 left-6 z-30">
//                 <Badge
//                   className={`${product.badgeColor} font-semibold px-4 py-2 text-sm shadow-lg border-0 group-hover:scale-110 transition-all duration-500`}
//                 >
//                   {product.badge}
//                 </Badge>
//               </div>

//               {/* Optimized image and floating animations */}
//               <div className="relative h-80 overflow-hidden will-change-transform">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-all duration-500">
//                   <img src={product.image} alt="Product" className="w-full h-full object-cover object-center" />
//                 </div>

//                 <div
//                   className="absolute top-1/3 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:scale-125 group-hover:bg-white/10 transition-all duration-700 delay-100 transform-gpu"
//                   style={{ willChange: 'transform, opacity' }}
//                 ></div>
//                 <div
//                   className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 delay-200 transform-gpu"
//                   style={{ willChange: 'transform, opacity' }}
//                 ></div>
//                 <div
//                   className="absolute top-1/2 left-1/2 w-40 h-40 bg-secondary/5 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:-rotate-6 transition-all duration-700 delay-300 transform-gpu"
//                   style={{ willChange: 'transform, opacity' }}
//                 ></div>

//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-linear will-change-transform"></div>
//               </div>

//               <CardContent className="p-8 relative z-20">
//                 <div className="space-y-6">
//                   <h3 className="text-3xl font-bold group-hover:text-primary transition-all duration-500 leading-tight group-hover:scale-105 transform origin-left">
//                     {product.name}
//                   </h3>
//                   <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-all duration-500 transform group-hover:translate-x-2">
//                     {product.description}
//                   </p>
//                   <div className="pt-6">
//                     <button className="group/btn flex items-center space-x-3 text-primary font-semibold hover:text-primary-foreground hover:bg-primary px-6 py-3 rounded-full transition-all duration-500 border-2 border-primary hover:border-primary hover:shadow-lg transform hover:scale-105 group-hover:translate-y-1">
//                       <span className="group-hover/btn:tracking-wide transition-all duration-300">Learn More</span>
//                       <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all duration-300" />
//                     </button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <button className="group bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 px-12 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-white/20">
//             <span className="flex items-center space-x-3">
//               <span className="group-hover:tracking-wide transition-all duration-300">View Full Collection</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

// Type Definitions
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  badge: string;
  badgeColor: string;
}

interface ProductCardProps {
  product: Product;
}

// Background Decoration Component
// Adds blurred decorative circles in the background for visual depth
const BackgroundDecoration = () => (
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl" />
    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
  </div>
);

// Section Header Component
// Displays the title, subtitle, and section intro text
const SectionHeader = () => (
  <div className="text-center mb-20">
    <div className="inline-block mb-6">
      <span className="text-sm font-semibold text-secondary uppercase tracking-widest px-4 py-2 bg-secondary/10 rounded-full">
        Premium Collection
      </span>
    </div>
    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
      Our Signature
      <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
        Collection
      </span>
    </h2>
    <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-12 rounded-full" />
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
      Discover our carefully curated selection of premium beverages,
      each crafted to deliver an unforgettable taste experience that defines luxury refreshment.
    </p>
  </div>
);

// Product Image Component
// Renders the product image with multiple decorative effects and hover animations
const ProductImage = ({ image }: { image: string }) => (
  <div className="relative h-80 overflow-hidden will-change-transform">
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-all duration-500">
      <img src={image} alt="Product" className="w-full h-full object-cover object-center" />
    </div>

    {/* Decorative Elements */}
    {[
      "top-1/3 left-1/3 w-24 h-24 bg-white/5 delay-100",
      "bottom-1/3 right-1/3 w-32 h-32 bg-primary/10 delay-200",
      "top-1/2 left-1/2 w-40 h-40 bg-secondary/5 delay-300"
    ].map((classes, index) => (
      <div
        key={index}
        className={`absolute ${classes} rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 transform-gpu`}
        style={{ willChange: 'transform, opacity' }}
      />
    ))}

    {/* Sweeping gradient animation overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-linear will-change-transform" />
  </div>
);

// CTA Button Component
// A call-to-action "Learn More" button with hover animations and styling
const LearnMoreButton = () => (
  <button className="group/btn flex items-center space-x-3 text-primary font-semibold hover:text-primary-foreground hover:bg-primary px-6 py-3 rounded-full transition-all duration-500 border-2 border-primary hover:border-primary hover:shadow-lg transform hover:scale-105 group-hover:translate-y-1">
    <span className="group-hover/btn:tracking-wide transition-all duration-300">Learn More</span>
    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all duration-300" />
  </button>
);

// Product Card Component
// Main card layout for individual product with hover effects and badge
const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Card className="group overflow-hidden border-0 bg-gradient-to-br from-background to-kyara-cream/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 relative">

    {/* Product badge (e.g., "New", "Bestseller") */}
    <div className="absolute top-6 left-6 z-30">
      <Badge className={`${product.badgeColor} font-semibold px-4 py-2 text-sm shadow-lg border-0 group-hover:scale-110 transition-all duration-500`}>
        {product.badge}
      </Badge>
    </div>

    {/* Product image with interactive layers */}
    <ProductImage image={product.image} />

    {/* Product name, description, and button */}
    <CardContent className="p-8 relative z-20">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold group-hover:text-primary transition-all duration-500 leading-tight group-hover:scale-105 transform origin-left">
          {product.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-all duration-500 transform group-hover:translate-x-2">
          {product.description}
        </p>
        <div className="pt-6">
          <LearnMoreButton />
        </div>
      </div>
    </CardContent>
  </Card>
);

// View Collection CTA
// Button displayed at the bottom of the section to prompt full product exploration
const ViewCollectionButton = () => (
  <div className="text-center mt-16">
    <button className="group bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 px-12 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-white/20">
      <span className="flex items-center space-x-3">
        <span className="group-hover:tracking-wide transition-all duration-300">View Full Collection</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
      </span>
    </button>
  </div>
);

// Sample Product Data
const productData: Product[] = [
  {
    id: 1,
    name: "Tropical Fusion",
    description: "A vibrant blend of exotic fruits with a refreshing twist that transports you to paradise with every sip.",
    image: "https://imgs.search.brave.com/1FagwwizOnU3j75TFtmyWzbrqS84MIAwl8lqu0DRpjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZXli/YWlydGVuZGVyLnMz/LmFtYXpvbmF3cy5j/b20vcmVjaXBlcy90/cm9waWNhbC1mdXNp/b24xNTQ1LnBuZw",
    badge: "Bestseller",
    badgeColor: "bg-gradient-to-r from-kyara-orange to-kyara-orange-light text-white",
  },
  {
    id: 2,
    name: "Zen Garden",
    description: "Calming botanicals and premium green tea create a serene drinking experience for mindful moments of tranquility.",
    image: "https://heybairtender.s3.amazonaws.com/recipes/emerald-zen-garden8379.png",
    badge: "New",
    badgeColor: "bg-gradient-to-r from-kyara-sage to-kyara-teal text-white",
  },
  {
    id: 3,
    name: "Citrus Burst",
    description: "Energizing citrus medley with natural sparkling water for the perfect afternoon pick-me-up that awakens your senses.",
    image: "https://images.stockcake.com/public/d/6/8/d68e6c1d-389c-42a6-84a7-7ae376a3e0f9_large/refreshing-citrus-sparkle-stockcake.jpg",
    badge: "Limited Edition",
    badgeColor: "bg-gradient-to-r from-kyara-teal to-kyara-teal-light text-white",
  }
];

// Main Products Section Component
// Renders the entire products section including header, cards, and CTA
const Products = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative background circles */}
      <BackgroundDecoration />

      <div className="container mx-auto px-4 relative z-10" id='products'>
        {/* Header with title and description */}
        <SectionHeader />

        {/* Grid of individual product cards */}
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {productData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Button at the end */}
        <ViewCollectionButton />
      </div>
    </section>
  );
};

export default Products;
