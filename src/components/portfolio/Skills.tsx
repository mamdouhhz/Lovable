import { motion } from "framer-motion";
import {
  Cloud,
  Container,
  Code2,
  Database,
  GitBranch,
  Activity,
  Terminal,
  Languages,
} from "lucide-react";
import { SectionHeader } from "./About";

const groups = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure as Code",
    items: [
      "AWS",
      "Terraform",
      "Ansible",
      "Playbooks & Roles",
      "Ansible Vault",
      "Dynamic AWS Inventory",
    ],
  },
  {
    icon: Container,
    title: "Containers & Orchestration",
    items: ["Docker", "Podman", "Kubernetes", "Helm", "OpenShift"],
  },
  {
    icon: GitBranch,
    title: "CI/CD & Version Control",
    items: [
      "Jenkins",
      "Declarative Pipelines",
      "Shared Libraries",
      "GitHub Actions",
      "ArgoCD / GitOps",
      "Git",
      "GitHub",
    ],
  },
  {
    icon: Activity,
    title: "Monitoring, Security & Quality",
    items: ["Prometheus", "Grafana", "Loki", "SonarQube", "Trivy"],
  },
  {
    icon: Terminal,
    title: "OS, Scripting & Networking",
    items: [
      "Linux Administration",
      "Bash Scripting",
      "nginx",
      "CCNA Fundamentals",
    ],
  },
  {
    icon: Code2,
    title: "Programming",
    items: ["Go (Golang)", "Java", "Python", "C++", "RESTful APIs"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL", "Gorm"],
  },
  {
    icon: Languages,
    title: "Languages",
    items: ["Arabic (native)", "English (fluent)", "German (A2)"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container">
        <SectionHeader index="02" title="skills" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.35, delay: Math.min(i, 3) * 0.04, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 hover:shadow-glow transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-secondary border border-border text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
