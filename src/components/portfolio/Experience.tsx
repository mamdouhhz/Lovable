import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./About";

const experiences = [
  {
    role: "DevOps Engineer Intern",
    company: "iVolve Technologies LTD",
    period: "Jul 2026",
    points: [
      "Containerized Java and Python applications with multi-stage Dockerfiles — image size optimization, environment variable management, volumes/bind mounts, and custom networks.",
      "Deployed workloads on Kubernetes using Deployments, StatefulSets, DaemonSets, PV/PVCs, ConfigMaps/Secrets, init containers, resource quotas, taints/tolerations, NetworkPolicies, and RBAC (Roles, RoleBindings, ServiceAccounts).",
      "Implemented CI/CD pipelines in Jenkins (declarative pipelines, shared libraries, distributed agents) automating testing, image builds, and Kubernetes deployments.",
      "Extended delivery with GitOps via ArgoCD and automated Linux/infrastructure configuration using Ansible (playbooks, roles, Vault-encrypted secrets, dynamic AWS inventory).",
    ],
  },
  {
    role: "Cloud DevOps Engineer",
    company: "National Telecommunication Institute — HireReady Scholarship",
    period: "Apr 2026 – Jun 2026",
    points: [
      "Completed an intensive DevOps program covering Linux Administration, OpenShift, Jenkins, GitHub Actions CI/CD, Terraform, Docker, Podman, and AWS.",
      "Built and deployed serverless applications, CI/CD pipelines, and infrastructure-as-code solutions on AWS.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "The Arab Academy for Science & Technology — AASTMT",
    period: "Sep 2025 – Feb 2026",
    points: [
      "Taught Introduction to Computers (CS111) and C programming.",
      "Coordinated lab sessions, prepared materials and exams, and graded quizzes, assignments, and reports.",
    ],
  },
  {
    role: "IT Specialist",
    company: "Military Service — Egyptian Air Forces",
    period: "Jan 2025 – Feb 2026",
    points: [
      "Diagnosed and resolved network infrastructure issues, minimizing downtime.",
      "Deployed and configured an internal system on a Linux server with automated startup.",
      "Developed and deployed the official website for the medical center.",
    ],
  },
  {
    role: "Java Software Engineer Intern",
    company: "Orange Innovation Egypt",
    period: "Aug 2024 – Oct 2024",
    points: ["Contributed to Java-based development tasks."],
  },
  {
    role: "Backend Engineer Intern",
    company: "IOTBLUE",
    period: "Aug 2023 – Oct 2023",
    points: [
      "Developed an attendance system using Golang, Gorm, and Gin with PostgreSQL; tested APIs using Postman.",
      "Built dashboards for a fire alarm monitoring system, consuming real-time sensor data over MQTT from an existing broker.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <SectionHeader index="03" title="experience" />

        <div className="mt-12 relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative pl-14 sm:pl-20"
              >
                <div className="absolute left-0 sm:left-2 top-1 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-card border border-primary/40 flex items-center justify-center shadow-glow">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>

                <div className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/40 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h3 className="font-display font-semibold text-xl text-foreground">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-3">
                    {exp.company}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.points.map((p, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex gap-2 items-baseline"
                      >
                        <span className="text-primary leading-none">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
