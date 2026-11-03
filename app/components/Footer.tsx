import Link from 'next/link';

// Se declara fuera del componente para que se evalúe de forma estática en tiempo de build
const currentYear = new Date().getFullYear();

export default function Footer() {
  const enlaces = [
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/productos', label: 'Productos' },
    { href: '/marcas', label: 'Marcas' },
    { href: '/contacto', label: 'Contáctenos' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">IKOMI PERÚ</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Soluciones integrales en herramientas y maquinaria para la construcción e industria. Calidad y garantía en cada producto.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {enlaces.map((enlace) => (
                <li key={enlace.href}>
                  <Link 
                    href={enlace.href} 
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {enlace.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><strong className="text-slate-200">Dirección:</strong> Av. Principal 123, Lima, Perú</li>
              <li><strong className="text-slate-200">Teléfono:</strong> (01) 555-1234</li>
              <li><strong className="text-slate-200">Correo:</strong> ventas@ikomiperu.com</li>
              <li><strong className="text-slate-200">Horario:</strong> Lun - Vie: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {currentYear} IKOMI Perú. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}