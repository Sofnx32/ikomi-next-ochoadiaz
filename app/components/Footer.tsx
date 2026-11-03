import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const enlaces = [
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/productos', label: 'Productos' },
    { href: '/marcas', label: 'Marcas' },
    { href: '/contacto', label: 'Contáctenos' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid responsive: 1 columna en móvil, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna 1: Marca */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">IKOMI PERÚ</h3>
            <p className="text-sm leading-relaxed">
              Soluciones integrales en herramientas y maquinaria para la construcción e industria. Calidad y garantía en cada producto.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {enlaces.map((enlace) => (
                <li key={enlace.href}>
                  <Link 
                    href={enlace.href} 
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    {enlace.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li> Av. Principal 123, Lima, Perú</li>
              <li>(01) 555-1234</li>
              <li>ventas@ikomiperu.com</li>
              <li>Lun - Vie: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {currentYear} IKOMI Perú. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}