import { Sidebar } from "./components/Sidebar";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Overview</h2>
          <p className="text-sm text-slate-300">
            ゲーム開発 / 画像処理 / LLM / Webアプリ を扱うポートフォリオダッシュボードです。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
