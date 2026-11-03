import Image from "next/image";
import Link from "next/link";
import { Producto } from "@/data/productos";

export default function ProductCard({ slug, name, description, price, imageUrl }: Producto) {
  const fallbackImage = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between">
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        <Image
          src={imageUrl || fallbackImage}
          alt={`Fotografía de ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
          <span className="text-xl font-extrabold text-slate-900">
            S/ {price.toFixed(2)}
          </span>
          <Link
            href={`/productos/${slug}`}
            className="text-sm font-semibold bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
}