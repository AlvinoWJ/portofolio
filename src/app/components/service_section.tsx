// "use client";

// import React from "react";

// interface Service {
//   id: string;
//   title: string;
//   description: string;
//   icon: "web" | "mobile" | "database";
// }

// interface ServiceCardProps {
//   service: Service;
// }

// const ServiceIcon = ({ icon }: { icon: Service["icon"] }) => {
//   const iconClass = "w-12 h-12";

//   switch (icon) {
//     case "web":
//       return (
//         <svg
//           className={iconClass}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//           />
//         </svg>
//       );
//     case "mobile":
//       return (
//         <svg
//           className={iconClass}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
//           />
//         </svg>
//       );
//     case "database":
//       return (
//         <svg
//           className={iconClass}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
//           />
//         </svg>
//       );
//   }
// };

// function ServiceCard({ service }: ServiceCardProps) {
//   return (
//     <div className="bg-card border border-border rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
//       <div className="mb-6 text-amber-500">
//         <ServiceIcon icon={service.icon} />
//       </div>

//       <h3 className="text-2xl font-bold text-foreground mb-4">
//         {service.title}
//       </h3>

//       <p className="text-muted-foreground mb-6 leading-relaxed">
//         {service.description}
//       </p>

//       <button className="text-amber-500 font-semibold hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group">
//         CONTACT NOW
//         <svg
//           className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }

// export function ServicesSection() {
//   const services: Service[] = [
//     {
//       id: "1",
//       title: "Web Development",
//       description:
//         "I provide professional web development services to create robust, scalable, and user-friendly websites that cater to your business needs and enhance your online presence.",
//       icon: "web",
//     },
//     {
//       id: "2",
//       title: "Mobile Development",
//       description:
//         "Specializing in mobile app development, I create intuitive and high-performing mobile applications for both Android and iOS platforms to engage your audience effectively.",
//       icon: "mobile",
//     },
//     {
//       id: "3",
//       title: "Database Design",
//       description:
//         "Offering expert database design services, I ensure your data is organized, secure, and easily accessible, providing a solid foundation for your software applications.",
//       icon: "database",
//     },
//   ];

//   return (
//     <section id="services" className="min-h-screen bg-background py-20">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <div className="mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             My <span className="gradient-text">Services</span>
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <ServiceCard key={service.id} service={service} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
