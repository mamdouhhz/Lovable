import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./About";

const experiences = [
  {
    role: "DevOps Trainee — Hire Ready Initiative",
    company: "National Telecommunication Institute (NTI)",
    period: "Apr 2026 – Jul 2026",
    points: [
      "Intensive 288+ hour DevOps program covering Linux, CI/CD, IaC, containers, and cloud.",
      "Hands-on with Red Hat Enterprise Linux, Ansible, Docker/Podman, Kubernetes/OpenShift.",
      "Designed cloud solutions on AWS — serverless, CI/CD pipelines, IaC with Terraform & CloudFormation.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "AASTMT — Arab Academy",
    period: "Sep 2025 – Feb 2026",
    points: [
      "Taught Introduction to Computers (CS111) and C programming.",
      "Coordinated lab sessions, prepared materials, graded quizzes and exams.",
    ],
  },
  {
    role: "IT Specialist (Military Service)",
    company: "Egyptian Air Forces",
    period: "Jan 2025 – Feb 2026",
    points: [
      "Diagnosed and resolved network infrastructure issues, minimizing downtime.",
      "Deployed & configured internal systems on Linux servers, automated via Bash & SSH.",
      "Built and deployed the official medical center website (nosor-medicalcenter.org).",
    ],
  },
  {
    role: "Java Software Engineer Intern",
    company: "Orange Egypt",
    period: "Aug 2024 – Oct 2024",
    points: ["Contributed to Java-based development tasks across enterprise services."],
  },
  {
    role: "Backend Engineer Intern",
    company: "IOTBLUE",
    period: "Aug 2023 – Oct 2023",
    points: [
      "Built dashboards for a fire alarm system.",
      "Developed an attendance system with Go, Gorm, Gin, and PostgreSQL.",
      "API testing with Postman.",
    ],
  },
  {
    role: "Software Quality Engineer Intern",
    company: "Digital Blocks",
    period: "Aug 2022 – Sep 2022",
    points: ["Tested web applications, authored test cases and bug reports."],
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
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1">▹</span>
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
