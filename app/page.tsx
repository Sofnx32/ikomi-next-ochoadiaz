import Hero from '@/app/components/Hero';
import SectionTitle from '@/app/components/SectionTitle';
import ProductCard from '@/app/components/ProductCard';
import { productos } from '@/data/productos';

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      <Hero />

      <SectionTitle 
        title="Catálogo de Productos" 
        subtitle="Herramientas y accesorios con la garantía de IKOMI Perú."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {productos.map((producto) => (
          <ProductCard
            key={producto.slug}
            slug={producto.slug}
            name={producto.name}
            description={producto.description}
            price={producto.price}
            imageUrl={producto.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}