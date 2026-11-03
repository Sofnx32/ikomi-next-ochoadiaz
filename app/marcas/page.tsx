import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcas - IKOMI PERÚ S.R.L.",
  description: "Marcas reconocidas de repuestos para camiones: Sangsin, Hansang, Mando, TCIC, Valeo, Yulim.",
};

const marcas = [
  {
    nombre: "SANGSIN BRAKE",
    logo: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=200&q=80",
    descripcion:
      "Fabricante líder en la industria Coreana de piezas y partes para frenos de fricción, cuenta con más de 6 plantas a nivel mundial. Sangsin está equipado con las mejores tecnologías originales globalmente apreciadas y es suplidor OEM para Hyundai, Kia, GM Daewoo, SSangyong y Renault Samsung.",
  },
  {
    nombre: "HANSANG",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=200&q=80",
    descripcion:
      "La marca HANSANG maneja una amplia gama de repuestos de parte de caja como son: Piñón y corona, Deslizante, Piñones, Trenfijo, Satélites, Planetarios, Propulsor, Bronces, etc.",
  },
  {
    nombre: "Mando",
    logo: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=200&q=80",
    descripcion:
      "Mando Corporation pertenece al grupo Halla Holding y cuenta con 20 fábricas en el mundo, 16 centros de investigación y con más de 11,000 trabajadores. La visión de Mando Corporation es crear productos seguros, ecológicos y de fácil uso.",
  },
  {
    nombre: "TCIC",
    logo: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&w=200&q=80",
    descripcion:
      "Tae Chul Industrial Co. fabricante de piezas de automóviles con más de 70 años de experiencia en la producción de bombas y bombines de freno y embrague de la mejor calidad. Cuenta con 5 plantas en Asia.",
  },
  {
    nombre: "PHC Valeo",
    logo: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da20?auto=format&fit=crop&w=200&q=80",
    descripcion:
      "Valeo Pyeong Hwa International es una compañía que cuenta con más de 90 años de creación y se ha convertido en socio de los principales fabricantes de automóviles, con operaciones en 33 países, diseñando tecnologías y sistemas innovadores para que los futuros automóviles sean más intuitivos.",
  },
  {
    nombre: "YULIM",
    logo: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=200&q=80",
    descripcion:
      "Establecida en 1998, Yulim High-Tech ha crecido como una de las compañías líderes de la industria del automóvil en Corea. Produce y exporta piezas para sistemas de suspensión y dirección.",
  },
];

export default function MarcasPage() {
  return (
    <div className="bg-white">
      {/* Contenedor con efecto diagonal igual que Servicios */}
      <div className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-black"
          style={{
            clipPath: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
              MARCAS
            </h1>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Contamos con las marcas más reconocidas en el mercado nacional e internacional
              especializadas en la fabricación de repuestos para vehículos con altos estándares de calidad.
            </p>
          </div>

          {/* Grid de marcas 3x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {marcas.map((marca) => (
              <div
                key={marca.nombre}
                className="bg-white text-slate-900 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Logo placeholder */}
                <div className="h-16 flex items-center justify-center mb-4 bg-slate-100 rounded">
                  <span className="text-xl font-extrabold text-slate-700">
                    {marca.nombre.toUpperCase()}
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {marca.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}