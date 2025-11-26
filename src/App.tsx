import { Sidebar } from "./components/Sidebar";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./data/projects";
import { SocialCard } from "./components/SocialCard";
import { socials } from "./data/socials";

function App() {
  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-100">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10">
        <section className="mb-8">
          <h2 className="mb-2 text-2xl font-bold">Overview</h2>
          <p className="text-sm text-slate-300">
            依川 愛瀬の作品をまとめたポートフォリオです。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">Socials</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {socials.map((s) => (
              <SocialCard key={s.id} {...s} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">Projects</h2>
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
