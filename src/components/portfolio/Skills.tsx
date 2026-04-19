import { motion } from "framer-motion";
import {
  Cloud,
  Container,
  Code2,
  Database,
  TestTube2,
  Network,
} from "lucide-react";
import { SectionHeader } from "./About";

const groups = [
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    items: [
      "AWS",
      "Bash Scripting",
      "Ansible",
      "Terraform",
      "CloudFormation",
      "GitHub Actions",
      "Linux",
      "Git",
    ],
  },
  {
    icon: Container,
    title: "Containers & Orchestration",
    items: ["Docker", "Podman", "Kubernetes", "OpenShift"],
  },
  {
    icon: Code2,
    title: "Programming",
    items: ["Go (Golang)", "Python", "Java", "C++", "NumPy", "Pandas", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL", "Gorm"],
  },
  {
    icon: TestTube2,
    title: "Testing",
    items: ["JUnit", "Postman", "Manual Testing", "Test Validation"],
  },
  {
    icon: Network,
    title: "Networking",
    items: ["CCNA", "TCP/IP", "Routing & Switching"],
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 hover:shadow-glow transition-all"
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
