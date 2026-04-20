import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { SectionHeader } from "./About";

const projects = [
  {
    title: "Dentify-X",
    subtitle: "Graduation Project · Grade A+",
    description:
      "AI model for X-ray abnormality detection using YOLOv8 — achieved 96% accuracy on real-world samples. Full pipeline: preprocessing, augmentation, labeling, training, and validation, served by a Go backend.",
    tags: ["YOLOv8", "Go", "Gorm", "PostgreSQL", "Postman", "JUnit"],
    featured: true,
  },
  {
    title: "Nosor Medical Center",
    subtitle: "Production Website",
    description:
      "Designed, developed, and deployed the official website for the Egyptian Air Forces medical center. Live in production.",
    tags: ["Linux", "Bash", "SSH", "Web"],
    link: "https://nosor-medicalcenter.org/",
    featured: true,
  },
  {
    title: "Attendance System",
    subtitle: "IOTBLUE Internship",
    description:
      "REST API for an employee attendance system built with Go, Gin, Gorm, and PostgreSQL. Fully tested with Postman.",
    tags: ["Go", "Gin", "Gorm", "PostgreSQL"],
  },
  {
    title: "Fire Alarm Dashboards",
    subtitle: "IOTBLUE Internship",
    description:
      "Real-time dashboards for an industrial fire alarm system, surfacing sensor health and alert states for operators.",
    tags: ["Backend", "Dashboards", "IoT"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container">
        <SectionHeader index="04" title="projects" />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.4, delay: Math.min(i, 3) * 0.05, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className="group relative p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 md:hover:-translate-y-1 hover:shadow-elevated transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Folder className="h-6 w-6" />
                </div>
                <div className="flex gap-2">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="External link"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="font-mono text-xs text-primary mt-1">{p.subtitle}</p>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-1 rounded text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
