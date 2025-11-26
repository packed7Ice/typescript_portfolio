import type { SocialLink } from "../types/social";

export const SocialCard = ({ platform, url, username, description }: SocialLink) => {
  const content = (
    <>
      <div className="flex justify-between items-center mb-2">
        <h3 className={`font-semibold transition-colors text-slate-100 ${url ? "group-hover:text-cyan-300" : ""}`}>
          {platform}
        </h3>
        {url && <span className="text-xs text-slate-500">↗</span>}
      </div>
      {username && <p className="mb-1 text-sm text-cyan-200">{username}</p>}
      {description && <p className="text-xs text-slate-400">{description}</p>}
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 rounded-xl border transition border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-cyan-400 group"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="block p-4 rounded-xl border border-slate-700 bg-slate-800/50">
      {content}
    </div>
  );
};
