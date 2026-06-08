import { Briefcase, Camera, Terminal } from "lucide-react";
import Link from "next/link";

export function Footer({ dict }: { dict: any }) {
  return (
    <footer className="border-t border-card-border bg-card-bg mt-auto">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 opacity-50">
          <Terminal className="h-5 w-5 text-accent" />
          <span className="font-mono font-bold tracking-tight text-foreground">
            bruno<span className="text-accent">rhis</span>
          </span>
        </div>
        <p className="text-sm text-foreground/50 text-center md:text-right">
          &copy; {new Date().getFullYear()} Bruno Rhis. {dict.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/brunorhis" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" title="GitHub">
            <Terminal className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/brunorhis/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" title="LinkedIn">
            <Briefcase className="h-5 w-5" />
          </Link>
          <Link href="https://www.instagram.com/brunorhis/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" title="Instagram">
            <Camera className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
