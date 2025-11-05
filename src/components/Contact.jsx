import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.18),transparent_50%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something</h2>
        <p className="mt-3 text-white/70">
          Open to freelance, collaborations, and full‑time roles. Drop a line and say hello.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 transition"
          >
            <Mail size={18} /> Email me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-5 py-3 transition"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-5 py-3 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
        <p className="mt-12 text-xs text-white/40">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
