import { Project, SkillCategory } from "@/types/content";

export const projects: Project[] = [
  {
    name: "Yoshuttle",
    url: "https://www.yoshuttle.ao",
    category: "web",
    image: "/images/projetos/youShuttle.png",
  },
  {
    name: "Equalizador",
    url: "https://www.equalizador.ao",
    category: "web",
    image: "/images/projetos/equalizador.png",
  },
  {
    name: "IDS Soluções",
    url: "https://www.idsolucoes.ao",
    category: "web",
    image: "/images/projetos/ids.png",
  },
  {
    name: "GS Advogados",
    url: "https://gsadvogados.ao/pt/",
    category: "web",
    image: "/images/projetos/gsadvogados.png",
  },
  {
    name: "Talent PZO",
    url: "https://talent.altrad-prezioso.ao",
    category: "web",
    image: "/images/projetos/talent.png",
  },
  {
    name: "Kurlaa",
    url: "https://kurlaa.com",
    category: "web",
    image: "/images/projetos/kurla.png",
  },
  {
    name: "ABA",
    url: "https://aba-site.vercel.app",
    category: "enterprise",
    image: "/images/projetos/aba-site.png",
  },
  {
    name: "ALV Jamba",
    url: "https://www.alv-jamba.com",
    category: "web",
    image: "/images/projetos/alvjamba.png",
  },
  {
    name: "CCNA Master",
    url: "https://ccna-master-classe-equalizador.vercel.app",
    category: "web",
    image: "/images/projetos/ccna.png",
  },
  {
    name: "HRL",
    url: "https://hrl.ao/",
    category: "web",
    image: "/images/projetos/hrl.png",
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 94 },
      { name: "Tailwind", level: 92 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", level: 92 },
      { name: "PHP", level: 93 },
      { name: "Python", level: 89 },
      { name: "Firebase", level: 88 },
      { name: "MySQL", level: 91 },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Flutter", level: 87 },
      { name: "FlutterFlow", level: 84 },
      { name: "Android", level: 82 },
    ],
  },
  {
    title: "Desktop & Enterprise",
    items: [
      { name: "Java Desktop", level: 85 },
      { name: "VBA", level: 88 },
      { name: "Excel Dev", level: 90 },
      { name: "Power BI", level: 86 },
      { name: "C++", level: 80 },
    ],
  },
];
