import {productos} from '@/data/productos';
import {notFound} from 'next/navigation';

export default function ProductoPage({params}: {params: {slug: string}}) {
    const producto = productos.find((p) => p.slug === params.slug);
    if (!producto) {
        notFound();
    }
    return (
        <div>
            <h1>{producto.name}</h1>
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
        </div>
    );
}