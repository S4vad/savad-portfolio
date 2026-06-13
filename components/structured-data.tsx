"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammed Savad",
      jobTitle: "Software Engineer",
      description:
        "Software Engineer building full-stack web applications and production-grade systems. Experienced in React, Next.js, Node.js, and Shopify app development.",
      url: "https://savad.vercel.app",
      email: "1745savad@gmail.com",
      nationality: "Indian",
      gender: "Male",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
      },
      sameAs: [
        "https://www.linkedin.com/in/savadk",
        "https://github.com/S4vad",
        "https://x.com/sava__d",
      ],
      knowsAbout: [
        "Full Stack Development",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "Shopify App Development",
        "Remix",
        "Web Development",
        "Software Engineering",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Indira Gandhi National Open University",
          alternateName: "IGNOU",
          description: "Masters of Computer Application (MCA)",
        },
        {
          "@type": "EducationalOrganization",
          name: "Regional College",
          description: "BSc Computer Science",
        },
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Helixo",
          description: "Software Engineer",
          url: "https://helixo.co",
        },
      ],
    };

    try {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } catch (error) {
      console.error("Error adding structured data:", error);
    }
  }, []);

  return null;
}
