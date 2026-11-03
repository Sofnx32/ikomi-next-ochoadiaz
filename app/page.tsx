import Hero from "@/app/components/Hero";
import SectionTitle from "@/app/components/SectionTitle";
import ProductCard from "@/app/components/ProductCard";
import { productos } from "@/data/productos";

export default function Home() {
  // Mostramos solo los primeros 3 en el home
  const destacados = productos.slice(0, 3);

  return (
    <div className="space-y-16 pb-16">
      <Hero />

      <section className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Productos Destacados"
          subtitle="Repuestos de Corea y Japón con garantía oficial."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destacados.map((producto) => (
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
      </section>
    </div>
  );
}