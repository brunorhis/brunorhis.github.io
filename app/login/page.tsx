"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, Unlock, Terminal } from "lucide-react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "G4M3OV3R123") {
      setIsLogged(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isLogged) {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="glass p-8 rounded-2xl max-w-lg w-full text-center border-accent-emerald/50 border shadow-[0_0_30px_rgba(16,185,129,0.15)] animate-in fade-in zoom-in duration-500">
          <h1 className="text-4xl font-bold tracking-tight text-accent-emerald mb-4">
            GOTCHA! 📸
          </h1>
          <p className="text-foreground/80 mb-6 font-mono">
            Você caiu no Honeypot! Seu IP foi "registrado". 🦍
          </p>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-2 border-2 border-accent-emerald/20">
            <Image 
              src="/images/gorilla.jpg" 
              alt="Gorilla" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="glass p-8 rounded-2xl max-w-md w-full border border-card-border">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 bg-card-bg rounded-2xl flex items-center justify-center border border-card-border shadow-inner">
            <Lock className="h-8 w-8 text-accent-cyan" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center mb-2 text-foreground">Área Restrita</h1>
        <p className="text-sm text-center text-foreground/60 mb-8">
          Acesso exclusivo para administradores.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">
              Password
            </label>
            <div className="relative">
              <Terminal className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background/50 border border-card-border rounded-xl py-3 pl-10 pr-4 text-foreground focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                placeholder="Insira a senha"
              />
            </div>
            {error && (
              <p className="text-accent-cyan text-sm mt-2 text-center animate-pulse">Acesso Negado. Try harder.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-accent-cyan/10 border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan hover:text-background font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4"
          >
            <Unlock className="h-5 w-5" />
            Autenticar
          </button>
        </form>
      </div>
    </div>
  );
}
