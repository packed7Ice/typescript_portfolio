import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: "typescript_portfolio",
        title: "TypeScript Portfolio",
        description: "このポートフォリオサイト。TypeScript + React + TailwindCSS を勉強するために作成。",
        techs: ["TypeScript", "React", "Tailwind"],
        githubUrl: "https://github.com/packed7Ice/typescript_portfolio",
        status: "wip",
    },
  {
    id: "sofuhana",
    title: "花札Web アプリ",
    description: "第76回 津田沼祭に展示した、ソフトメディア研究会モチーフの花札。",
    techs: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/packed7Ice/sofuhana",
    status: "wip",
  },
  {
    id: "minesweeper",
    title: "Minesweeper Web アプリ",
    description: "PHP＋JS で作ったゲーム。",
    techs: ["PHP", "JavaScript", "CSS",],
    githubUrl: "https://github.com/packed7Ice/minesweeper",
    status: "completed",
  },
  {
    id: "txttomd",
    title: "Txt to Markdown Converter",
    description: "テキストにマークダウン修飾が施せるWeb アプリ。",
    techs: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/packed7Ice/txttomd",
    status: "wip",
  },
];
