import { Shield, Server, Code, Lock, Activity, Eye, Wifi, Target, Mail } from "lucide-react";
import { getDictionary } from "../../../lib/dictionaries";

export default async function Services({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  // Mapping string titles to icons, since icons can't be in JSON
  const iconMap: Record<number, any> = {
    0: <Code className="h-6 w-6 text-accent-cyan" />,
    1: <Server className="h-6 w-6 text-accent-emerald" />,
    2: <Lock className="h-6 w-6 text-accent-cyan" />,
    3: <Activity className="h-6 w-6 text-accent-emerald" />,
    4: <Target className="h-6 w-6 text-accent-cyan" />,
    5: <Wifi className="h-6 w-6 text-accent-emerald" />,
    6: <Eye className="h-6 w-6 text-accent-cyan" />,
    7: <Mail className="h-6 w-6 text-accent-emerald" />
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3">{dict.services.title}</h1>
        <p className="text-base text-foreground/70 max-w-2xl mx-auto">
          {dict.services.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dict.services.items.map((service: any, index: number) => (
          <div key={index} className="glass p-6 rounded-2xl hover:border-accent-cyan/50 transition-colors flex flex-col">
            <div className="mb-4 h-12 w-12 bg-card-bg rounded-xl flex items-center justify-center border border-card-border shadow-inner shrink-0">
              {iconMap[index] || <Shield className="h-6 w-6" />}
            </div>
            <h2 className="text-xl font-bold mb-2 text-foreground">{service.title}</h2>
            <p className="text-sm text-foreground/70 leading-relaxed flex-1">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
