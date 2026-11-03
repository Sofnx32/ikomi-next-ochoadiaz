import { productos } from '@/data/productos';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function ProductoPage({ params }: Props) {
  const resolvedParams = await params;
  const producto = productos.find((p) => p.slug === resolvedParams.slug);

  if (!producto) {
    notFound();
  }

  const fallbackImage =
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Botón Volver */}
      <Link
        href="/productos"
        className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
      >
        &larr; Volver al catálogo
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
     
        <div className="relative h-72 md:h-96 w-full bg-slate-100 rounded-xl overflow-hidden">
          <Image
            src={producto.imageUrl || fallbackImage}
            alt={`Fotografía de ${producto.name}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between h-full space-y-6">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full">
              IKOMI Perú
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900">
              {producto.name}
            </h1>
            <p className="text-slate-600 leading-relaxed">
              {producto.description}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-slate-500">Precio:</span>
              <span className="text-3xl font-extrabold text-slate-900">
                S/ {producto.price.toFixed(2)}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contacto"
                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}