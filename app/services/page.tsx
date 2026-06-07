import { Shield, Server, Code, Lock, Activity, Eye, Wifi, Target } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-accent-cyan" />,
      title: "Web App Pentesting",
      description: "Análise profunda de aplicações web em busca de falhas críticas (OWASP Top 10), lógica de negócios e vulnerabilidades em APIs."
    },
    {
      icon: <Server className="h-8 w-8 text-accent-emerald" />,
      title: "Network Pentesting",
      description: "Avaliação de segurança da infraestrutura de rede corporativa, identificando portas abertas, serviços desatualizados e falhas de segmentação."
    },
    {
      icon: <Lock className="h-8 w-8 text-accent-cyan" />,
      title: "Vulnerability Assessment",
      description: "Varredura automatizada e triagem manual para mapear a superfície de ataque da organização e priorizar correções."
    },
    {
      icon: <Activity className="h-8 w-8 text-accent-emerald" />,
      title: "API Pentesting",
      description: "Avaliação de segurança focada em APIs REST e GraphQL para descobrir falhas de autenticação, autorização e manipulação de dados."
    },
    {
      icon: <Target className="h-8 w-8 text-accent-cyan" />,
      title: "Red Team Operations",
      description: "Simulação realista de ataques direcionados para testar as capacidades de detecção e resposta (Blue Team) da sua organização."
    },
    {
      icon: <Wifi className="h-8 w-8 text-accent-emerald" />,
      title: "Wi-Fi Pentesting",
      description: "Testes de intrusão em redes sem fio corporativas para identificar criptografia fraca, configurações inseguras e ataques de rede."
    },
    {
      icon: <Eye className="h-8 w-8 text-accent-cyan" />,
      title: "Auditoria de Segurança",
      description: "Revisão detalhada de arquitetura, Active Directory e configurações de nuvem para garantir as melhores práticas de cibersegurança."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Serviços Profissionais</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Ofereço soluções de segurança ofensiva adaptadas às necessidades do seu negócio para garantir a integridade e confidencialidade dos seus dados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="glass p-8 rounded-2xl hover:border-accent-cyan/50 transition-colors">
            <div className="mb-6 h-16 w-16 bg-card-bg rounded-xl flex items-center justify-center border border-card-border shadow-inner">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h2>
            <p className="text-foreground/70 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
