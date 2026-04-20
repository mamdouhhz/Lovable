import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages, Award } from "lucide-react";

const stats = [
  { icon: Award, label: "GPA", value: "3.67" },
  { icon: GraduationCap, label: "Degree", value: "B.Sc CS" },
  { icon: Languages, label: "Languages", value: "AR · EN · DE" },
  { icon: MapPin, label: "Based in", value: "Cairo, EG" },
];

export const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <span className="text-primary">01</span>
        <SectionHeader index="01" title="about_me" />

        <div className="mt-12 grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a <span className="text-foreground">DevOps Engineer</span> and
              Computer Science graduate from{" "}
              <span className="text-foreground">AASTMT</span>, with hands-on training
              from the National Telecommunication Institute (NTI) in cloud computing,
              CI/CD, and automation.
            </p>
            <p>
              I love turning fragile manual processes into{" "}
              <span className="text-primary">resilient pipelines</span> — managing
              Linux systems, deploying containerized apps, and improving reliability
              through infrastructure as code.
            </p>
            <p>
              Beyond DevOps, I have a solid backend foundation in{" "}
              <span className="text-foreground">Go</span>,{" "}
              <span className="text-foreground">Java</span>, and{" "}
              <span className="text-foreground">Python</span> — which helps me build
              tooling that fits the apps it runs.
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
