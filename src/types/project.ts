export type TechTag =
  | "TypeScript"
  | "React"
  | "Tailwind"
  | "Java"
  | "PHP"
  | "ONNX"
  | "LLM"
  | "Python";

export interface Project {
  id: string;
  title: string;
  description: string;
  techs: TechTag[];
  githubUrl?: string;
  demoUrl?: string;
  status: "wip" | "completed" | "idea";
}
