import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Ignora arquivos estáticos, imagens, next build assets e rotas já localizadas
  const pathnameHasLocale = pathname.startsWith('/en/') || pathname === '/en' || pathname.startsWith('/pt/') || pathname === '/pt';
  if (pathnameHasLocale) return;

  // Detecção baseada na geolocalização / idioma preferido do navegador
  const acceptLanguage = request.headers.get("accept-language") || "";
  const locale = acceptLanguage.toLowerCase().includes("pt") ? "pt" : "en";

  // Redireciona para a mesma rota, mas com o idioma prefixado
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Ignorar caminhos de API, _next/static, _next/image, favicon, SVG, etc.
    "/((?!api|_next/static|_next/image|images|favicon.ico|icon.svg|.*\\..*).*)"
  ],
};
