"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Globe,
  Mail,
  ExternalLink,
  Briefcase,
  Smartphone,
  Building2,
  PenTool,
  Sparkles,
  Layers,
  Timer,
  TestTube2,
  Rocket,
  Phone,
  CheckCircle2,
  CircleAlert,
  UserCheck,
  GraduationCap,
  Target,
  Lightbulb,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { projects, skills } from "@/data/portfolio";
import { useTypingEffect } from "@/hooks/use-typing-effect";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function PortfolioPage() {
  const t = useTranslations();
  const [filter, setFilter] = useState<"all" | "web" | "enterprise">("all");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const typed = useTypingEffect([
    "Full-Stack Developer",
    "Problem-Solver",
    "Tech Enthusiast",
  ]);
  const filtered = useMemo(
    () => projects.filter((project) => filter === "all" || project.category === filter),
    [filter]
  );

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setStatusMessage("");
    setSending(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let data: { error?: string } = {};
      try {
        data = (await response.json()) as { error?: string };
      } catch {
        // Some environments can return an empty/non-JSON 200 response even after a successful send.
        data = {};
      }

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(data.error ?? "Erro ao enviar mensagem.");
      } else {
        setStatus("success");
        setStatusMessage("Mensagem enviada com sucesso.");
        event.currentTarget.reset();
      }
    } catch {
      setStatus("error");
      setStatusMessage("Falha de rede. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(139,92,246,0.14),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <Image src="/images/djl-dev.png" alt="DJL Dev logo" width={30} height={30} />
            <span className="text-sm font-semibold tracking-wider">DI0GO LUIS</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about">{t("nav.about")}</a>
            <a href="#skills">{t("nav.skills")}</a>
            <a href="#experience">{t("nav.experience")}</a>
            <a href="#projects">{t("nav.projects")}</a>
            <a href="#contact">{t("nav.contact")}</a>
          </nav>
          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container space-y-28 py-16">
        <section
          id="hero"
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-slate-900/50 via-background to-violet-950/40 p-8 shadow-[0_0_80px_rgba(56,189,248,0.15)] lg:p-12"
        >
          <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-6 h-56 w-56 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Badge className="mb-4">{t("hero.status")}</Badge>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Diogo Luis</h1>
              <p className="mt-3 text-xl text-primary">
                {typed}
                <span className="animate-pulse">|</span>
              </p>
              <p className="mt-4 max-w-xl text-muted-foreground">{t("hero.subtitle")}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("hero.ctaProjects")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("hero.ctaContact")}
                </Button>
                <a href="#" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="lg">
                    <PenTool className="mr-2 h-4 w-4" />
                    Figma UI/UX
                  </Button>
                </a>
                <a href="https://github.com/diogo-jose-luis" target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="lg">
                    <Globe className="mr-2 h-4 w-4" />
                    {t("hero.ctaGithub")}
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Glassmorphism", "Motion Design", "Enterprise Grade", "UX Focused"].map(
                  (item) => (
                    <Badge key={item} className="bg-primary/10">
                      {item}
                    </Badge>
                  )
                )}
              </div>
            </motion.div>
            <Card className="relative overflow-hidden p-3">
              <div className="absolute right-3 top-3 rounded-full border border-border/50 bg-black/50 p-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
              </div>
              <div className="mb-3 overflow-hidden rounded-2xl border border-border/40 bg-muted/20">
                <Image
                  src="/images/diogo-hero.png"
                  alt="Diogo Luis portrait"
                  width={520}
                  height={520}
                  className="h-[330px] w-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["Next.js", "Laravel", "Python", "Flutter", "Enterprise Systems"].map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section id="about" className="space-y-6">
          <h2 className="text-3xl font-semibold">{t("sections.about")}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-6 md:col-span-2">
              <p className="text-lg font-medium">Diogo Luis</p>
              <p className="mt-3 text-muted-foreground">
                Full-Stack Developer focado em produtos premium com UX elegante, performance alta
                e arquitetura escalável. Bacharel em Ciências da Computação (UAN) e Tecnólogo em
                Análise e Desenvolvimento de Sistemas (AIEC).
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border/50 p-4">
                  <p className="mb-2 flex items-center gap-2 font-medium">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    Formação
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Base técnica sólida em software, dados e engenharia.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 p-4">
                  <p className="mb-2 flex items-center gap-2 font-medium">
                    <Target className="h-4 w-4 text-primary" />
                    Missão
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Entregar soluções robustas que aceleram negócios.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <p className="mb-3 font-medium">DNA Profissional</p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-primary" />
                  Autoridade técnica
                </p>
                <p className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  Inovação prática
                </p>
                <p className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-primary" />
                  Execução rápida
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <h2 className="text-3xl font-semibold">{t("sections.skills")}</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((category) => (
              <Card key={category.title} className="p-5">
                <h3 className="mb-4 font-medium">{category.title}</h3>
                <div className="space-y-3">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-sky-500 to-violet-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-6">
          <h2 className="text-3xl font-semibold">{t("sections.experience")}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-5">
              <Briefcase className="mb-3 h-5 w-5" />
              +15 anos de experiência
            </Card>
            <Card className="p-5">
              <Building2 className="mb-3 h-5 w-5" />
              SISGEMA em uso desde 2016
            </Card>
            <Card className="p-5">
              <Smartphone className="mb-3 h-5 w-5" />
              Apps e sistemas enterprise internacionais
            </Card>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="text-3xl font-semibold">{t("sections.projects")}</h2>
          <div className="flex gap-2">
            {["all", "web", "enterprise"].map((key) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                onClick={() => setFilter(key as typeof filter)}
              >
                {key}
              </Button>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((project) => (
              <Card key={project.name} className="group p-5 transition hover:-translate-y-1">
                <div className="mb-3 overflow-hidden rounded-xl border border-border/40">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    width={900}
                    height={500}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3>{project.name}</h3>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card className="p-5">
            <h3>{t("sections.mobile")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              KURLA, Talent Application For PZO e PIKA em desenvolvimento.
            </p>
          </Card>
          <Card className="p-5">
            <h3>{t("sections.systems")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              SISGEMA, ABA, HOPE e ROPEWAY-CREW para operações empresariais.
            </p>
          </Card>
          <Card className="p-5">
            <h3>{t("sections.services")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Web, mobile, APIs, automação, dashboards, consultoria tecnológica e UI/UX com Figma.
            </p>
          </Card>
        </section>

        <section className="space-y-5">
          <h2 className="text-3xl font-semibold">{t("sections.process")}</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { icon: Layers, title: "Discovery" },
              { icon: Timer, title: "Arquitetura" },
              { icon: TestTube2, title: "Entrega Iterativa" },
              { icon: Rocket, title: "Otimização Contínua" },
            ].map((step, index) => (
              <Card key={step.title} className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <step.icon className="h-5 w-5 text-primary" />
                  <p className="text-xs text-primary">0{index + 1}</p>
                </div>
                <h3 className="font-medium">{step.title}</h3>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-5">
          {[
            "+15 anos",
            "+40 projetos",
            "+10 tecnologias",
            "+4 mil utilizadores",
            "Sistemas empresariais",
          ].map(
            (stat) => (
              <Card key={stat} className="p-5 text-center text-lg font-semibold">
                {stat}
              </Card>
            )
          )}
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">{t("sections.testimonials")}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Excelente capacidade técnica e comunicação.",
              "Entrega consistente com padrão enterprise.",
              "Performance e UX sempre acima da média.",
            ].map((quote) => (
              <Card key={quote} className="p-5 text-sm text-muted-foreground">
                {quote}
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/20 to-violet-500/20 p-8 text-center">
          <h2 className="text-3xl font-semibold">{t("sections.cta")}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Vamos transformar a tua ideia num produto digital premium, escalável e pronto para
            crescimento internacional.
          </p>
          <Button
            className="mt-6"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hero.ctaContact")}
          </Button>
        </section>

        <section id="contact" className="space-y-6">
          <h2 className="text-3xl font-semibold">{t("sections.contact")}</h2>
          <Card className="p-6">
            <form className="grid gap-4 md:grid-cols-2" onSubmit={handleContactSubmit}>
              <input
                name="name"
                required
                className="rounded-lg border border-border bg-background px-3 py-2"
                placeholder="Nome"
              />
              <input
                name="email"
                type="email"
                required
                className="rounded-lg border border-border bg-background px-3 py-2"
                placeholder="Email"
              />
              <input
                name="phone"
                required
                className="rounded-lg border border-border bg-background px-3 py-2"
                placeholder="Telefone"
              />
              <input
                name="subject"
                required
                className="rounded-lg border border-border bg-background px-3 py-2"
                placeholder="Assunto"
              />
              <textarea
                name="message"
                required
                className="min-h-32 rounded-lg border border-border bg-background px-3 py-2 md:col-span-2"
                placeholder="Mensagem"
              />
              <Button type="submit" className="md:col-span-2" disabled={sending}>
                {sending ? "Enviando..." : "Enviar mensagem"}
              </Button>
              {status !== "idle" && (
                <div className="flex items-center gap-2 text-sm md:col-span-2">
                  {status === "success" ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <CircleAlert className="h-4 w-4 text-red-500" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </Card>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="https://github.com/diogo-jose-luis"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Globe className="h-4 w-4" /> GitHub
            </a>
            <a href="mailto:diogo.luis.job@hotmail.com" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://wa.me/244936551407" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> Telefone
            </a>
            <a href="https://www.linkedin.com/in/diogojoseluis/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://wa.me/244936551407" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/images/djl-dev.png" alt="DJL Dev logo" width={26} height={26} />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Diogo Luis. All rights reserved.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, TypeScript, Tailwind, Framer Motion and shadcn/ui.
          </p>
        </div>
      </footer>
    </div>
  );
}
