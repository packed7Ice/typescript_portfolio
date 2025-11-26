import type { SocialLink } from "../types/social";

export const SocialCard = ({ platform, url, username, description }: SocialLink) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-xl border transition border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-cyan-400 group"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold transition-colors text-slate-100 group-hover:text-cyan-300">
          {platform}
        </h3>
        <span className="text-xs text-slate-500">↗</span>
      </div>
      {username && <p className="mb-1 text-sm text-cyan-200">{username}</p>}
      {description && <p className="text-xs text-slate-400">{description}</p>}
    </a>
  );
};
