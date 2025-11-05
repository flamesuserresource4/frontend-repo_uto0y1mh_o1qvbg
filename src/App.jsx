import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
