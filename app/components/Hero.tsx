import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Efecto de fondo premium */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Columna de Texto */}
        <div className="space-y-8">
          {/* Badge corporativo */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/50 border border-blue-800/50 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            IKOMI PERÚ S.R.L.
          </span>

          {/* Título principal - basado en la web real */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            REPUESTOS EN GENERAL <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              para camiones de todas las marcas
            </span>
          </h1>

          {/* Subtítulo - basado en la web real */}
          <p className="text-slate-300 text-lg md:text-xl max-w-lg leading-relaxed">
            Somos una empresa importadora de repuestos de Corea y Japón. 
            Calidad garantizada en turbinas, filtros, rodamientos y más.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/productos"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
            >
              Ver Catálogo
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/marcas"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-300"
            >
              Marcas
            </Link>
          </div>
        </div>

        {/* Columna de Imagen - REPUESTOS REALES */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          
          <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
            
            {/* IMAGEN DE ALTO CONTRASTE: Turbo y repuestos de camión */}
            <Image
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80"
              alt="Turbo y repuestos para camiones - IKOMI Perú"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay reforzado para contraste máximo */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Badge flotante */}
          <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl hidden md:block">
            <p className="text-2xl font-bold text-white">IKM</p>
            <p className="text-xs text-slate-400 uppercase tracking-wide">Repuestos Corea y Japón</p>
          </div>
        </div>

      </div>
    </section>
  );
}