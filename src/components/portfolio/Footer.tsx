export const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
      <p>
        <span className="text-primary">$</span> echo "© {new Date().getFullYear()} Mamdouh Hazem"
      </p>
      
    </div>
  </footer>
);
