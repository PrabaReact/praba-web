import "./styles.css";
import Header from "./Header";
import Halfintro from "./Halfintro";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import NavBarOn from "./NavBarOn";
import Skill from "./Skill";
import FooterOn from "./FooterOn";

export default function App() {
  return (
    <div className="App">
      <NavBarOn />
      <Header />
      <Halfintro />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Contact />
      <FooterOn />
      
    </div>
  );
}
