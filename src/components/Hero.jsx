import Spline from '@splinetool/react-spline';
import { ArrowDown, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 backdrop-blur">
          <Rocket className="text-cyan-400" size={18} />
          <span className="text-xs uppercase tracking-wider">Tech • Interactive • Modern</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Crafting playful, modern experiences
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
          I build fast, accessible interfaces with an eye for detail and a love for delightful 3D interactions.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 transition"
          >
            Explore my skills
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-5 py-3 transition"
          >
            Get in touch
          </a>
        </div>
        <div className="mt-16 flex justify-center">
          <a href="#skills" className="group inline-flex flex-col items-center text-white/60">
            <ArrowDown className="group-hover:translate-y-1 transition-transform" />
            <span className="text-xs">Scroll</span>
          </a>
        </div>
      </div>
    </section>
  );
}
