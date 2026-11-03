import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  slug: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

export default function ProductCard({ slug, nombre, descripcion, precio, imagen }: ProductCardProps) {
  return (
    <Link href={`/productos/${slug}`} className="group block">
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Imagen con fondo blanco */}
        <div className="relative h-56 w-full bg-white p-4 flex items-center justify-center">
          <Image
            src={imagen}
            alt={`Repuesto ${nombre}`}
            width={400}
            height={300}
            className="object-contain max-h-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div className="p-5 border-t border-slate-100">
          <p className="text-xs text-red-600 font-semibold uppercase tracking-wide mb-1">
            IKOMI
          </p>
          <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
            {nombre}
          </h3>
          <p className="text-slate-500 text-sm line-clamp-2 mb-3">
            {descripcion}
          </p>
          <p className="text-blue-700 font-extrabold text-xl">
            S/ {precio.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
}