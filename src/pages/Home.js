import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiBrain, BiRocket } from 'react-icons/bi';
import { DiJava } from 'react-icons/di';
import {
  SiCss3,
  SiJavascript,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiHandshake,
  SiBookstack,
} from 'react-icons/si';
import SocialMediaIcons from '../components/SocialMediaIcons';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <main>
      <section className='section-hero'>
        <div className='hero'>
          <div className='hero-content'>
            <h1 className='main-heading'>Hi, I'm Alex</h1>
            <p className='secondary-heading'>Aspiring Software Developer</p>
            <SocialMediaIcons />
          </div>
          <div className='hero-image-container'>
            <img
              className='hero-img'
              src='img/avatar-waving.png'
              alt='Waving avatar'
            />
          </div>
        </div>
      </section>
      <section className='section-about' id='about'>
        <div className='about-me'>
          <h2 className='section-heading'>About Me</h2>
          <div className='container'>
            <div className='about-me-hero'>
              <div>
                <img
                  className='about-me-img'
                  src='img/me.jpg'
                  alt='Waving avatar'
                />
              </div>
              <div className='about-me-content'>
                <p>
                  I am a recent Software Engineering graduate, passionate about
                  creating innovative software solutions. With a strong
                  foundation in programming languages and a keen desire to
                  learn, I am well-equipped to tackle real-world challenges in
                  the industry. I have experience working with Java, JavaScript,
                  and Python, along with modern frameworks like Node.js and
                  React and I continuously seek personal growth through
                  learning. I am actively seeking opportunities to contribute my
                  skills and enthusiasm to a dynamic team, ready to make a
                  positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='languages'>
          <h3 className='languages-heading'>I am proficient in</h3>
          <div className='languages-icons'>
            <div className='icon-container'>
              <p>HTML5</p>
              <AiFillHtml5 className='language-icon' />
            </div>
            <div className='icon-container'>
              <p>CSS3</p>
              <SiCss3 className='language-icon' />
            </div>
            <div className='icon-container'>
              <p>JavaScript</p>
              <SiJavascript className='language-icon' />
            </div>
            <div className='icon-container'>
              <p>Java</p>
              <DiJava className='language-icon' />
            </div>
          </div>
        </div>
        <div className='tools'>
          <h3 className='tools-heading'>And familiar with...</h3>
          <div className='tools-icons'>
            <div className='icon-container'>
              <p>Python</p>
              <SiPython className='tool-icon' />
            </div>
            <div className='icon-container'>
              <p>Node.js</p>
              <SiNodedotjs className='tool-icon' />
            </div>
            <div className='icon-container'>
              <p>Next.js</p>
              <SiNextdotjs className='tool-icon' />
            </div>
            <div className='icon-container'>
              <p>React.js</p>
              <SiReact className='tool-icon' />
            </div>
            <div className='icon-container'>
              <p>Docker</p>
              <SiDocker className='tool-icon' />
            </div>
            <div className='icon-container'>
              <p>Kubernetes</p>
              <SiKubernetes className='tool-icon' />
            </div>
            <div className='icon-container'>
              <p>MongoDB</p>
              <SiMongodb className='tool-icon' />
            </div>
            <div className='icon-container'>
              <p>MySQL</p>
              <SiMysql className='tool-icon' />
            </div>
          </div>
        </div>
        <div className='why-me'>
          <div className='container'>
            <h3 className='why-me-heading'>Why me?</h3>
            <div className='why-me-content'>
              <div className='reason'>
                <BiRocket className='reason-icon' />
                <p className='reason-title'>Technical Foundations</p>
                <p className='reason-text'>
                  Strong foundation in programming languages and paradigms
                </p>
              </div>
              <div className='reason'>
                <SiBookstack className='reason-icon' />
                <p className='reason-title'>Continuous Learner</p>
                <p className='reason-text'>
                  Always keen to learn new technologies and different
                  perspectives
                </p>
              </div>
              <div className='reason'>
                <SiHandshake className='reason-icon' />
                <p className='reason-title'>Collaborative Mindset</p>
                <p className='reason-text'>
                  Able to adapt and communicate effectively in collaborative
                  environments
                </p>
              </div>
              <div className='reason'>
                <BiBrain className='reason-icon' />
                <p className='reason-title'>Problem Solver</p>
                <p className='reason-text'>
                  Well versed in solving complex problems and creating
                  innovative solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-projects' id='projects'>
        <h2 className='projects-heading section-heading'>My Projects</h2>
        <div className='container projects-cards'>
          <div className='project'>
            <img
              className='project-img'
              src='img/ebarter-home.png'
              alt='E-Barter Home Page'
            />
            <div className='project-content'>
              <h3 className='project-title'>
                E-Barter - Microservices Web App
              </h3>
              <p className='project-description'>
                This project was completed as part of my final year project in
                my university course. It was created using Node.js for the
                backend services, Next.js for the client with Docker and
                Kubernetes being utilized to containerize and deploy each
                service.
              </p>
            </div>
            <div className='project-buttons'>
              <div>
                <a
                  className='project-button'
                  href='http://www.ebarter-app-project.xyz'
                >
                  Live Demo
                </a>
              </div>
              <div>
                <a
                  className='project-button'
                  href='http://www.github.com/alex-melia/ebarter'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className='project'>
            <img
              className='project-img'
              src='img/cardio-home.png'
              alt='E-Barter Home Page'
            />
            <h3 className='project-title'>Cardiomyopathy Web App</h3>
            <p className='project-description'>
              This project was a group project completed during my university
              course. The Web App acts as a central repository of Cardiomyopathy
              data and enables users with various levels of access and interpret
              such data, as well as being able to submit their own. Created with
              Vue.js and Google Firebase.
            </p>
            <div className='project-buttons'>
              <div>
                <a
                  className='project-button'
                  href='https://cardiomyopathy-ada0f.web.app'
                >
                  Live Demo
                </a>
              </div>
              <div>
                <a
                  className='project-button'
                  href='https://github.com/Danny-Kettle/Cardiomyopathies'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className='project'>
            <img
              className='project-img'
              src='img/moviedb.png'
              alt='Restful MVC Page'
            />
            <h3 className='project-title'>RESTful MVC Database Tool</h3>
            <p className='project-description'>
              This project was completed during my university course. Users are
              able to use the MVC application as a tool to perform CRUD
              functionality on a database containing thousands of movies.
              Created using Java Web Servlets for the front-end application and
              the database hosted within MySQL server.
            </p>
            <div className='project-buttons'>
              <div>
                <a className='project-button' href=''>
                  Live Demo
                </a>
              </div>
              <div>
                <a
                  className='project-button'
                  href='https://github.com/alex-melia/RestfulMVC'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className='project'>
            <img
              className='project-img blur'
              src='img/discord.png'
              alt='Discord Logo'
            />
            <h3 className='project-title'>
              The "AIO" Discord Bot *in progress*
            </h3>
            <p className='project-description'>
              The "All-in-one" Discord bot will encompass a wide array of
              essential features to enhance the user experience, including user
              authentication, moderation tools, entertainment options, and role
              management capabilities.
            </p>
            <div className='project-buttons'>
              <div>
                <a className='project-button' href=''>
                  Live Demo
                </a>
              </div>
              <div>
                <a className='project-button' href=''>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-contact' id='contact'>
        <h2 className='section-heading'>Shoot me a message!</h2>
        <div className='container'>
          <div className='contact-card'>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
