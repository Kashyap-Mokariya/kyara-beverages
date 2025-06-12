// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { toast } from 'sonner';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast.success("Thank you for your message! We'll get back to you soon.");
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section className="py-16 bg-gradient-to-br from-background via-kyara-cream/20 to-background relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-20">
//           <div className="inline-block mb-6">
//             <span className="text-sm font-semibold text-accent uppercase tracking-widest px-4 py-2 bg-accent/10 rounded-full">
//               Contact Us
//             </span>
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
//             <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
//               Get In Touch
//             </span>
//           </h2>
//           <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full"></div>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
//             Have questions about our products or want to share your feedback? 
//             We'd love to hear from you and start a conversation about exceptional taste.
//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
//           {/* Contact Information */}
//           <div className="space-y-12">
//             <div>
//               <h3 className="text-3xl font-bold mb-8 text-foreground">Connect With Us</h3>
//               <p className="text-muted-foreground mb-12 leading-relaxed text-lg font-light">
//                 Whether you're interested in our products, have questions about ingredients, 
//                 or want to explore partnership opportunities, our dedicated team is here to help 
//                 you discover the perfect refreshment experience.
//               </p>
//             </div>

//             <div className="space-y-8">
//               <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-background to-kyara-cream/30 hover:shadow-lg transition-all duration-300">
//                 <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                   <Mail className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">Email Us</h4>
//                   <p className="text-muted-foreground text-lg">example@kyarabeverages.com</p>
//                 </div>
//               </div>

//               <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-background to-kyara-cream/30 hover:shadow-lg transition-all duration-300">
//                 <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                   <Phone className="w-8 h-8 text-secondary group-hover:rotate-12 transition-transform duration-300" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-xl mb-2 group-hover:text-secondary transition-colors duration-300">Call Us</h4>
//                   <p className="text-muted-foreground text-lg">+0 (000) 000000</p>
//                 </div>
//               </div>

//               <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-background to-kyara-cream/30 hover:shadow-lg transition-all duration-300">
//                 <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                   <MapPin className="w-8 h-8 text-accent group-hover:rotate-12 transition-transform duration-300" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">Visit Us</h4>
//                   <p className="text-muted-foreground text-lg">Carrer de la Pau 2,<br />08930 Sant Adrià de Besòs,<br />
//                   Barcelona, Spain</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Contact Form */}
//           <Card className="shadow-2xl border-0 bg-gradient-to-br from-background to-kyara-cream/20 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>
//             <CardHeader className="relative z-10 pb-8">
//               <CardTitle className="text-3xl font-bold text-center mb-4">Send us a message</CardTitle>
//               <p className="text-center text-muted-foreground">We'd love to hear from you</p>
//             </CardHeader>
//             <CardContent className="relative z-10 p-8">
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 <div className="space-y-3">
//                   <Label htmlFor="name" className="text-lg font-semibold">Full Name</Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Your full name"
//                     required
//                     className="h-12 text-lg transition-all duration-300 focus:ring-4 focus:ring-primary/20 border-2 focus:border-primary bg-background/50 backdrop-blur-sm"
//                   />
//                 </div>

//                 <div className="space-y-3">
//                   <Label htmlFor="email" className="text-lg font-semibold">Email Address</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="your.email@example.com"
//                     required
//                     className="h-12 text-lg transition-all duration-300 focus:ring-4 focus:ring-primary/20 border-2 focus:border-primary bg-background/50 backdrop-blur-sm"
//                   />
//                 </div>

//                 <div className="space-y-3">
//                   <Label htmlFor="message" className="text-lg font-semibold">Message</Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder="Tell us about your inquiry..."
//                     required
//                     rows={6}
//                     className="text-lg transition-all duration-300 focus:ring-4 focus:ring-primary/20 border-2 focus:border-primary resize-none bg-background/50 backdrop-blur-sm"
//                   />
//                 </div>

//                 <Button 
//                   type="submit" 
//                   className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-500 transform hover:scale-105 h-14 text-lg font-semibold shadow-xl hover:shadow-2xl group"
//                   size="lg"
//                 >
//                   <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
//                   <span className="group-hover:tracking-wide transition-all duration-300">Send Message</span>
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

// Props for the reusable ContactFormData component
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Props for the reusable ContactInfoCardProps component
interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  color: 'primary' | 'secondary' | 'accent';
}

