import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros - IKOMI PERÚ S.R.L.",
  description: "Conoce nuestro equipo, almacén, tienda y empresa importadora de repuestos de Corea y Japón.",
};

const secciones = [
  {
    titulo: "Equipo",
    imagen: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    alt: "Equipo de trabajo IKOMI PERÚ",
  },
  {
    titulo: "Almacén",
    imagen: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80",
    alt: "Almacén de repuestos IKOMI",
  },
  {
    titulo: "Tienda",
    imagen: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    alt: "Tienda física IKOMI PERÚ",
  },
  {
    titulo: "Empresa",
    imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    alt: "Edificio corporativo IKOMI PERÚ",
  },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título de página */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
          Nosotros
        </h1>

        {/* Grid de secciones - replica la captura */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secciones.map((seccion) => (
            <div
              key={seccion.titulo}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header gris oscuro con título */}
              <div className="bg-slate-600 text-white py-3 px-4 text-center font-semibold">
                {seccion.titulo}
              </div>

              {/* Imagen */}
              <div className="relative h-64 w-full bg-slate-100">
                <Image
                  src={seccion.imagen}
                  alt={seccion.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Texto descriptivo adicional */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Sobre IKOMI PERÚ S.R.L.
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Somos una empresa importadora de repuestos para camiones de todas las marcas, 
            especializada en productos de <strong>Corea y Japón</strong>. Contamos con un 
            equipo profesional, almacenes equipados y una tienda física para atender a 
            nuestros clientes en todo el Perú.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Nuestra misión es proporcionar repuestos de alta calidad con garantía oficial, 
            soporte técnico especializado y despacho rápido a nivel nacional.
          </p>
        </div>
      </div>
    </div>
  );
}