export interface Producto {
  slug: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

export const categorias = [
  "Todas las categorías",
  "Disco, plato y collarín de embrague",
  "Pastilla y zapata de freno",
  "Piñón y parte de caja",
  "Volante y accesorios",
];

export const productos: Producto[] = [
  {
    slug: "disco-embrague-hino",
    nombre: "Disco de Embrague Hino",
    categoria: "Disco, plato y collarín de embrague",
    descripcion: "Disco de embrague original para camiones Hino. Alta durabilidad y rendimiento.",
    precio: 450,
    imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "piñon-caja-mitsubishi",
    nombre: "Piñón de Caja Mitsubishi",
    categoria: "Piñón y parte de caja",
    descripcion: "Piñón de transmisión para camiones Mitsubishi Fuso. Fabricación japonesa.",
    precio: 320,
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "collarin-embrague-isuzu",
    nombre: "Collarín de Embrague Isuzu",
    categoria: "Disco, plato y collarín de embrague",
    descripcion: "Collarín de embrague para Isuzu NPR y NQR. Calidad OEM.",
    precio: 180,
    imagen: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "pastilla-freno-hi-q",
    nombre: "Pastilla de Freno Hi-Q",
    categoria: "Pastilla y zapata de freno",
    descripcion: "Pastillas de freno Hi-Q para camiones ligeros y medianos. Larga duración.",
    precio: 95,
    imagen: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "eje-transmision-kia",
    nombre: "Eje de Transmisión Kia",
    categoria: "Piñón y parte de caja",
    descripcion: "Eje de transmisión para camiones Kia Bongo. Repuesto original de Corea.",
    precio: 280,
    imagen: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da20?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "volante-dual-valeo",
    nombre: "Volante Dual Mass Valeo",
    categoria: "Volante y accesorios",
    descripcion: "Volante de masa dual Valeo para camiones europeos y asiáticos.",
    precio: 890,
    imagen: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=600&q=80",
  },
];