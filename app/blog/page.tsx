import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      date: "Em breve",
      summary: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      slug: "#"
    },
    {
      id: 2,
      title: "Pellentesque habitant morbi tristique",
      date: "Em breve",
      summary: "Senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      slug: "#"
    },
    {
      id: 3,
      title: "Donec sit amet cursus elit",
      date: "Em breve",
      summary: "Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      slug: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          <BookOpen className="h-4 w-4" />
          <span>Knowledge Base</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Artigos & Write-ups</h1>
        <p className="text-lg text-foreground/70">
          Compartilhando conhecimento sobre hacking, metodologias de pentest e análises de certificações.
        </p>
      </div>

      <div className="space-y-6 opacity-70">
        <p className="text-sm font-medium text-accent mb-8 uppercase tracking-widest bg-accent/10 inline-block px-3 py-1 rounded">
          Layout de demonstração (Conteúdo em breve)
        </p>
        {posts.map((post) => (
          <article key={post.id} className="glass p-6 rounded-xl hover:border-accent/50 transition-colors group">
            <div className="text-xs text-foreground/50 mb-2 font-mono">{post.date}</div>
            <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
              <span className="cursor-default">{post.title}</span>
            </h2>
            <p className="text-foreground/70 mb-4">{post.summary}</p>
            <div className="text-accent text-sm font-medium opacity-50 inline-flex items-center gap-1 cursor-default">
              Ler artigo completo &rarr;
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
