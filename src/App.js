// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Tejaswini K - Sr. Full Stack Developer</title>
        <meta name="description" content="Welcome to Tejaswini K's portfolio website. I'm Tejaswini K, a passionate software developer showcasing my projects, skills, and experience." />
        <meta name="keywords" content="Tejaswini, Tejaswini K, tejaswini portfolio, Senior Full Stack Developer, Java, Spring Boot, React, AWS" />
        <meta name="author" content="Tejaswini K" />
        <meta property="og:title" content="Tejaswini K - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.linkedin.com/in/tejaswi2k18-k/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tejaswini K - Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <link rel="canonical" href="https://www.linkedin.com/in/tejaswi2k18-k/" />
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tejaswini K",
  "url": "https://www.linkedin.com/in/tejaswi2k18-k/",
  "sameAs": [
    "https://github.com/tejaswik2k18",
    "hhttps://www.linkedin.com/in/tejaswi2k18-k/"
  ],
  "jobTitle": "Sr. Full Stack Developer",
  "description": "Portfolio of Tejaswini K, Sr. Full Stack Developer. Projects, skills, experience, and contact information."
}

        `}</script>
        {/* SEO: Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;