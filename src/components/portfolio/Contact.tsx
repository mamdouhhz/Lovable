import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />
      <div className="container relative max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-primary text-sm"
        >
          05. what's next?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 font-display text-4xl sm:text-5xl font-bold"
        >
          Let's <span className="text-gradient">build</span> something reliable.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-lg text-muted-foreground"
        >
          I'm currently open to DevOps & cloud engineering roles. Whether you have
          a question, a project, or just want to say hi — my inbox is always open.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="mailto:mamdouhhazemm@gmail.com"
          className="inline-flex mt-10 items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-medium rounded-md shadow-glow hover:shadow-elevated transition-all"
        >
          <Mail className="h-5 w-5" />
          Say Hello
        </motion.a>

        <div className="mt-14 grid sm:grid-cols-3 gap-4 text-left">
          <ContactCard icon={Mail} label="email" value="mamdouhhazemm@gmail.com" href="mailto:mamdouhhazemm@gmail.com" />
          <ContactCard icon={Phone} label="phone" value="+20 109 722 0707" href="tel:+201097220707" />
          <ContactCard icon={MapPin} label="location" value="Heliopolis, Cairo" />
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <a href="https://linkedin.com/in/mamdouh-hazem" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/mamdouhhz" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) => {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      href={href}
      className="p-5 rounded-lg bg-gradient-card border border-border hover:border-primary/40 transition-colors block"
    >
      <Icon className="h-4 w-4 text-primary mb-2" />
      <div className="font-mono text-xs text-muted-foreground uppercase">
        {label}
      </div>
      <div className="text-foreground text-sm mt-1 break-all">{value}</div>
    </Comp>
  );
};
