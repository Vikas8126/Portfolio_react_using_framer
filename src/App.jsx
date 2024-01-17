import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

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
        <Portfolio />
      </section>
      {/* <section id="Portfolio">Portfolio</section> */}
      {/* <section id="About">About</section> */}
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
