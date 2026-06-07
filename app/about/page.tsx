import { Shield, Terminal } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-medium mb-4">
          <Terminal className="h-4 w-4" />
          <span>whoami</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Sobre mim</h1>
      </div>

      <div className="glass p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3 relative aspect-square rounded-xl overflow-hidden border border-card-border shrink-0">
          <Image 
            src="/images/mage.png" 
            alt="Bruno Rhis" 
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4 text-foreground/80 leading-relaxed">
          <p>
            Olá! Sou <strong>Bruno Rhis</strong>, um apaixonado por cibersegurança, tecnologia e resolução de problemas complexos.
          </p>
          <p>
            Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam por baixo dos panos. Hoje, utilizo esse conhecimento para proteger infraestruturas críticas e aplicações de ataques reais.
          </p>
          <p>
            Atuo como Consultor de TI e Hacker Ético (Pentester), onde meu objetivo principal é simular o comportamento de atacantes (Red Team) para ajudar organizações a fortalecerem suas defesas antes que um incidente real ocorra.
          </p>
          <div className="pt-4 mt-6 border-t border-card-border">
            <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent-emerald" /> 
              Foco Atual
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-1 text-sm">
              <li>Testes de Invasão em Aplicações Web (Web App Pentesting)</li>
              <li>Análise de Vulnerabilidades e Gestão de Riscos</li>
              <li>Aperfeiçoamento constante (Eterno Estudante)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
