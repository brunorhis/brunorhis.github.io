import { Mail, Terminal, Briefcase, Camera, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Vamos Conversar?</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Tem um projeto em mente, precisa de uma análise de vulnerabilidades ou quer apenas trocar uma ideia sobre segurança da informação? Entre em contato!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:border-accent/50 transition-colors">
          <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
            <Mail className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-2xl font-bold mb-2">E-mail</h2>
          <p className="text-foreground/70 mb-6">A forma mais direta de falar comigo sobre serviços corporativos.</p>
          <a href="mailto:contato@exemplo.com" className="px-6 py-2 bg-accent text-black font-bold rounded-md hover:opacity-90 transition-opacity">
            Enviar E-mail
          </a>
        </div>

        <div className="glass p-8 rounded-2xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="h-6 w-6 text-accent-alt" /> Redes Sociais
          </h2>
          <div className="space-y-4">
            <Link href="https://www.linkedin.com/in/brunorhis/" target="_blank" className="flex items-center gap-4 p-4 rounded-lg bg-card-bg/50 hover:bg-card-bg transition-colors border border-transparent hover:border-card-border">
              <Briefcase className="h-6 w-6 text-[#0077b5]" />
              <span className="font-medium">LinkedIn</span>
            </Link>
            <Link href="https://github.com/brunorhis" target="_blank" className="flex items-center gap-4 p-4 rounded-lg bg-card-bg/50 hover:bg-card-bg transition-colors border border-transparent hover:border-card-border">
              <ExternalLink className="h-6 w-6 text-foreground" />
              <span className="font-medium">GitHub</span>
            </Link>
            <Link href="https://www.instagram.com/brunorhis/" target="_blank" className="flex items-center gap-4 p-4 rounded-lg bg-card-bg/50 hover:bg-card-bg transition-colors border border-transparent hover:border-card-border">
              <Camera className="h-6 w-6 text-[#E1306C]" />
              <span className="font-medium">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
