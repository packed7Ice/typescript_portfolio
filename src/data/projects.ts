import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "hanahuda-ai",
    title: "花札 AI 対戦 Web アプリ",
    description: "ONNX を使ってブラウザで動作する花札 AI の研究。",
    techs: ["TypeScript", "React", "Tailwind", "ONNX"],
    githubUrl: "https://github.com/packed7Ice/hanahuda",
    status: "wip",
  },
  {
    id: "minesweeper",
    title: "Minesweeper Web アプリ",
    description: "PHP＋JS で作ったゲームを React 化する計画。",
    techs: ["TypeScript", "React", "Tailwind"],
    status: "idea",
  }
];
