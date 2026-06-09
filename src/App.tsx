import { useState, useEffect } from 'react'
import './App.css'

const LEADERS = [
  {
    name: 'Veera Venkata Rao Pentakota',
    role: 'Director – Software Development & Architecture',
    experience: '22 years of experience in enterprise software development and Microsoft technologies.',
    icon: '🏗️',
  },
  {
    name: 'Lalitha Soundarya Chirravuri',
    role: 'Director – Quality Engineering & Testing',
    experience: '18 years of expertise in QA processes, automation testing, and Selenium frameworks.',
    icon: '🔍',
  },
  {
    name: 'Vivek Adiveppa Ramanavar',
    role: 'Director – Enterprise Application Development',
    experience: '23 years of experience in enterprise software engineering and backend systems.',
    icon: '⚙️',
  },
]

const COMPETENCIES = [
  {
    category: 'Software Development',
    items: [
      'Enterprise Application Development',
      'Web Portal & Dashboard Development',
      'RESTful Web APIs',
      'AI-Assisted Application Development',
      'Legacy System Modernization',
    ],
  },
  {
    category: 'Microsoft Technologies',
    items: [
      '.NET Framework & .NET Core',
      'ASP.NET MVC & Web API',
      'C#',
      'MS SQL Server',
      'Azure Functions',
    ],
  },
  {
    category: 'Cloud & Architecture',
    items: [
      'Microservices Architecture',
      'Microsoft Azure',
      'Cloud-Native Solutions',
      'Distributed Systems Design',
    ],
  },
  {
    category: 'Quality Engineering',
    items: [
      'Selenium Automation Testing',
      'Functional & Regression Testing',
      'Test Automation Frameworks',
      'QA Process Engineering',
    ],
  },
]

const PROJECTS = [
  {
    title: 'Enterprise Digital Transformation Platform',
    description:
      'Developed scalable enterprise applications using .NET technologies and microservices architecture to streamline operations and improve system integration.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Cloud API & Integration Services',
    description:
      'Built secure Web APIs and Azure-based integration services enabling seamless communication across enterprise systems.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'AI-Assisted Web Portal Solutions',
    description:
      'Created modern web portals using AI-assisted development approaches to accelerate delivery and improve user experience.',
    image: 'https://images.pexels.com/photos/8386443/pexels-photo-8386443.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Automated Testing Framework',
    description:
      'Implemented Selenium-based automation frameworks to reduce manual testing effort and improve deployment quality.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

const WHY_CHOOSE = [
  '50+ Years of Combined IT Experience',
  'Expertise in Microsoft Technology Stack',
  'Scalable Cloud & Microservices Solutions',
  'AI-Driven Development Approach',
  'Strong Focus on Quality & Automation',
  'Enterprise-Level Software Engineering',
  'Customer-Centric Consulting & Innovation',
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          <a href="#hero" className="header__logo">
            <img src="/VSquareThoughts.png" alt="VSQUARETHOUGHTS" />
          </a>
          <nav className="header__nav">
            <a href="#about">About</a>
            <a href="#leadership">Leadership</a>
            <a href="#competencies">Competencies</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="header__cta">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero__overlay" />
        <div className="hero__container">
          <p className="hero__tag">Software Consulting & Research Company</p>
          <h1 className="hero__title">
            Engineering Intelligent Software Solutions for Modern Businesses
          </h1>
          <p className="hero__subtitle">
            Delivering scalable, enterprise-grade digital solutions with over 50 years of combined IT industry experience.
          </p>
          <div className="hero__actions">
            <a href="#about" className="btn btn--primary">Learn More</a>
            <a href="#contact" className="btn btn--outline">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-label">About Us</div>
          <h2 className="section-title">Building Future-Ready Digital Solutions</h2>
          <p className="about__text">
            At VSQUARETHOUGHTS PRIVATE LIMITED, we combine deep technical expertise with practical
            industry experience to create secure, scalable, and high-performing software solutions.
            Our company was founded with the vision of helping businesses leverage modern
            technologies, automation, and cloud computing to improve operational efficiency and
            customer experience.
          </p>
          <p className="about__text">
            Our leadership team consists of experienced professionals with strong backgrounds in
            enterprise software development, software architecture, testing automation, and
            technology consulting.
          </p>
          <div className="about__stats">
            <div className="stat">
              <span className="stat__number">50+</span>
              <span className="stat__label">Years Combined Experience</span>
            </div>
            <div className="stat">
              <span className="stat__number">3</span>
              <span className="stat__label">Expert Directors</span>
            </div>
            <div className="stat">
              <span className="stat__number">4+</span>
              <span className="stat__label">Core Competency Areas</span>
            </div>
            <div className="stat">
              <span className="stat__number">2025</span>
              <span className="stat__label">Established</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="leadership">
        <div className="container">
          <div className="section-label">Our Team</div>
          <h2 className="section-title">Leadership Team</h2>
          <div className="leadership__grid">
            {LEADERS.map((leader) => (
              <div key={leader.name} className="leader-card">
                <div className="leader-card__icon">{leader.icon}</div>
                <h3 className="leader-card__name">{leader.name}</h3>
                <p className="leader-card__role">{leader.role}</p>
                <p className="leader-card__experience">{leader.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section id="competencies" className="competencies">
        <div className="container">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Core Competencies</h2>
          <div className="competencies__grid">
            {COMPETENCIES.map((comp) => (
              <div key={comp.category} className="competency-card">
                <h3 className="competency-card__title">{comp.category}</h3>
                <ul className="competency-card__list">
                  {comp.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects__grid">
            {PROJECTS.map((project) => (
              <div key={project.title} className="project-card">
                <div className="project-card__image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="section-label">Our Edge</div>
          <h2 className="section-title">Why Choose VSquareThoughts</h2>
          <div className="why-choose__grid">
            {WHY_CHOOSE.map((reason, i) => (
              <div key={i} className="why-card">
                <div className="why-card__number">{String(i + 1).padStart(2, '0')}</div>
                <p className="why-card__text">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-label">Get Started</div>
          <h2 className="section-title">Let's Build Future-Ready Digital Solutions</h2>
          <p className="contact__subtitle">
            Whether you are planning to modernize enterprise systems, build scalable web
            applications, implement cloud-native platforms, or improve software quality through
            automation, VSQUARETHOUGHTS PRIVATE LIMITED is ready to partner with you.
          </p>
          <div className="contact__info">
            <div className="contact__address">
              <h4>Registered Office</h4>
              <p>
                95B, 3rd Floor, Matrushree Krupa,
                <br />
                20 Cross 2 Block, Near SBI, Doorvaninagar,
                <br />
                Bangalore North, Karnataka, India – 560016
              </p>
            </div>
            <div className="contact__cta">
              <h4>Connect With Us</h4>
              <p>
                Partner with us to transform your ideas into intelligent, scalable, and impactful
                software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <span className="footer__logo">
                VSQUARE<span>THOUGHTS</span>
              </span>
              <p>Engineering Intelligent Software Solutions for Modern Businesses</p>
            </div>
            <div className="footer__links">
              <a href="#about">About</a>
              <a href="#leadership">Leadership</a>
              <a href="#competencies">Competencies</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; {new Date().getFullYear()} VSQUARETHOUGHTS PRIVATE LIMITED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
