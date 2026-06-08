"use client";

import { useState } from "react";
import { Send, CheckCircle2, XCircle } from "lucide-react";

export function ContactForm({ dict }: { dict: any }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "c3534883-475d-4333-abe8-5c766356220b";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Error from Web3Forms:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center h-full min-h-[300px]">
        <CheckCircle2 className="h-16 w-16 text-accent mb-4" />
        <h2 className="text-2xl font-bold mb-2">{dict.success_title}</h2>
        <p className="text-foreground/70">{dict.success_desc}</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2 bg-card-bg border border-card-border hover:border-accent/50 rounded-md transition-colors"
        >
          Enviar outra
        </button>
      </div>
    );
  }

  return (
    <div className="glass p-8 rounded-2xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {status === "error" && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-md flex items-start gap-3">
            <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-200">{dict.error_desc}</p>
          </div>
        )}
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground/80">
            {dict.name_label}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground/80">
            {dict.email_label}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors"
            placeholder="john@company.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground/80">
            {dict.message_label}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2.5 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
            placeholder="..."
          />
        </div>

        {/* Anti-spam honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 px-6 py-3 bg-accent text-slate-900 font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <span className="animate-pulse">{dict.button_sending}</span>
          ) : (
            <>
              {dict.button_idle} <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
