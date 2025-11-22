export const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-slate-700 bg-slate-950/80">
      <div className="p-4 border-b border-slate-800">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <p className="text-xs text-slate-400">Dashboard Style</p>
      </div>

      <nav className="p-4 text-sm space-y-2">
        <a className="block hover:text-cyan-300">Overview</a>
        <a className="block hover:text-cyan-300">Projects</a>
        <a className="block hover:text-cyan-300">Skills</a>
        <a className="block hover:text-cyan-300">Timeline</a>
      </nav>
    </aside>
  );
};
