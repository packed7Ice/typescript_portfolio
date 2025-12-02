import type { Project } from "../types/project";

export const ProjectCard = ({
  title,
  description,
  techs,
  githubUrl,
  status,
  frequency,
}: Project) => {
  const statusColor =
    status === "completed"
      ? "bg-emerald-900/70 text-emerald-200"
      : "bg-yellow-900/70 text-yellow-200";
  const statusText = status === "completed" ? "Completed" : "WIP";

  const frequencyColor =
    frequency === "high"
      ? "bg-rose-900/70 text-rose-200"
      : frequency === "medium"
      ? "bg-orange-900/70 text-orange-200"
      : "bg-slate-700/70 text-slate-300";

  const frequencyText =
    frequency === "high"
      ? "高頻度"
      : frequency === "medium"
      ? "中頻度"
      : "低頻度";

  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-800/70 p-4 hover:border-cyan-400 transition flex flex-col">
      <div className="flex gap-2 mb-3">
        <span
          className={`text-[10px] px-2 py-0.5 rounded-full ${statusColor} border border-white/5`}
        >
          {statusText}
        </span>
        {status !== "completed" && (
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full ${frequencyColor} border border-white/5`}
          >
            {frequencyText}
          </span>
        )}
      </div>

      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-xs text-slate-300 mb-2 flex-grow">{description}</p>

      <div className="flex flex-wrap gap-1 mb-3 mt-auto">
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
          className="text-xs text-cyan-300 underline mt-2 inline-block"
        >
          GitHub →
        </a>
      )}
    </article>
  );
};
