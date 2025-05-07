import { useState, useEffect } from "react";
import "./header.css";
import { Link, Events } from "react-scroll";

export default function Header({ isSmall }) {
  const [active, setActive] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Initialize scroll events
    Events.scrollEvent.register("begin", () => {
      // Optional: handle scroll start
    });

    Events.scrollEvent.register("end", (to) => {
      setActive(to);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // handle manual scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "portfolio", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (to) => {
    setActive(to);
  };

  const handleDropDown = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="my-nav">
      <div className="logo">
        <Link to="home" smooth={true} spy={true} offset={-80} duration={500}>
          &lt;
          <span>
            <span className="logo-mo">Mo</span>Sayed
          </span>
          <span className="slash">/</span>&gt;
        </Link>
      </div>
      {!isSmall ? (
        <>
          <ul className="nav-links">
            {["home", "about", "skills"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  onSetActive={handleSetActive}
                  className={`li ${active === item ? "active" : ""}`}
                  isDynamic={true}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
            <li className="me">
              <div className="up">
                <span>Eng.</span>Mohamed ElSayed
              </div>
              <div className="down">Computer Engineer</div>
            </li>
            {["portfolio", "contact"].map((item) => (
              <li key={item}>
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  onSetActive={handleSetActive}
                  className={`li ${active === item ? "active" : ""}`}
                  isDynamic={true}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
            <li>
              <a
                className="hire"
                href="mailto:moelsayed524@gmail.com?subject=Contact"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </>
      ) : (
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={handleDropDown}>
            <span></span>
            <span></span>
            <span></span>
            <div className={`dropdown-menu ${showMenu ? "active" : ""}`}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
