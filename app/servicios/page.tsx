import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios - IKOMI PERÚ S.R.L.",
  description: "Conoce nuestros servicios: ventas de repuestos, asesoría personalizada, delivery y productos de calidad.",
};

const servicios = [
  {
    titulo: "Ventas",
    descripcion:
      "Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Corea y Japón. A los mejores precios del mercado.",
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    titulo: "Asesoría",
    descripcion:
      "Le brindamos una asesoría personalizada acerca de nuestros productos, a elegir el mejor repuesto para su movilidad.",
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    titulo: "Delivery",
    descripcion:
      "Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible.",
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    titulo: "Productos",
    descripcion:
      "Contamos con las mejores marcas y calidad de productos del mercado.",
    icono: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function ServiciosPage() {
  return (
    <div className="bg-white">
      {/* Contenedor con efecto diagonal (skew) */}
      <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
        {/* Efecto de corte diagonal superior e inferior */}
        <div
          className="absolute inset-0 bg-black"
          style={{
            clipPath: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)",
          }}
        />

        {/* Contenido enderezado */}
        <div className="relative max-w-6xl mx-auto px-6">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
              SERVICIOS
            </h1>
            {/* Línea roja decorativa */}
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-slate-300 text-lg">
              Estamos listos para atenderte.
            </p>
          </div>

          {/* Grid de tarjetas 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {servicios.map((servicio) => (
              <div
                key={servicio.titulo}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex gap-5 hover:border-red-600/50 transition-colors duration-300"
              >
                {/* Icono rojo */}
                <div className="flex-shrink-0 text-red-500">
                  {servicio.icono}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 underline decoration-red-600 underline-offset-4">
                    {servicio.titulo}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {servicio.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}