// Background Decoration Component
// Adds blurry colored circular gradients for visual decoration
const BackgroundDecoration = () => (
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primary rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary rounded-full blur-3xl" />
  </div>
);

// Section Header Component
// Renders the main heading and description for the contact section
const SectionHeader = () => (
  <div className="text-center mb-20">
    <div className="inline-block mb-6">
      <span className="text-sm font-semibold text-accent uppercase tracking-widest px-4 py-2 bg-accent/10 rounded-full">
        Contact Us
      </span>
    </div>
    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
      <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        Get In Touch
      </span>
    </h2>
    <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12 rounded-full" />
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
      Have questions about our products or want to share your feedback?
      We'd love to hear from you and start a conversation about exceptional taste.
    </p>
  </div>
);

// Contact Info Card Component
// Reusable component to show contact options like Email, Phone, Location
const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, content, color }) => (
  <div className="group flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-background to-kyara-cream/30 hover:shadow-lg transition-all duration-300">
    <div className={`w-16 h-16 bg-gradient-to-br from-${color}/20 to-${color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
      {React.cloneElement(icon as React.ReactElement, {
        className: `w-8 h-8 text-${color} group-hover:rotate-12 transition-transform duration-300`
      })}
    </div>
    <div>
      <h4 className={`font-bold text-xl mb-2 group-hover:text-${color} transition-colors duration-300`}>{title}</h4>
      <div className="text-muted-foreground text-lg">{content}</div>
    </div>
  </div>
);

// Contact Information Section
// Lists all available contact methods
const ContactInformation = () => {
  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email Us",
      content: "example@kyarabeverages.com",
      color: "primary" as const
    },
    {
      icon: <Phone />,
      title: "Call Us",
      content: "+0 (000) 000000",
      color: "secondary" as const
    },
    {
      icon: <MapPin />,
      title: "Visit Us",
      content: (
        <>
          Carrer de la Pau 2,<br />
          08930 Sant Adrià de Besòs,<br />
          Barcelona, Spain
        </>
      ),
      color: "accent" as const
    }
  ];

  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-3xl font-bold mb-8 text-foreground">Connect With Us</h3>
        <p className="text-muted-foreground mb-12 leading-relaxed text-lg font-light">
          Whether you're interested in our products, have questions about ingredients,
          or want to explore partnership opportunities, our dedicated team is here to help
          you discover the perfect refreshment experience.
        </p>
      </div>
      <div className="space-y-8">
        {contactInfo.map((info, index) => (
          <ContactInfoCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

// Reusable Form Input Component
// Renders a single form field, either input or textarea
const FormField = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  isTextarea = false
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  isTextarea?: boolean;
}) => {
  const inputClassName = "text-lg transition-all duration-300 focus:ring-4 focus:ring-primary/20 border-2 focus:border-primary bg-background/50 backdrop-blur-sm";

  return (
    <div className="space-y-3">
      <Label htmlFor={id} className="text-lg font-semibold">{label}</Label>
      {isTextarea ? (
        <Textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          rows={6}
          className={`${inputClassName} resize-none`}
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className={`${inputClassName} h-12`}
        />
      )}
    </div>
  );
};

// Contact Form Component
// Handles form submission and input state
const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  // Updates local state on user input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Displays a success toast and resets the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Card className="shadow-2xl border-0 bg-gradient-to-br from-background to-kyara-cream/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
      <CardHeader className="relative z-10 pb-8">
        <CardTitle className="text-3xl font-bold text-center mb-4">Send us a message</CardTitle>
        <p className="text-center text-muted-foreground">We'd love to hear from you</p>
      </CardHeader>
      <CardContent className="relative z-10 p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormField
            label="Full Name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your full name"
          />
          <FormField
            label="Email Address"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
          />
          <FormField
            label="Message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your inquiry..."
            isTextarea
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-500 transform hover:scale-105 h-14 text-lg font-semibold shadow-xl hover:shadow-2xl group"
            size="lg"
          >
            <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
            <span className="group-hover:tracking-wide transition-all duration-300">Send Message</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// Main Contact Section Component
// Combines the contact info and the form with styling
const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-kyara-cream/20 to-background relative overflow-hidden">
      <BackgroundDecoration />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
