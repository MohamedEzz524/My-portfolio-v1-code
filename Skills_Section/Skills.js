import { useState, useEffect, useRef, useCallback } from "react";
import "./skills.css";
import {
  MainTitle,
  ParaSection,
  faFlask,
  faLayerGroup,
  faCodeMerge,
  FontAwesomeIcon,
  AnimatedSection,
} from "../Imports/ImportCenter";
import Object from "./Object/Object";
import Bar from "./Bar/Bar";
//Skills Data
import { items } from "./Skills-Data";

const nextToLearn = [
  { name: "Jest", icon: faFlask, color: "#99425b" },
  { name: "Redux", icon: faCodeMerge, color: "#764abc" },
  { name: "Next.js", icon: faLayerGroup, color: "#000" },
];

const nextToMaster = [
  "Performance Optimization",
  "WebAssembly",
  "Mastering Js",
  "3D objects & Canvas",
];

export default function Skills() {
  const [positions, setPositions] = useState([]);
  const [elementWidth, setElementWidth] = useState(0);
  const moveSpeed = useRef(1); // Animation speed (pixels per frame)
  const containerRef = useRef(null);
  const animationRef = useRef(null); // Stores animation frame ID
  const lastTimeRef = useRef(0); // Tracks last animation timestamp
  const containerWidthRef = useRef(0); // Caches container width

  //set color theme
  const [skillsItems, setSkillsItems] = useState([...items]);
  const [barContrast, setBarContrast] = useState("#ccc");
  const [barContentBg, setBarContentBg] = useState("rgba(0, 0, 0, 0.4)");

  const calculateElementWidth = useCallback(() => {
    return containerWidthRef.current
      ? containerWidthRef.current / 9
      : window.innerWidth / 9;
  }, []);

  const initializePositions = useCallback(() => {
    const width = calculateElementWidth();
    return items.map((_, index) => index * width);
  }, [calculateElementWidth]);

  // Animation frame callback
  const animate = useCallback(
    (timestamp) => {
      // Time management
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;

      // ~60fps update throttle
      if (deltaTime >= 16) {
        setPositions((prevPositions) => {
          return prevPositions.map((pos) => {
            // Wrap-around logic
            if (pos >= containerWidthRef.current) {
              const minPos = Math.min(...prevPositions);
              return minPos - elementWidth;
            }
            // Normal movement
            return pos + moveSpeed.current;
          });
        });
        lastTimeRef.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    },
    [elementWidth]
  );

  // Debounce function implementation
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout
      timeoutId = setTimeout(() => {
        func(...args); // Call the function after the delay
      }, delay);
    };
  };

  const handleLightTheme = (color) => {
    if (color !== "") {
      setBarContrast("#2c2c2c");
      setBarContentBg("rgba(255, 255, 255, 0.08)");
      const newItems = items.map((item) => {
        let softColor;
        switch (item.name) {
          case "HTML":
            softColor = "#D55555";
            break;
          case "CSS":
            softColor = "#A6B4E0";
            break;
          case "JS":
            softColor = "#B3AF5C";
            break;
          case "REACT":
            softColor = "#A6E1ED";
            break;
          case "BS":
            softColor = "#C5A8F5";
            break;
          case "TS":
            softColor = "#9BBAD0";
            break;
          case "SASS":
            softColor = "#E9C5D3";
            break;
          case "GitHub":
            softColor = "#ccc";
            break;
          case "Pug":
            softColor = "#A49088";
            break;
          default:
            softColor = item.color;
        }
        return {
          ...item,
          color: softColor,
          percentageColor: softColor,
          linearGrad: `linear-gradient(145deg, ${softColor}, #f0f0f0)`,
          percentageBg: color,
          perText: "#2c2c2c",
        };
      });
      setSkillsItems(newItems);
    } else {
      setBarContrast("#ccc");
      setBarContentBg("rgba(0, 0, 0, 0.4)");
      return setSkillsItems([...items]);
    }
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      containerWidthRef.current =
        containerRef.current?.offsetWidth || window.innerWidth;
      const newWidth = calculateElementWidth();
      setElementWidth(newWidth);
      setPositions(initializePositions());
    }, 300);

    //initial setup
    containerWidthRef.current =
      containerRef.current?.offsetWidth || window.innerWidth;
    const width = calculateElementWidth();
    setElementWidth(width);
    setPositions(initializePositions());

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [calculateElementWidth, initializePositions]);

  // Animation loop
  useEffect(() => {
    if (positions.length > 0 && elementWidth > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate, positions.length, elementWidth]);

  return (
    <section className="skills section-app" id="skills">
      <MainTitle title="SKILLS" />
      <ParaSection para={"Let’s build something legendary🧠💣"} />
      <div className="skills-container">
        <div className="objects" ref={containerRef}>
          {/* Objects */}
          {items.map((item, index) => (
            <Object
              key={item.id}
              src={item.src}
              name={item.name}
              color={item.color}
              style={{
                left: `${positions[index]}px`,
                width: `${elementWidth * 0.8}px`, // 80% of calculated width
              }}
            />
          ))}
        </div>

        <div className="skills-bars">
          <p className="bars-subtitle">
            ⚡Every bar represents a skill leveled up through trials and
            terminal errors.
          </p>
          <AnimatedSection delay={0.1}>
            <div className="bars">
              {/* Theme Buttons */}
              <div className="theme-btns-container">
                <div className="theme-btns">
                  <button
                    className="theme-btn high"
                    type="button"
                    onClick={() => handleLightTheme("")}
                  >
                    🔥 High Contrast
                  </button>
                  <button
                    className="theme-btn low"
                    type="button"
                    onClick={() => handleLightTheme("#fff")}
                  >
                    🌙 Low Contrast
                  </button>
                </div>
              </div>
              {/* Bars */}
              <div className="bars-container">
                {skillsItems.map((item) => {
                  return (
                    <Bar
                      key={item.id}
                      color={item.color}
                      name={item.name}
                      barIcon={item.icon}
                      percentage={item.percentage}
                      linearGrad={item.linearGrad}
                      percentageColor={item.percentageColor}
                      percentageBg={item.percentageBg}
                      perText={item.perText}
                      barContrast={barContrast}
                      barBg={barContentBg}
                    />
                  );
                })}
              </div>

              {/* Next To Learn */}
              <AnimatedSection delay={0.2}>
                <div className="learning-container">
                  <p className="learning-philosophy">
                    I follow a <strong>deliberate learning path</strong> -
                    mastering each technology through{" "}
                    <strong>real projects</strong> before moving to the next.
                    Currently focusing on <strong>testing frameworks</strong> to
                    build more robust applications.
                  </p>

                  <div className="next-to-learn">
                    <h3>
                      Next to Learn <span className="sparkle">✨</span>
                    </h3>
                    <p>Coming Soon to My Toolkit 🚀</p>

                    <div className="coming-soon-grid">
                      {nextToLearn.map((skill, index) => (
                        <div
                          key={index}
                          className="coming-soon-skill"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <span
                            className="skill-icon"
                            style={{ "--color": skill.color }}
                          >
                            <p>
                              <FontAwesomeIcon icon={skill.icon} />
                            </p>
                            <span>new</span>
                          </span>
                          {skill.name}
                        </div>
                      ))}
                    </div>
                    <div className="next-to-master">
                      <h3>
                        Continuous Challenges to Master
                        <span className="sparkle">💎</span>
                      </h3>
                      <p>Next to Expanding my Expertise</p>
                      <div className="coming-soon-grid">
                        {nextToMaster.map((skill, index) => (
                          <div
                            key={index}
                            className="coming-soon-skill"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <span className="skill-icon">
                              <p className="loading">leveling...</p>
                              <span className="hot">UP</span>
                            </span>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <p className="skills-footer">
                <span className="rounding">
                  <span className="rounded"></span>
                  <span className="hidden-text">
                    Thank you for visiting, Enjoy ❤️💌🌹
                  </span>
                  <span className="hold-me">Hold Me</span>
                </span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
