import type { Project } from "../types/project";

export const ProjectCard = ({ title, description, techs, githubUrl }: Project) => {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4 hover:border-cyan-400 transition">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-xs text-slate-300 mb-2">{description}</p>

      <div className="flex flex-wrap gap-1 mb-2">
        {techs.map((t) => (
          <span
            key={t}
            className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-900/70 text-cyan-200"
          >
            {t}
          </span>
        ))}
      </div>

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          className="text-xs text-cyan-300 underline"
        >
          GitHub →
        </a>
      )}
    </article>
  );
};
