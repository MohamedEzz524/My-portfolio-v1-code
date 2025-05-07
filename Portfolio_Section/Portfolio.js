import "./portfolio.css";
import {
  MainTitle,
  ParaSection,
  AnimatedSection,
} from "../Imports/ImportCenter";
import { temps, reactApps } from "./Portfolio-Data";
import Temp from "./Port-Template/Temp";
import AppTemp from "./App-Temp/AppTemp";

export default function Portfolio() {
  return (
    <section className="portfolio section-app" id="portfolio">
      <MainTitle title="Portfolio" />
      <ParaSection para="My goal Is to turning creative ideas into responsive and functional web designs." />
      <section className="work">
        <p className="work-title">My Work</p>
        {/* Projects */}
        <div className="projects-container">
          {temps.map((temp, index) => (
            <Temp
              key={index}
              href={temp.href}
              hrefGit={temp.hrefGit}
              alt={temp.name}
              large={temp.large}
              small={temp.small}
              type={temp.type}
              colors={temp.colors}
              description={temp.description}
              designSkills={temp.designSkills}
            />
          ))}
        </div>
        {/* React Apps */}
        <div className="react-work">
          <p className="react-title">
            <span className="react-animation">React</span> Apps
          </p>
          <AnimatedSection delay={0.1}>
            <div className="react-apps-grid">
              {reactApps.map((app, i) => (
                <AppTemp
                  key={app.id}
                  title={app.title}
                  href={app.href}
                  images={app.images}
                  desc={app.description}
                  method={app.method}
                  link={app.link}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
        <div className="note-section">
          <div className="note-portfolio">
            <span className="highlight">Note:</span>
            <p>
              There are many more apps uploaded on GitHub, including
              problem-solving solutions and competitive programming work.
              Explore them through these links.
            </p>
          </div>
          <div className="more-links">
            <a
              href="https://github.com/MohamedEzz524/React-apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>➔</span> More react work{" "}
            </a>
            <a
              href="https://github.com/MohamedEzz524/Css-animation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>➔</span> Css Animation
            </a>
            <a
              href="https://github.com/MohamedEzz524/Problem-solving"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>➔</span> Problem solving
            </a>
          </div>
        </div>
      </section>
      {/* Outro */}
      <ParaSection para="Currently open to opportunities to apply my skills in real-world projects!" />
    </section>
  );
}
