"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setEnviado(true);
    setFormData({ nombre: "", telefono: "", correo: "", asunto: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nombre"
        placeholder="Apellidos y Nombres"
        value={formData.nombre}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo"
        value={formData.correo}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
      />
      <input
        type="text"
        name="asunto"
        placeholder="Asunto"
        value={formData.asunto}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
      />
      <textarea
        name="mensaje"
        placeholder="Mensaje"
        rows={5}
        value={formData.mensaje}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          Enviar Mensaje
        </button>
      </div>

      {enviado && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
          ✓ Mensaje enviado correctamente. Un asesor se contactará contigo pronto.
        </div>
      )}
    </form>
  );
}