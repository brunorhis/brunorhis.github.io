import Link from "next/link";
import { Terminal, Shield, BookOpen, Award, Mail } from "lucide-react";
import Image from "next/image";

export function Header({ dict, lang }: { dict: any, lang: string }) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname.replace(/^\/(pt|en)/, '') : '';
  const toggleLang = lang === 'pt' ? 'en' : 'pt';
  const flagIcon = lang === 'pt' ? '🇺🇸' : '🇧🇷';
  const flagText = lang === 'pt' ? 'EN' : 'PT';
  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2 group">
          <Terminal className="h-6 w-6 text-accent" />
          <span className="font-mono text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
            bruno<span className="text-accent">rhis</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
          <Link href={`/${lang}/about`} className="hover:text-accent transition-colors flex items-center gap-2">
            <Shield className="h-4 w-4" /> {dict.navigation.whoami}
          </Link>
          <Link href={`/${lang}/services`} className="hover:text-accent transition-colors flex items-center gap-2">
            <Terminal className="h-4 w-4" /> {dict.navigation.services}
          </Link>
          <Link href={`/${lang}/blog`} className="hover:text-accent transition-colors flex items-center gap-2">
            <BookOpen className="h-4 w-4" /> {dict.navigation.articles}
          </Link>
          <Link href={`/${lang}/certifications`} className="hover:text-accent transition-colors flex items-center gap-2">
            <Award className="h-4 w-4" /> {dict.navigation.certifications}
          </Link>
          <Link href={`/${lang}/contact`} className="hover:text-accent transition-colors flex items-center gap-2">
            <Mail className="h-4 w-4" /> {dict.navigation.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href={`/${toggleLang}`} className="flex items-center justify-center h-8 w-8 rounded-full bg-card-bg border border-card-border hover:border-accent/50 transition-all text-sm font-bold" title={`Mudar para ${flagText}`}>
            {flagIcon}
          </Link>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <Terminal className="h-6 w-6 text-accent" />
          </div>
        </div>
      </div>
    </header>
  );
}
