import React from 'react';
import { Github, Mail, Linkedin, ExternalLink, GraduationCap, Briefcase, User, Code } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';

function App() {
  const personalDetails = {
    name: "Manoj",
    title: "Software Developer",
    email: "your.email@example.com",
    github: "https://github.com/NaiduBM/Manoj.git",
    linkedin: "https://linkedin.com/in/yourusername",
    bio: "Passionate software developer with expertise in web development and a strong foundation in computer science. Currently pursuing my degree and working on exciting projects.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/NaiduBM/Manoj.git",
      demo: "https://your-demo-link.com",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard using OpenWeather API. Displays current weather conditions and 5-day forecast for multiple cities.",
      tags: ["React", "API Integration", "Charts.js"],
      github: "https://github.com/NaiduBM/Manoj.git",
      demo: "https://your-demo-link.com",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1600",
    },
  ];

  const collegeProjects = [
    {
      title: "Data Structures Visualization",
      description: "Educational tool for visualizing common data structures and algorithms. Built as part of Advanced Algorithms course.",
      tags: ["JavaScript", "D3.js", "Algorithms"],
      github: "https://github.com/NaiduBM/Manoj.git",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1600",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Main background */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Content wrapper with semi-transparent overlay */}
      <div className="relative z-10">
        {/* Header/Hero Section */}
        <header className="relative bg-gradient-to-r from-blue-600/90 to-indigo-700/90 text-white">
          <div className="relative container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
                {/* Profile Image */}
                <div className="mb-8 md:mb-0 md:mr-8">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={personalDetails.profileImage}
                      alt={personalDetails.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{personalDetails.name}</h1>
                  <p className="text-xl md:text-2xl mb-6">{personalDetails.title}</p>
                  <p className="text-lg mb-8 max-w-2xl">{personalDetails.bio}</p>
                  <div className="flex justify-center md:justify-start space-x-4">
                    <a href={personalDetails.github} className="hover:text-blue-200 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={personalDetails.linkedin} className="hover:text-blue-200 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={`mailto:${personalDetails.email}`} className="hover:text-blue-200 transition-colors">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {/* About Section */}
          <Section title="About Me" icon={<User className="w-6 h-6" />}>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                  <p className="text-gray-600">
                    Detail your professional journey, skills, and aspirations here. Mention your key strengths
                    and what drives you in the field of software development.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS", "Docker"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100/80 backdrop-blur-sm text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Professional Projects */}
          <Section title="Professional Projects" icon={<Briefcase className="w-6 h-6" />}>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </Section>

          {/* College Projects */}
          <Section title="Academic Projects" icon={<GraduationCap className="w-6 h-6" />}>
            <div className="grid md:grid-cols-2 gap-8">
              {collegeProjects.map((project, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </Section>

          {/* Open Source Contributions */}
          <Section title="Open Source" icon={<Code className="w-6 h-6" />}>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">
                Highlight your open-source contributions and community involvement here.
                Describe the projects you've contributed to and your role in them.
              </p>
              <a 
                href={personalDetails.github} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View GitHub Profile <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </Section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800/95 backdrop-blur-sm text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href={personalDetails.github} className="hover:text-gray-300">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalDetails.linkedin} className="hover:text-gray-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalDetails.email}`} className="hover:text-gray-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;