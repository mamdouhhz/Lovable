import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages, Award } from "lucide-react";

const stats = [
  { icon: Award, label: "GPA", value: "3.67 / Honors" },
  { icon: GraduationCap, label: "Degree", value: "B.Sc CS '24" },
  { icon: Languages, label: "Languages", value: "AR · EN · DE" },
  { icon: MapPin, label: "Based in", value: "Cairo, EG" },
];

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <SectionHeader index="01" title="about_me" />

        <div className="mt-12 grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a <span className="text-foreground">Cloud DevOps Engineer</span>{" "}
              with hands-on experience designing, automating, and deploying cloud
              infrastructure using <span className="text-foreground">AWS</span>,{" "}
              <span className="text-foreground">Terraform</span>,{" "}
              <span className="text-foreground">Kubernetes</span>,{" "}
              <span className="text-foreground">Docker</span>, and{" "}
              <span className="text-foreground">Jenkins</span>.
            </p>
            <p>
              I'm skilled in <span className="text-primary">Infrastructure as Code</span>,{" "}
              <span className="text-primary">CI/CD automation</span>, container
              orchestration, observability, and Linux administration — turning
              fragile manual processes into resilient, repeatable pipelines.
            </p>
            <p>
              I hold a B.Sc. in Computer Science from{" "}
              <span className="text-foreground">AASTMT</span> (GPA 3.67, Excellent
              with Honors, Class of 2024), and back my platform work with backend
              development experience in <span className="text-foreground">Go</span>{" "}
              and <span className="text-foreground">Java</span>. Military service:
              completed.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-lg bg-gradient-card border border-border hover:border-primary/40 transition-colors"
              >
                <s.icon className="h-5 w-5 text-primary mb-3" />
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
                <div className="font-display font-semibold text-lg mt-1">
                  {s.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionHeader = ({
  index,
  title,
}: {
  index: string;
  title: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4"
  >
    <h2 className="font-display text-3xl sm:text-4xl font-bold">
      <span className="text-foreground">{title.charAt(0).toUpperCase() + title.slice(1).replace(/_/g, " ")}</span>
    </h2>
    <div className="flex-1 h-px bg-border max-w-xs" />
  </motion.div>
);
