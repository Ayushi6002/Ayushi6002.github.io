import { useState } from 'react';
import './App.css';

const skills = [
  'Python',
  'Java',
  'C++',
  'C',
  'SQL / MySQL',
  'Scikit-learn',
  'TensorFlow',
  'NLP',
  'Pandas',
  'NumPy',
  'React.js',
  'JavaScript',
  'Git',
  'GitHub',
  'Supabase',
];

const projects = [
  {
    title: 'EduGrant AI',
    category: 'Full-Stack AI Platform',
    description:
      'An explainable education loan and scholarship eligibility platform with human-in-the-loop decision making, SHAP explanations and document verification.',
    tech: ['React.js', 'FastAPI', 'Scikit-learn', 'XGBoost', 'SHAP'],
  },
  {
    title: 'CrowdSense AI',
    category: 'AI-Based Crowd Prediction',
    description:
      'A system designed to predict crowd count and classify crowd risk based on location, time, historical data, weather and event information.',
    tech: ['Python', 'React.js', 'Supabase', 'Machine Learning'],
  },
  {
    title: 'House Price Prediction',
    category: 'End-to-End ML Pipeline',
    description:
      'An end-to-end machine learning pipeline covering data ingestion, preprocessing, feature engineering and Random Forest model training.',
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas'],
  },
  {
    title: 'Rockfall Prediction System',
    category: 'Environmental ML',
    description:
      'A time-series risk prediction system using geological and environmental parameters with Random Forest and LSTM models.',
    tech: ['Python', 'Random Forest', 'LSTM', 'Matplotlib'],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* Animated background */}
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">

          <button
            className="logo"
            onClick={() => scrollToSection('home')}
          >
            Ayushi<span>.</span>
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollToSection('home')}>
              Home
            </button>

            <button onClick={() => scrollToSection('about')}>
              About
            </button>

            <button onClick={() => scrollToSection('skills')}>
              Skills
            </button>

            <button onClick={() => scrollToSection('projects')}>
              Projects
            </button>

            <button onClick={() => scrollToSection('experience')}>
              Experience
            </button>

            <button onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </div>

        </div>
      </nav>

      <main>

        {/* HERO */}
        <section id="home" className="hero section">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="hero-content">

            <p className="hero-tag">
              AI / ML Engineer • Python Developer
            </p>

            <h1>
              Hi, I'm{' '}
              <span className="gradient-text">
                Ayushi Jain
              </span>
            </h1>

            <h2>
              Building intelligent solutions with
              <span> AI, ML & software.</span>
            </h2>

            <p className="hero-description">
              B.Tech Computer Science student passionate about
              machine learning, deep learning, NLP and building
              practical AI-powered applications.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => scrollToSection('projects')}
              >
                Explore My Work
              </button>

              <a
                className="secondary-button"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>

            </div>

            <div className="hero-stats">
              <div>
                <strong>9.76</strong>
                <span>Latest CGPA</span>
              </div>

              <div>
                <strong>4+</strong>
                <span>AI/ML Projects</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Internships</span>
              </div>
            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="section glass-section">

          <div className="section-heading">
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>

          <div className="about-content">

            <p>
              I'm Ayushi Jain, a B.Tech Computer Science &
              Engineering student with a strong interest in
              Artificial Intelligence and Machine Learning.
            </p>

            <p>
              My work focuses on building practical AI systems,
              machine learning pipelines and full-stack applications
              that solve real-world problems.
            </p>

            <p>
              I'm particularly interested in Deep Learning, NLP,
              explainable AI and developing intelligent software
              products.
            </p>

          </div>

        </section>

        {/* SKILLS */}
        <section id="skills" className="section">

          <div className="section-heading">
            <p>WHAT I WORK WITH</p>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}

          </div>

        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">

          <div className="section-heading">
            <p>MY WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">

            {projects.map((project) => (
              <article className="project-card" key={project.title}>

                <div className="project-top">
                  <span>{project.category}</span>
                  <span className="project-icon">↗</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section glass-section">

          <div className="section-heading">
            <p>MY JOURNEY</p>
            <h2>Experience</h2>
          </div>

          <div className="experience-card">

            <div>
              <span className="experience-date">
                2025
              </span>

              <h3>Machine Learning Intern</h3>

              <h4>OneStop AI</h4>
            </div>

            <p>
              Developed Python-based machine learning workflows
              for classification and regression problems, worked
              on data preprocessing and feature engineering, and
              applied NLP and supervised/unsupervised learning
              techniques.
            </p>

          </div>

          <div className="experience-card">

            <div>
              <span className="experience-date">
                2 Months
              </span>

              <h3>Software Engineering Intern</h3>

              <h4>Timeline ERP, Belapur</h4>
            </div>

            <p>
              Worked on ERP backend modules using Python scripting
              for data workflows, debugging and performance
              optimization while contributing to system
              documentation.
            </p>

          </div>

        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">

          <div className="section-heading">
            <p>LET'S CONNECT</p>
            <h2>Get In Touch</h2>
          </div>

          <p>
            I'm always open to discussing interesting projects,
            internships, collaborations and opportunities.
          </p>

          <a
            className="primary-button"
            href="mailto:ayushi1219jain@gmail.com"
          >
            Email Me
          </a>

        </section>

      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} Ayushi Jain
        </p>
      </footer>

    </div>
  );
}

export default App;