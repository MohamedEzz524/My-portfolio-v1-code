import "./about.css";
// send to SectionEnd.js
import {
  SectionEnd,
  ParaSection,
  FontAwesomeIcon,
  MainTitle,
  AnimatedSection,
} from "../Imports/ImportCenter.js";
import {
  faPhone,
  faCalendar,
  faInbox,
  faAddressCard,
  faCertificate,
  faSignature,
} from "../Imports/ImportCenter.js";
import myImage from "../assets/images/me-trans.png";
import aboutImg from "../assets/images/p12.jpg";

const languages = [
  { name: "English", level: "90%", speak: "fluent" },
  { name: "Arabic", level: "95%", speak: "native" },
];

export default function About() {
  return (
    <section className="about section-app" id="about">
      <MainTitle title="ABOUT ME" />
      <AnimatedSection delay={0.1}>
        <div className="about-flex">
          <div className="img-lang">
            <img src={myImage} alt="noImage" style={{ display: "block" }}></img>
            <div className="lang-container">
              {languages.map((e, i) => (
                <div
                  className="lang"
                  key={i}
                  style={{ "--bar-width": e.level }}
                >
                  <h4>
                    {e.name} ⇢ <span>({e.speak})</span>
                  </h4>
                  <div style={{ position: "relative" }} className="bar-lang">
                    <div
                      style={{ width: e.speak === "fluent" ? "90%" : "95%" }}
                      className="bar-fill"
                    ></div>
                    <div className="per">{e.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-info">
            <div className="up-info-container">
              <h1>Web Developer</h1>
              <p>
                I’m a Computer Engineering, I graduated from Ain Shams
                University in 2023. As skilled Web developer passionate about
                building responsive, user-centric web applications with a focus
                on React. With a keen eye for design and a love for clean code,
                I bridge gap between creativity and functionality, Eager to
                learn new technologies, I am also a strong team player with
                excellent problem-solving and communication skills, Having
                successfully completed my military service 3/2025, I am now
                ready to embark on my professional journey.
              </p>
            </div>
            <div className="down-info-container">
              <ul className="personal">
                <li>
                  <div>
                    <FontAwesomeIcon icon={faSignature} color="#e2d1ff" />{" "}
                    <strong>Name:</strong>
                  </div>
                  <span>Mohamed ElSayed</span>
                </li>
                <li>
                  <div>
                    <FontAwesomeIcon icon={faPhone} color="#e2d1ff" />{" "}
                    <strong>Phone:</strong>
                  </div>
                  <span>(+2)01033866796</span>
                </li>
                <li>
                  <div>
                    <FontAwesomeIcon icon={faCertificate} color="#e2d1ff" />{" "}
                    <strong>Degree:</strong>
                  </div>
                  <span>BS of Computer Engineering</span>
                </li>
              </ul>
              <ul className="personal">
                <li>
                  <div>
                    <FontAwesomeIcon icon={faCalendar} color="#e2d1ff" />{" "}
                    <strong>Birthday:</strong>
                  </div>{" "}
                  <span>3 July 2000</span>
                </li>

                <li>
                  <div>
                    <FontAwesomeIcon icon={faInbox} color="#e2d1ff" />{" "}
                    <strong>Email:</strong>
                  </div>
                  <span>moelsayed524@gmail.com</span>
                </li>

                <li>
                  <div>
                    <FontAwesomeIcon icon={faAddressCard} color="#e2d1ff" />{" "}
                    <strong>Address:</strong>
                  </div>{" "}
                  <span>10th of Ramadan, Sharkia, Egypt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="courses-section">
          <h3 className="courses-heading">Academic Foundation</h3>
          <p className="courses-subtitle">
            During my Computer Engineering studies, I'm aware of these core
            concepts:
          </p>

          <div className="courses-grid">
            {/* Database Courses */}
            <div className="course-category">
              <h4 className="category-title">
                <span className="database-icon">🗃️</span>
                Database Systems
              </h4>
              <ul className="course-list">
                <li>MySQL/Relational Databases</li>
                <li>NoSQL Fundamentals</li>
                <li>MongoDB Architecture</li>
                <li>Database Design Principles</li>
              </ul>
            </div>

            {/* Programming Courses */}
            <div className="course-category">
              <h4 className="category-title">
                <span className="code-icon">💻</span>
                Software Engineering
              </h4>
              <ul className="course-list">
                <li>Java OOP</li>
                <li>Data Structures</li>
                <li>Algorithm Design</li>
                <li>Design Patterns</li>
              </ul>
            </div>

            {/* Systems Courses */}
            <div className="course-category">
              <h4 className="category-title">
                <span className="shield-icon">🛡️</span>
                Systems & Security
              </h4>
              <ul className="course-list">
                <li>Software Testing</li>
                <li>System Security</li>
                <li>Network Protocols</li>
                <li>Distributed Systems</li>
              </ul>
            </div>
          </div>

          <p className="courses-note">
            <span className="highlight">Note:</span> These represent{" "}
            <span className="underline">academic academic coursework</span> I've
            completed. - I'm currently expanding my practical experience through
            personal projects and applied learning.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <SectionEnd
          backgroundImage={aboutImg}
          quote={
            "I build interfaces that marry aesthetics with functionality—because users deserve both."
          }
          name={"– MoSayed"}
        />
        <ParaSection para="I believe in progress ✔️ over perfection ❌ —because shipping beats stagnation." />
      </AnimatedSection>
    </section>
  );
}
