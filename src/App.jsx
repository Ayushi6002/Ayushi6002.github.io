import React, { useState } from 'react';

// Main App component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render different sections based on currentPage state
  const renderSection = () => {
    switch (currentPage) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Navbar Component */}
      <Navbar setCurrentPage={setCurrentPage} />

      {/* Main Content Area */}
      <main className="container mx-auto p-4 md:p-8">
        {renderSection()}
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

// Navbar Component
const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">YourName</h1>
        <div className="space-x-4">
          <NavLink text="Home" page="home" setCurrentPage={setCurrentPage} />
          <NavLink text="About" page="about" setCurrentPage={setCurrentPage} />
          <NavLink text="Skills" page="skills" setCurrentPage={setCurrentPage} />
          <NavLink text="Projects" page="projects" setCurrentPage={setCurrentPage} />
          <NavLink text="Contact" page="contact" setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </nav>
  );
};

// NavLink Component (reusable for navbar items)
const NavLink = ({ text, page, setCurrentPage }) => {
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-gray-700"
    >
      {text}
    </button>
  );
};

// Home/Hero Section Component
const HomeSection = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center text-center py-16 px-4">
      <div className="mb-8">
        {/* Placeholder image for your profile picture */}
        <img
          src="https://placehold.co/200x200/007bff/ffffff?text=Your+Photo"
          alt="Your Profile"
          className="rounded-full w-48 h-48 object-cover border-4 border-blue-500 shadow-xl"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/200x200/007bff/ffffff?text=Error"; }}
        />
      </div>
      <h2 className="text-5xl font-extrabold text-white mb-4">Hi, I'm <span className="text-blue-400">Your Name</span></h2>
      <p className="text-xl text-gray-300 max-w-2xl mb-8">
        A passionate [Your Field/Role] building awesome web experiences.
      </p>
      <button
        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
      >
        View My Work
      </button>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-800 rounded-lg shadow-xl mb-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">About Me</h2>
      <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
        <p className="mb-4">
          Hello! I'm [Your Name], a [Your Field/Role] with a passion for [Your specific interests, e.g., creating intuitive user interfaces, solving complex problems with code]. I have [Number] years of experience in [Your primary technology/area, e.g., web development, data analysis, software engineering].
        </p>
        <p className="mb-4">
          My journey into [Your Field] began when [brief story or motivation, e.g., I built my first website, I discovered the power of data]. I love learning new technologies and constantly challenging myself to build better, more efficient, and more impactful solutions.
        </p>
        <p>
          Outside of coding, you can find me [Your hobbies/interests, e.g., hiking, reading sci-fi, playing guitar]. I'm always open to new opportunities and collaborations, so feel free to reach out!
        </p>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'Tailwind CSS',
    'HTML5', 'CSS3', 'Git', 'SQL', 'MongoDB', 'REST APIs', 'Cloud Platforms (AWS/GCP)'
  ];

  return (
    <section id="skills" className="py-16 px-4 mb-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-700 text-white px-5 py-2 rounded-full shadow-md text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A web application built with React and Node.js for managing tasks and projects efficiently.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      link: '#', // Replace with actual project link
      image: 'https://placehold.co/400x250/333/fff?text=Project+Alpha'
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'An interactive dashboard developed using Python and Dash for visualizing large datasets.',
      tech: ['Python', 'Dash', 'Pandas', 'Plotly'],
      link: '#', // Replace with actual project link
      image: 'https://placehold.co/400x250/333/fff?text=Project+Beta'
    },
    {
      title: 'E-commerce Backend API',
      description: 'A robust REST API for an e-commerce platform, handling user authentication, product management, and orders.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      link: '#', // Replace with actual project link
      image: 'https://placehold.co/400x250/333/fff?text=Project+Gamma'
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-800 rounded-lg shadow-xl mb-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 border border-gray-700">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/333/fff?text=Error"; }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Contact Me</h2>
      <div className="max-w-2xl mx-auto text-lg text-gray-300 text-center">
        <p className="mb-6">
          I'm always excited to connect with new people and discuss potential collaborations or interesting projects. Feel free to reach out!
        </p>
        <div className="space-y-4">
          <p>
            <span className="font-semibold text-blue-400">Email:</span>{' '}
            <a href="mailto:your.email@example.com" className="text-blue-300 hover:underline">your.email@example.com</a>
          </p>
          <p>
            <span className="font-semibold text-blue-400">LinkedIn:</span>{' '}
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">linkedin.com/in/yourprofile</a>
          </p>
          <p>
            <span className="font-semibold text-blue-400">GitHub:</span>{' '}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">github.com/yourusername</a>
          </p>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 text-center mt-8 shadow-inner">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">GitHub</a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default App;
