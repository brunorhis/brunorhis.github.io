import Link from "next/link";
import { Terminal, Shield, BookOpen, Award, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="h-6 w-6 text-accent" />
          <span className="font-mono text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
            bruno<span className="text-accent">rhis</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
          <Link href="/about" className="hover:text-accent transition-colors flex items-center gap-2">
            <Shield className="h-4 w-4" /> Whoami
          </Link>
          <Link href="/services" className="hover:text-accent transition-colors flex items-center gap-2">
            <Terminal className="h-4 w-4" /> Serviços
          </Link>
          <Link href="/blog" className="hover:text-accent transition-colors flex items-center gap-2">
            <BookOpen className="h-4 w-4" /> Artigos
          </Link>
          <Link href="/certifications" className="hover:text-accent transition-colors flex items-center gap-2">
            <Award className="h-4 w-4" /> Certificações
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors flex items-center gap-2">
            <Mail className="h-4 w-4" /> Contato
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button could go here */}
          <Terminal className="h-6 w-6 text-accent" />
        </div>
      </div>
    </header>
  );
}
