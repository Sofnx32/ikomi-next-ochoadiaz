import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-6xl font-bold text-blue-900 mb-4">404</h2>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Página no encontrada</h3>
      <p className="text-gray-600 mb-8 max-w-md">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}