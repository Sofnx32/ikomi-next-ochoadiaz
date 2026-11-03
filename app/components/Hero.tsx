import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-12 md:py-16 px-6 md:px-12 rounded-2xl my-6 border border-slate-800 shadow-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800 rounded-full">
            IKOMI PERÚ
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Herramientas y Maquinaria de <span className="text-blue-500">Alta Calidad</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Equipos profesionales para construcción e industria con garantía oficial y despacho a todo el Perú.
          </p>
          <div>
            <Link
              href="/productos"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl border border-slate-700">
          <Image
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80"
            alt="Herramientas profesionales IKOMI"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}