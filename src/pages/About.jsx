import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>About Me</h1>
          <div className="header-underline"></div>
          <p className="header-subtitle">Full Stack Developer specializing in MERN stack development</p>
        </div>
      </div>

      <div className="about-main container">
        <section className="bio-section">
          <div className="bio-card">
            <h2>Vishal Makwana</h2>
            <div className="bio-title">Full Stack Developer | MERN Specialist</div>
            <div className="bio-content">
              <p>
                I'm a passionate full stack developer specializing in the MERN stack 
                (MongoDB, Express, React, Node.js). With expertise in both frontend and 
                backend technologies, I create seamless, responsive experiences that 
                engage users while maintaining robust, efficient backend systems.
              </p>
              <p>
                My goal is to build fast, scalable, and user-focused web applications 
                that solve real-world problems and deliver exceptional user experiences.
              </p>
            </div>
            <div className="resume-download">
              <a href="/files/Vishal_resume.pdf" target="_blank" rel="noopener noreferrer">
                <span>Download Resume</span>
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </section>

        <section className="education-section">
          <div className="section-title">
            <h2>Education</h2>
            <div className="section-line"></div>
          </div>
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Master of Computer Applications (MCA)</h3>
                  <span className="timeline-date">2023 - 2025</span>
                </div>
                <h4 className="timeline-subtitle">Atmiya University</h4>
                <p className="timeline-description">
                  Successfully completed my Master's degree in Computer Applications with focus on 
                  advanced programming concepts, software development methodologies, and database 
                  management systems.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Bachelor of Computer Applications (BCA)</h3>
                  <span className="timeline-date">2020 - 2023</span>
                </div>
                <h4 className="timeline-subtitle">T.N.RAO College</h4>
                <p className="timeline-description">
                  Graduated with distinction in Bachelor of Computer Applications. 
                  Gained strong foundation in computer science fundamentals, programming 
                  languages, and web development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="section-title">
            <h2>Technical Skills</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-card-header">
                <h3>Frontend Development</h3>
                <i className="fas fa-code"></i>
              </div>
              <ul className="skill-list">
                <li>
                  <div className="skill-name">React.js</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "90%"}}></div></div>
                </li>
                <li>
                  <div className="skill-name">JavaScript ES6+</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "85%"}}></div></div>
                </li>
                <li>
                  <div className="skill-name">HTML5 & CSS3</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "95%"}}></div></div>
                </li>
                <li>
                  <div className="skill-name">Responsive Design</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "90%"}}></div></div>
                </li>
              </ul>
            </div>
            
            <div className="skill-card">
              <div className="skill-card-header">
                <h3>Backend Development</h3>
                <i className="fas fa-server"></i>
              </div>
              <ul className="skill-list">
                <li>
                  <div className="skill-name">Node.js</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "85%"}}></div></div>
                </li>
                <li>
                  <div className="skill-name">Express.js</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "80%"}}></div></div>
                </li>
                <li>
                  <div className="skill-name">MongoDB</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "75%"}}></div></div>
                </li>
                <li>
                  <div className="skill-name">RESTful APIs</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "90%"}}></div></div>
                </li>
              </ul>
            </div>
            
            <div className="skill-card">
              <div className="skill-card-header">
                <h3>Tools & Technologies</h3>
                <i className="fas fa-tools"></i>
              </div>
              <ul className="skill-list">
                <li>
                  <div className="skill-name">Git & GitHub</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "90%"}}></div></div>
                </li>
                <li>
                  <div className="skill-name">Webpack</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "75%"}}></div></div>
                </li>
                <li>
                  <div className="skill-name">Testing</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "70%"}}></div></div>
                </li>
                <li>
                  <div className="skill-name">CI/CD</div>
                  <div className="skill-bar"><div className="skill-progress" style={{width: "65%"}}></div></div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;