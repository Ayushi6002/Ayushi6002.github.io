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

      {/* =====================================================
          FUTURISTIC ANIMATED BACKGROUND
          ===================================================== */}

      <div className="background-effects" aria-hidden="true">
        <div className="background-glow glow-one"></div>
        <div className="background-glow glow-two"></div>
        <div className="background-glow glow-three"></div>

        <div className="grid-overlay"></div>

        <div className="background-line line-1"></div>
        <div className="background-line line-2"></div>
        <div className="background-line line-3"></div>

        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4"></span>
        <span className="particle particle-5"></span>
        <span className="particle particle-6"></span>
        <span className="particle particle-7"></span>
        <span className="particle particle-8"></span>
        <span className="particle particle-9"></span>
        <span className="particle particle-10"></span>
        <span className="particle particle-11"></span>
        <span className="particle particle-12"></span>
      </div>

      {/* =====================================================
          NAVBAR
          ===================================================== */}

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
            aria-expanded={menuOpen}
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

        {/* =====================================================
            HERO
            ===================================================== */}

        <section id="home" className="hero section">

          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="hero-content">

            <div className="hero-badge">
              <span className="status-dot"></span>
              AI / ML Engineer • Python Developer
            </div>

            <p className="hero-intro">
              HELLO, I'M
            </p>

            <h1>
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
                <span>Explore My Work</span>
                <span className="button-arrow">↗</span>
              </button>

              <a
                className="secondary-button"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Resume</span>
                <span className="button-arrow">↗</span>
              </a>

            </div>

            <div className="hero-stats">

              <div className="stat">
                <strong>9.76</strong>
                <span>Latest CGPA</span>
              </div>

              <div className="stat">
                <strong>4+</strong>
                <span>AI/ML Projects</span>
              </div>

              <div className="stat">
                <strong>2</strong>
                <span>Internships</span>
              </div>

            </div>

          </div>

          <div className="scroll-indicator">
            <span></span>
            Scroll to explore
          </div>

        </section>

        {/* =====================================================
            ABOUT
            ===================================================== */}

        <section id="about" className="section glass-section">

          <div className="section-heading">

            <div className="section-number">
              01. ABOUT
            </div>

            <p>GET TO KNOW ME</p>

            <h2>
              About <span>Me</span>
            </h2>

          </div>

          <div className="about-content">

            <div className="about-card">

              <div className="card-glow"></div>

              <p>
                I'm Ayushi Jain, a B.Tech Computer Science &
                Engineering student with a strong interest in
                Artificial Intelligence and Machine Learning.
              </p>

              <p>
                My work focuses on building practical AI systems,
                machine learning pipelines and full-stack
                applications that solve real-world problems.
              </p>

              <p>
                I'm particularly interested in Deep Learning, NLP,
                explainable AI and developing intelligent software
                products.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            SKILLS
            ===================================================== */}

        <section id="skills" className="section">

          <div className="section-heading">

            <div className="section-number">
              02. SKILLS
            </div>

            <p>WHAT I WORK WITH</p>

            <h2>
              Technical <span>Skills</span>
            </h2>

          </div>

          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={skill}
                style={{
                  '--delay': `${index * 0.04}s`,
                }}
              >
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}

          </div>

        </section>

        {/* =====================================================
            PROJECTS
            ===================================================== */}

        <section id="projects" className="section">

          <div className="section-heading">

            <div className="section-number">
              03. PROJECTS
            </div>

            <p>MY WORK</p>

            <h2>
              Featured <span>Projects</span>
            </h2>

          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-top">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <span className="project-icon">
                    ↗
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

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

        {/* =====================================================
            EXPERIENCE
            ===================================================== */}

        <section
          id="experience"
          className="section glass-section"
        >

          <div className="section-heading">

            <div className="section-number">
              04. EXPERIENCE
            </div>

            <p>MY JOURNEY</p>

            <h2>
              Where I've <span>Worked</span>
            </h2>

          </div>

          <div className="experience-timeline">

            <div className="timeline-line"></div>

            <div className="experience-card">

              <div className="timeline-dot"></div>

              <div className="experience-header">

                <div>
                  <span className="experience-date">
                    2025
                  </span>

                  <h3>
                    Machine Learning Intern
                  </h3>

                  <h4>
                    OneStop AI
                  </h4>
                </div>

                <span className="experience-arrow">
                  ↗
                </span>

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

              <div className="timeline-dot"></div>

              <div className="experience-header">

                <div>
                  <span className="experience-date">
                    2 MONTHS
                  </span>

                  <h3>
                    Software Engineering Intern
                  </h3>

                  <h4>
                    Timeline ERP, Belapur
                  </h4>
                </div>

                <span className="experience-arrow">
                  ↗
                </span>

              </div>

              <p>
                Worked on ERP backend modules using Python scripting
                for data workflows, debugging and performance
                optimization while contributing to system
                documentation.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            CONTACT
            ===================================================== */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="section-heading">

            <div className="section-number">
              05. CONTACT
            </div>

            <p>LET'S CONNECT</p>

            <h2>
              Let's Build Something <span>Great</span>
            </h2>

          </div>

          <p className="contact-description">
            I'm always open to discussing interesting projects,
            internships, collaborations and opportunities.
          </p>

          <a
            className="primary-button contact-button"
            href="mailto:ayushi1219jain@gmail.com"
          >
            <span>Get In Touch</span>
            <span className="button-arrow">↗</span>
          </a>

        </section>

      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer>

        <p>
          © {new Date().getFullYear()} Ayushi Jain
        </p>

        <p>
          Built with React • Designed with curiosity ✦
        </p>

      </footer>

    </div>
  );
}

export default App;