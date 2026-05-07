import { useEffect } from 'react';

/**
 * SEO Component for dynamic meta tag management
 * Updates page title and meta descriptions based on active section
 */
const SEOHelmet = ({ 
  title = "Kanishka Pasindu - Full Stack Web Developer | MERN Stack Specialist",
  description = "Full Stack Web Developer with 4+ years of experience specializing in MERN Stack, React, Next.js, Node.js, and modern web technologies. Building scalable web applications and innovative digital solutions.",
  keywords = "Full Stack Developer, MERN Stack Developer, React Developer, Next.js Developer, Node.js Developer, JavaScript Developer, Web Developer, Software Engineer, Kanishka Pasindu",
  ogImage = "https://kanishkapasindu.com/src/assets/logo.png",
  url = "https://kanishkapasindu.com"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage);
    }
    
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', url);
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
  }, [title, description, keywords, ogImage, url]);
  
  return null;
};

export default SEOHelmet;
