import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;