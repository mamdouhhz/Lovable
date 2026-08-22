import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { SectionHeader } from "./About";

const projects = [
  {
    title: "AWS EKS DevOps Platform",
    subtitle: "NTI Final Project",
    description:
      "Provisioned production AWS infrastructure with Terraform (VPC, auto-scaling EKS, RDS, ECR, Jenkins EC2, Secrets Manager, CloudWatch, Backup) configured via Ansible. Containerized the app with Docker and deployed to EKS via Helm with Ingress, NetworkPolicies, and secure RDS connectivity. Built a multi-branch Jenkins pipeline with SonarQube quality gates, Trivy scanning, and automated pushes to ECR — plus Prometheus, Grafana, and Loki for centralized logging, dashboards, and alerting.",
    tags: [
      "Terraform",
      "Jenkins",
      "Ansible",
      "Docker",
      "Kubernetes",
      "Helm",
      "AWS",
      "Prometheus",
      "Grafana",
      "Loki",
      "SonarQube",
      "Trivy",
    ],
    github: "https://github.com/mamdouhhz/nti-final-project",
    featured: true,
  },
  {
    title: "Kubernetes Secure Three-Tier App",
    subtitle: "Kubernetes Security & Scheduling",
    description:
      "Deployed a secure three-tier application (frontend, backend, MySQL) on Kubernetes using Deployments, a StatefulSet, and Ingress. Configured RBAC, Secrets, and Network Policies to secure cluster access, credentials, and pod-to-pod traffic. Implemented node taints, tolerations, node affinity, and PV/PVC storage, built and published a custom backend image, and validated external access and database persistence.",
    tags: ["Kubernetes", "RBAC", "Docker", "MySQL", "Ingress", "NetworkPolicies"],
    github: "https://github.com/mamdouhhz/kubernetes-three-tier-app",
  },
  {
    title: "AWS Three-Tier IaC with Terraform",
    subtitle: "Infrastructure as Code",
    description:
      "Modular AWS infrastructure built with Terraform following IaC principles — a custom VPC with public and private subnets across multiple Availability Zones, Internet Gateway, route tables, and security groups. EC2 instances behind Application Load Balancers for a highly available three-tier architecture, with remote Terraform state in Amazon S3 and state locking.",
    tags: ["Terraform", "AWS", "VPC", "ALB", "EC2", "S3"],
    github: "https://github.com/mamdouhhz/aws-terraform",
  },
  {
    title: "OpenShift WordPress Platform",
    subtitle: "Production-Style Deployment",
    description:
      "Deployed a production-style WordPress/MySQL application on OpenShift using PVCs, ConfigMaps, and Secrets for storage and configuration. Exposed via Services and Routes with health probes, horizontal pod autoscaling, and resource limits — validated under load.",
    tags: ["OpenShift", "PVCs", "HPA", "ConfigMaps", "Secrets", "MySQL"],
  },
  {
    title: "Nosor Medical Center",
    subtitle: "Production Website",
    description:
      "Designed, developed, and deployed the official website for the Egyptian Air Forces medical center on a Linux server. Live in production.",
    tags: ["Linux", "Bash", "nginx", "SSH"],
    link: "https://nosor-medicalcenter.org/",
  },
  {
    title: "Attendance System & Fire Alarm Dashboards",
    subtitle: "IOTBLUE Internship",
    description:
      "REST API for an employee attendance system built with Go, Gin, and Gorm on PostgreSQL, tested with Postman. Also built real-time dashboards for a fire alarm monitoring system, consuming live sensor data over MQTT from an existing broker.",
    tags: ["Go", "Gin", "Gorm", "PostgreSQL", "MQTT", "Postman"],
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
                      aria-label={`${p.title} live site`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${p.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
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
