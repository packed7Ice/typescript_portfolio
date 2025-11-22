export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  category: "project" | "study" | "update";
}
