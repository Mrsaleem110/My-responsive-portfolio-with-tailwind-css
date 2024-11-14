
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Project from './components/project';
import Skills from './components/skills';
import Hero from './components/hero';

const Home= () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;


