import { productos } from "@/data/productos";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const producto = productos.find((p) => p.slug === params.slug);
  return {
    title: producto ? `${producto.nombre} - IKOMI PERÚ` : "Producto no encontrado",
    description: producto?.descripcion ?? "Detalle del producto",
  };
}

export default function ProductoDetalle({ params }: Props) {
  const producto = productos.find((p) => p.slug === params.slug);

  if (!producto) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-80 md:h-auto bg-white p-8 flex items-center justify-center">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              width={500}
              height={500}
              className="object-contain max-h-full"
            />
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="text-red-600 font-semibold uppercase tracking-wide text-sm mb-2">
              {producto.categoria}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              {producto.nombre}
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {producto.descripcion}
            </p>
            <p className="text-4xl font-extrabold text-blue-700 mb-8">
              S/ {producto.precio.toFixed(2)}
            </p>

            <div className="flex gap-4">
              <Link
                href="/contacto"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Cotizar
              </Link>
              <Link
                href="/productos"
                className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}