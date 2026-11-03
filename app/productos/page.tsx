"use client";

import { useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import ProductCard from "@/app/components/ProductCard";
import { productos, categorias } from "@/data/productos";

export default function ProductosPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas las categorías");

  const productosFiltrados =
    categoriaActiva === "Todas las categorías"
      ? productos
      : productos.filter((p) => p.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="NUESTROS PRODUCTOS"
          subtitle="Los mejores productos y precios."
        />

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-2 rounded text-sm font-semibold transition-all duration-200 ${
                categoriaActiva === cat
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        {productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosFiltrados.map((producto) => (
              <ProductCard
                key={producto.slug}
                slug={producto.slug}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                imagen={producto.imagen}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500 py-12">
            No hay productos en esta categoría.
          </p>
        )}
      </div>
    </div>
  );
}