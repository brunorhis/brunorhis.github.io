import { Code2, Briefcase, Camera, Terminal } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-background py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-foreground/70 text-sm">
          <Code2 className="h-5 w-5 text-accent-alt" />
          <span>&copy; {new Date().getFullYear()} Bruno Rhis. Todos os direitos reservados.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/brunorhis" target="_blank" className="text-foreground/70 hover:text-accent transition-colors" title="GitHub">
            <Terminal className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/brunorhis/" target="_blank" className="text-foreground/70 hover:text-accent transition-colors" title="LinkedIn">
            <Briefcase className="h-5 w-5" />
          </Link>
          <Link href="https://www.instagram.com/brunorhis/" target="_blank" className="text-foreground/70 hover:text-accent transition-colors" title="Instagram">
            <Camera className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
