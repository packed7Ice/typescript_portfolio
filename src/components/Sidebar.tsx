export const Sidebar = () => {
  return (
    <aside className="hidden flex-col w-64 border-r md:flex border-slate-700 bg-slate-950/80">
      <div className="p-4 border-b border-slate-800">
        <h1 className="text-xl font-bold">YorikawaAise's Portfolio</h1>
        <p className="text-xs text-slate-400">TypeScript + React + TailwindCSS</p>
      </div>

      <nav className="p-4 space-y-2 text-sm">
        <a className="block hover:text-cyan-300">Overview</a>
        <a className="block hover:text-cyan-300">Projects</a>
        {/* <a className="block hover:text-cyan-300">Skills</a> */}
        {/* <a className="block hover:text-cyan-300">Timeline</a> */}
      </nav>
    </aside>
  );
};
