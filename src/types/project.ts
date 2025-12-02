export type TechTag =
  | "TypeScript"
  | "React"
  | "Tailwind"
  | "Java"
  | "PHP"
  | "ONNX"
  | "LLM"
  | "Python"
  | "JavaScript"
  | "HTML"
  | "C++"
  | "CMake"
  | "Vite"
  | "CSS";

export type DevelopmentFrequency = "high" | "medium" | "low" | "none";

export interface Project {
  id: string;
  title: string;
  description: string;
  techs: TechTag[];
  githubUrl?: string;
  demoUrl?: string;
  status: "wip" | "completed";
  frequency: DevelopmentFrequency;
}
