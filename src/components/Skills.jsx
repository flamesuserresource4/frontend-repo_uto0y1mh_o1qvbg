import { Code, Rocket, Star, Sparkles } from 'lucide-react';

const skills = [
  { name: 'JavaScript/TypeScript', level: 95, icon: <Code size={18} /> },
  { name: 'React / Next.js', level: 92, icon: <Star size={18} /> },
  { name: '3D & Motion (Spline/Framer)', level: 88, icon: <Sparkles size={18} /> },
  { name: 'APIs & FastAPI', level: 85, icon: <Rocket size={18} /> },
];

function SkillBar({ name, level, icon }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-white/90">
          <span className="text-cyan-400">{icon}</span>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-white/60 text-sm">{level}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_50%)] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Skills that power my work
        </h2>
        <p className="mt-3 text-white/60 text-center max-w-2xl mx-auto">
          A balanced mix of front‑end craft, interaction design, and backend pragmatism.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} icon={s.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
