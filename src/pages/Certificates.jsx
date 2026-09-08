import { useState } from "react";
import fondo1 from "../assets/fondo1.png";
import desarrollo from "../assets/certificados/programador.jpeg";
import liderazo from "../assets/certificados/liderazgo.png"

const certificates = [
  {
    title: "Desarrollo Web",
    institution: "CFL 404",
    date: "2024",
    image: desarrollo, // Reemplazá por tu variable de imagen
  },
  {
    title: "Liderazgo",
    institution: "Programa Capacitar",
    date: "2026",
    image: liderazo, // Reemplazá por tu variable de imagen
  },
];

function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div
      className="min-h-screen bg-dark py-12 h-full"
      style={{
        backgroundImage: `url(${fondo1})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-info mb-4">
          Mis Certificados y Cursos
        </h1>
        <p className="text-lg text-white">
          Haz clic en cualquier certificado para verlo a tamaño completo.
        </p>
      </div>

      {/* Grid de Certificados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-24">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="card bg-base-100 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedImg(cert.image)}
          >
            <figure className="overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="object-cover h-48 w-full"
              />
            </figure>
            <div className="card-body bg-[#0E4749]">
              <h2 className="card-title text-[#95C623]">{cert.title}</h2>
              <p className="text-white/80">{cert.institution}</p>
              <div className="card-actions justify-between items-center mt-2">
                <span className="text-sm text-gray-300">{cert.date}</span>
                <button className="btn btn-outline btn-sm text-[#95C623] border-[#95C623] hover:bg-[#95C623] hover:text-black">
                  Ver Grande
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox al hacer clic */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex justify-center items-center">
            <img
              src={selectedImg}
              alt="Certificado ampliado"
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl border-2 border-[#95C623]"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;