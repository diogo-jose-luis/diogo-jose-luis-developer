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
    name: "Kurla App",
    url: "https://play.google.com/store/apps/details?id=com.mycompany.kurlaapp",
    category: "mobile",
    image: "/images/projetos/~kurla-playstore-app.png",
  },
  {
    name: "ABA | Sistema",
    url: "https://aba-ids.vercel.app/",
    category: "enterprise",
    image: "/images/projetos/aba-system.png",
  },
  {
    name: "ABA | Site Institucional",
    url: "https://aba-site.vercel.app/",
    category: "web",
    image: "/images/projetos/aba-site.png",
  },
  {
    name: "IDS Man-Power",
    url: "https://ids-man-power.vercel.app/login",
    category: "enterprise",
    image: "/images/projetos/sistema-man-power-ids.png",
  },
  {
    name: "Uroflor Cursos",
    url: "https://uroflor-cursos.vercel.app/",
    category: "web",
    image: "/images/projetos/uroflor-cursos-site.png",
  },
  {
    name: "CCIE Octavio Neto | Site de Inscrição",
    url: "https://ccna-video-curso-octavio-neto.vercel.app/",
    category: "web",
    image: "/images/projetos/site-octavio-neto-ccna.png",
  },
  {
    name: "CCNA Video Curso",
    url: "https://ccna-video-curso-octavio-neto.vercel.app/",
    category: "web",
    image: "/images/projetos/ccie-video-curso-plataforma.png",
  },
  {
    name: "Painel Admin | Video Curso",
    url: "https://video-curso-painel-admin.vercel.app/login",
    category: "enterprise",
    image: "/images/projetos/painel-admin-plataforma-video-curso.png",
  },
  {
    name: "JP Energy",
    url: "https://jp-energy.vercel.app/",
    category: "web",
    image: "/images/projetos/jp-energy-site.png",
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend & UI",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "Tailwind", level: 93 },
      { name: "TypeScript", level: 92 },
      { name: "Python", level: 88 },
    ],
  },
  {
    title: "Backend & Dados",
    items: [
      { name: "Laravel", level: 92 },
      { name: "PHP", level: 93 },
      { name: "Python", level: 90 },
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
