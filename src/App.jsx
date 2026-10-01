import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Rajesh Kumar Yadav. All Rights Reserved.
        </p>

        <p>Built with React.js</p>
      </footer>
    </>
  );
}

export default App;