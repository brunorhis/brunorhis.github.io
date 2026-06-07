import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Componente simples para renderizar Badges do Credly
function CredlyBadge({ badgeId, title }: { badgeId: string, title: string }) {
  return (
    <div className="glass p-4 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-accent/50 transition-colors group">
      <div 
        data-iframe-width="150" 
        data-iframe-height="270" 
        data-share-badge-id={badgeId} 
        data-share-badge-host="https://www.credly.com"
      ></div>
      <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
      <div className="text-center mt-2">
        <h3 className="font-bold text-sm text-foreground">{title}</h3>
        <Link 
          href={`https://www.credly.com/badges/${badgeId}/public_url`} 
          target="_blank"
          className="text-xs text-accent hover:underline inline-flex items-center gap-1 mt-1"
        >
          Verificar <ExternalLink className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}

// Componente para renderizar Badges via Imagem (suporta URLs externas e imagens locais)
function ImageBadge({ imagePath, title, verifyUrl }: { imagePath: string, title: string, verifyUrl?: string }) {
  return (
    <div className="glass p-6 rounded-xl flex flex-col items-center justify-between hover:border-accent/50 transition-all group h-[360px]">
      
      {/* Container de Imagem Expandido e Centralizado */}
      <div className="relative w-full flex-1 flex items-center justify-center">
        {/* Usando a tag <img> padrão para evitar a necessidade de configurar domínios externos no next.config.ts */}
        <img 
          src={imagePath} 
          alt={title} 
          className="w-48 h-48 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300" 
        />
      </div>

      {/* Container de Texto Fixado no Fundo com Altura Constante */}
      <div className="text-center mt-4 h-14 flex flex-col items-center justify-end">
        <h3 className="font-bold text-base text-foreground">{title}</h3>
        {verifyUrl ? (
          <Link 
            href={verifyUrl} 
            target="_blank"
            className="text-xs text-accent hover:underline inline-flex items-center gap-1 mt-1"
          >
            Verificar <ExternalLink className="h-3 w-3" />
          </Link>
        ) : (
          /* Placeholder invisível para manter os cards todos com a mesma altura mesmo sem botão de verificar */
          <div className="text-xs text-transparent inline-flex items-center gap-1 mt-1 select-none pointer-events-none">
            Sem URL
          </div>
        )}
      </div>

    </div>
  );
}

export default function Certifications() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          <Award className="h-4 w-4" />
          <span>Conquistas</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Certificações</h1>
        <p className="text-lg text-foreground/70 max-w-2xl">
          Minha jornada de aprendizado contínuo através das principais certificações da indústria de cibersegurança.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Certificações OffSec (Imagens via URL Externa da Accredible) */}
        <ImageBadge 
          imagePath="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/183710114" 
          title="OSCP+" 
          verifyUrl="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/183710114"
        />
        
        <ImageBadge 
          imagePath="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/183714748" 
          title="OSCP" 
          verifyUrl="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/183714748"
        />
        
        {/* Certificações Locais / Outras */}
        <ImageBadge 
          imagePath="https://miro.medium.com/v2/resize:fit:640/format:webp/0*rg8hS7P0GClS7JMP.png" 
          title="CRTP" 
          verifyUrl="https://www.credential.net/8271cce0-c72b-441b-81bc-3a7640253cc9#acc.NuLdtGSz"
        />
        <ImageBadge 
          imagePath="/images/dcpt.png" 
          title="DCPT" 
          verifyUrl="https://www.desecsecurity.com/valida-certificado"
        />
        
      </div>
    </div>
  );
}
