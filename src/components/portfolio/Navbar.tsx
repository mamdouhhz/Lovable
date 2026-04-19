import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-mono font-semibold">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="text-foreground">mamdouh</span>
          <span className="text-primary cursor-blink">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary/60">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center font-mono text-sm px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
        >
          ./hire_me
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-card border-t border-border">
          <ul className="container py-4 flex flex-col gap-2 font-mono">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
