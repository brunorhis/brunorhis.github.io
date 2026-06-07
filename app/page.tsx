import Image from "next/image";
import Link from "next/link";
import { Terminal, Shield, ArrowRight, Code, Server, Lock, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-card-bg via-background to-background -z-10"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>Cybersecurity Consultant & Pentester</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Offensive Security <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-alt">
                  & Pentest
                </span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto md:mx-0">
                Auditoria técnica de segurança e testes de invasão para identificar e corrigir vulnerabilidades críticas na sua infraestrutura.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                <Link href="/contact" className="px-8 py-3 rounded-md bg-accent text-slate-900 font-semibold hover:opacity-90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                  Solicitar Consultoria <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/about" className="px-8 py-3 rounded-md border border-card-border hover:bg-card-bg transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                  <Terminal className="h-4 w-4" /> Conheça meu trabalho
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md relative">
              <div className="aspect-square rounded-full relative glass overflow-hidden border-2 border-accent/50 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                {/* Aqui entraremos com a imagem depois. Por enquanto usamos um placeholder da imagem migrada */}
                <Image 
                  src="/images/mage_v2.png" 
                  alt="Bruno Rhis" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
