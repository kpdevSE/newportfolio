/**
 * SEO Configuration for different sections of the portfolio
 * Provides optimized meta data for each page section
 */

export const seoConfig = {
  home: {
    title: "Kanishka Pasindu - Full Stack Web Developer | MERN Stack Specialist",
    description: "Full Stack Web Developer with 4+ years of experience specializing in MERN Stack, React, Next.js, Node.js, and modern web technologies. Building scalable web applications and innovative digital solutions.",
    keywords: "Full Stack Developer, MERN Stack Developer, React Developer, Next.js Developer, Node.js Developer, JavaScript Developer, Web Developer, Software Engineer, Kanishka Pasindu, Frontend Developer, Backend Developer",
    url: "https://kanishkapasindu.com"
  },
  about: {
    title: "About Kanishka Pasindu - Full Stack Developer Profile",
    description: "Learn about Kanishka Pasindu, a passionate Full Stack Developer with 4+ years of experience, 50+ completed projects, and expertise in MERN Stack, React, Next.js, and modern web technologies.",
    keywords: "About Kanishka Pasindu, Developer Profile, Full Stack Developer Experience, MERN Stack Expert, Web Developer Portfolio",
    url: "https://kanishkapasindu.com/#about"
  },
  projects: {
    title: "Projects by Kanishka Pasindu - Web Development Portfolio",
    description: "Explore 50+ web development projects by Kanishka Pasindu including MERN Stack applications, React projects, Next.js websites, and innovative digital solutions for clients worldwide.",
    keywords: "Web Development Projects, React Projects, MERN Stack Portfolio, Next.js Applications, JavaScript Projects, Full Stack Projects, Kanishka Pasindu Projects",
    url: "https://kanishkapasindu.com/#projects"
  },
  skills: {
    title: "Technical Skills - Kanishka Pasindu | MERN Stack & Modern Web Technologies",
    description: "Comprehensive technical skills including JavaScript, React, Node.js, MongoDB, Express.js, Next.js, TypeScript, Tailwind CSS, and modern web development tools and frameworks.",
    keywords: "JavaScript Skills, React Skills, Node.js Developer, MongoDB Expert, MERN Stack Skills, Next.js Developer, TypeScript, Tailwind CSS, Web Development Skills",
    url: "https://kanishkapasindu.com/#skills"
  },
  experience: {
    title: "Work Experience - Kanishka Pasindu | 4+ Years in Web Development",
    description: "Professional work experience spanning 4+ years in full stack web development, with expertise in building scalable applications, leading projects, and delivering solutions for 25+ satisfied clients.",
    keywords: "Work Experience, Full Stack Developer Experience, Web Development Career, Professional Experience, MERN Stack Experience, Software Engineer Experience",
    url: "https://kanishkapasindu.com/#experience"
  },
  education: {
    title: "Education & Certifications - Kanishka Pasindu",
    description: "Educational background and professional certifications in Computer Science, Software Engineering, and Web Development technologies.",
    keywords: "Education, Computer Science Degree, Software Engineering Education, Web Development Certifications, Professional Training",
    url: "https://kanishkapasindu.com/#education"
  },
  contact: {
    title: "Contact Kanishka Pasindu - Hire Full Stack Developer",
    description: "Get in touch with Kanishka Pasindu for web development projects, freelance opportunities, or collaboration. Available for MERN Stack, React, Next.js, and full stack development work.",
    keywords: "Contact Developer, Hire Full Stack Developer, Web Development Services, MERN Stack Developer for Hire, React Developer Contact, Freelance Web Developer",
    url: "https://kanishkapasindu.com/#contact"
  }
};

/**
 * Get SEO data for a specific section
 * @param {string} section - The section name (home, about, projects, etc.)
 * @returns {object} SEO configuration object
 */
export const getSEOData = (section = 'home') => {
  return seoConfig[section] || seoConfig.home;
};
