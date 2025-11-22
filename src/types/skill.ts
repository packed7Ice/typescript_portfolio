export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool";
  level: SkillLevel;
}
