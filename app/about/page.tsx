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
            src="/images/mage_v2.png" 
            alt="Bruno Rhis" 
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4 text-foreground/80 leading-relaxed">
          <p>
            Olá! Sou <strong>Bruno Rhis</strong>, um profissional de TI com mais de 8 anos de experiência sólida em infraestrutura e suporte, dedicando os últimos anos exclusivamente à Segurança Ofensiva.
          </p>
          <p>
            Atuo na execução de testes de intrusão (Pentest) e operações de Red Team, simulando ataques reais, realizando campanhas controladas de phishing e avaliando a segurança de ambientes corporativos complexos. Utilizo também conhecimentos em Threat Intelligence para complementar a identificação e análise tática de ameaças.
          </p>
          <p>
            Sou graduado em Defesa Cibernética e possuo as certificações <strong>OSCP+, OSCP, CRTP e DCPT</strong>. Minha experiência prática envolve identificar, explorar e validar vulnerabilidades em aplicações, redes e infraestruturas, sempre com o objetivo de fortalecer a postura de segurança das organizações.
          </p>
          <div className="pt-4 mt-6 border-t border-card-border">
            <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent-emerald" /> 
              Foco Atual
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-1 text-sm">
              <li><strong>Testes de Invasão & Red Team:</strong> Reprodução de cenários reais de ataque em aplicações e infraestruturas complexas.</li>
              <li><strong>Gestão de Vulnerabilidades:</strong> Identificação proativa de falhas e análise contínua da superfície de exposição corporativa.</li>
              <li><strong>Desenvolvimento Contínuo:</strong> Aprimoramento técnico constante para enfrentar e mitigar ameaças modernas (Eterno Estudante).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
