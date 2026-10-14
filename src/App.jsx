import Background from "./components/Background";
import Header from "./components/Header";
import About from "./sections/About";
import Hero from "./sections/Hero";
import TechMarquee from "./sections/TechMarquee";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Background />
      <Header />

      <main id="top">
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <TechStack />
        <Journey />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App
