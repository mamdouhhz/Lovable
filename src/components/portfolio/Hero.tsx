import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-hero"
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="container relative grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-primary text-sm mb-6"
          >
            $ whoami<span className="cursor-blink"></span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Mamdouh <br />
            <span className="text-gradient">Hazem Akram Amin</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground max-w-2xl"
          >
            Cloud DevOps Engineer with hands-on experience in designing, automating, deploying
            and maintaining cloud infrastructure using <span className="text-foreground">AWS</span>,{" "}
            <span className="text-foreground">Terraform</span>,{" "}
            <span className="text-foreground">Kubernetes</span>,{" "}
            <span className="text-foreground">OpenShift</span>,{" "}
            <span className="text-foreground">Docker</span>,{" "}
            <span className="text-foreground">Jenkins</span>, and more...!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-md shadow-glow hover:shadow-elevated transition-all"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card hover:border-primary hover:text-primary text-foreground font-medium rounded-md transition-colors"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="https://linkedin.com/in/mamdouh-hazem"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/mamdouhhz"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:mamdouhhazemm@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="rounded-xl bg-card border border-border shadow-elevated overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-warning/70" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                ~/profile.yaml
              </span>
            </div>
            <pre className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              {`Name: Mamdouh Hazem Akram Amin
Role: `}<span className="text-primary">Cloud DevOps Engineer</span>{`
Location: Heliopolis, Cairo, Egypt
Education:
  Degree: `}<span className="text-accent">B.Sc Computer Science</span>{`
  GPA: 3.67 / Excellent with Honors
Stack:
  cloud:      [AWS]
  iac:        [Terraform, Ansible]
  containers: [Docker, K8s, Helm, OpenShift]
  ci_cd:      [Jenkins, GitHub Actions, ArgoCD]
  observability: [Prometheus, Grafana, Loki]
Languages: [Arabic, English, German]
Military: `}<span className="text-accent">completed</span>{`
Status: `}<span className="text-primary">available_for_hire</span>{` ✓`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
