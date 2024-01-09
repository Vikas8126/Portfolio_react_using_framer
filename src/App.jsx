import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
// import Services from "./components/services/services";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      {/* <section id="About">
        <Services />
      </section> */}
      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>
      {/* <section id="Portfolio">Portfolio</section> */}
      {/* <section id="About">About</section> */}
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
