import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { SectionHeader } from "./About";

const training = [
  {
    title: "Red Hat System Administration I & II",
    issuer: "Red Hat Academy",
    tags: ["RHEL", "Linux Administration"],
  },
  {
    title: "Red Hat OpenShift Administration I (DO180)",
    issuer: "Red Hat Academy",
    tags: ["OpenShift", "Production Clusters"],
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    tags: ["AWS", "Core Services"],
  },
  {
    title: "AWS Cloud Architecting",
    issuer: "AWS Academy",
    tags: ["AWS", "Architecture"],
  },
  {
    title: "AWS Cloud Security Foundations",
    issuer: "AWS Academy",
    tags: ["AWS", "Security"],
  },
  {
    title: "Cloud DevOps — HireReady Scholarship",
    issuer: "National Telecommunication Institute (NTI)",
    tags: ["CI/CD", "Terraform", "Containers"],
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container">
        <SectionHeader index="05" title="certifications" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {training.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.35, delay: Math.min(i, 3) * 0.04, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="p-2 w-fit rounded-md bg-primary/10 text-primary mb-4">
                {t.issuer.includes("Academy") ? (
                  <Award className="h-5 w-5" />
                ) : (
                  <GraduationCap className="h-5 w-5" />
                )}
              </div>
              <h3 className="font-display font-semibold text-base leading-snug text-foreground">
                {t.title}
              </h3>
              <p className="font-mono text-xs text-primary mt-2">{t.issuer}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2 py-1 rounded bg-secondary border border-border text-muted-foreground"
                  >
                    {tag}
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
