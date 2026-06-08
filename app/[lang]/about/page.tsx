import { Terminal } from "lucide-react";
import Image from "next/image";
import { getDictionary } from "../../../lib/dictionaries";

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-medium mb-4">
          <Terminal className="h-4 w-4" />
          <span>{dict.about.badge}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">{dict.about.title}</h1>
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
          <p dangerouslySetInnerHTML={{ __html: dict.about.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: dict.about.p2 }} />
          <p dangerouslySetInnerHTML={{ __html: dict.about.p3 }} />
        </div>
      </div>
    </div>
  );
}
