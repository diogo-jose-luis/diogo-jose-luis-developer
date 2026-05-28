export type Project = {
  name: string;
  url: string;
  category: "web" | "enterprise";
  image: string;
};

export type SkillCategory = {
  title: string;
  items: { name: string; level: number }[];
};
