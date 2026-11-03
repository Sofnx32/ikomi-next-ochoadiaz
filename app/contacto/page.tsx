import type { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contáctenos - IKOMI PERÚ S.R.L.",
  description: "Contáctenos para cotizar repuestos de camiones. Estamos en Av. Nicolás Ayllón 3384, Ate.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            CONTÁCTENOS
          </h1>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Llene el formulario y un asesor se pondrá en contacto lo más pronto posible.
          </p>
        </div>

        {/* Grid de 2 columnas: Mapa + Formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Columna izquierda: Mapa */}
          <div className="bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6!2d-76.9384!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sAv.%20Nicol%C3%A1s%20Ayll%C3%B3n%203384%2C%20Ate%2015012!5e0!3m2!1ses!2spe!4v1690000000000!5m2!1ses!2spe"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación IKOMI PERÚ"
              className="w-full"
            />
            <div className="p-4 bg-white">
              <p className="font-bold text-slate-900">Av. Nicolás Ayllón 3384</p>
              <p className="text-slate-600 text-sm">Ate, Lima 15012, Perú</p>
            </div>
          </div>

          {/* Columna derecha: Formulario (Client Component importado) */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}