import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;