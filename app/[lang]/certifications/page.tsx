import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "../../../lib/dictionaries";

function ImageBadge({ imagePath, title, verifyUrl, verifyText, noUrlText, code }: { imagePath: string, title: string, verifyUrl?: string, verifyText: string, noUrlText: string, code?: string }) {
  return (
    <div className="glass p-6 rounded-xl flex flex-col items-center justify-between hover:border-accent/50 transition-all group h-[360px]">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <Image 
          src={imagePath} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, 192px"
          className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="text-center mt-4 h-16 flex flex-col items-center justify-end">
        <h3 className="font-bold text-base text-foreground">{title}</h3>
        {code && <p className="text-[10px] text-foreground/50 font-mono mt-0.5">{code}</p>}
        {verifyUrl ? (
          <Link 
            href={verifyUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:underline inline-flex items-center gap-1 mt-1"
          >
            {verifyText} <ExternalLink className="h-3 w-3" />
          </Link>
        ) : (
          <div className="text-xs text-transparent inline-flex items-center gap-1 mt-1 select-none pointer-events-none">
            {noUrlText}
          </div>
        )}
      </div>
    </div>
  );
}

export default async function Certifications({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          <Award className="h-4 w-4" />
          <span>{dict.certifications.badge}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">{dict.certifications.title}</h1>
        <p className="text-lg text-foreground/70 max-w-2xl">
          {dict.certifications.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ImageBadge 
          imagePath="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/183710114" 
          title="OSCP+" 
          verifyUrl="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/183710114"
          verifyText={dict.certifications.verify}
          noUrlText={dict.certifications.no_url}
        />
        <ImageBadge 
          imagePath="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/183714748" 
          title="OSCP" 
          verifyUrl="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/183714748"
          verifyText={dict.certifications.verify}
          noUrlText={dict.certifications.no_url}
        />
        <ImageBadge 
          imagePath="https://miro.medium.com/v2/resize:fit:640/format:webp/0*rg8hS7P0GClS7JMP.png" 
          title="CRTP" 
          verifyUrl="https://www.credential.net/8271cce0-c72b-441b-81bc-3a7640253cc9#acc.NuLdtGSz"
          verifyText={dict.certifications.verify}
          noUrlText={dict.certifications.no_url}
        />
        <ImageBadge 
          imagePath="/images/dcpt.png" 
          title="DCPT" 
          verifyUrl="https://academy.desecsecurity.com/certificacao/SPJV-FVHDE-WEPK"
          verifyText={dict.certifications.verify}
          noUrlText={dict.certifications.no_url}
        />
      </div>
    </div>
  );
}
