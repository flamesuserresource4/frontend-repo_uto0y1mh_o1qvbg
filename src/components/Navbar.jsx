import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLink = ({ href, label, onClick }) => (
    <a
      href={href}
      onClick={() => {
        setOpen(false);
        onClick && onClick();
      }}
      className="px-4 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition"
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition backdrop-blur-md ${
      scrolled ? 'bg-black/30 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">
          <span className="text-cyan-400">/</span>portfolio
        </a>
        <div className="hidden md:flex items-center gap-2">
          <NavLink href="#home" label="Home" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#contact" label="Contact" />
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md text-white/90 hover:bg-white/10"
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <NavLink href="#home" label="Home" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#contact" label="Contact" />
        </div>
      )}
    </header>
  );
}
