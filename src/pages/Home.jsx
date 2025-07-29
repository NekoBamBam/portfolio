import fondo from "../assets/zoro.jpeg";

function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover  bg-center"
        style={{
          backgroundImage: `url(${fondo})`,
        }}
      ></div>

      {/* Superposición de color */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-slate-300 px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          ¡Bienvenido!
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg">
          Bienvenido/a a mi humilde portfolio, en esta pequeña y sencilla page
          se puede observar un poco de mi, como persona y como programador,
          espero te guste 😎.
        </p>
        <a
          href="/portfolio/mi-cv.pdf"
          download
          className="btn px-4 py-2 sm:px-6 sm:py-3 bg-accent text-dark font-semibold rounded-lg hover:bg-danger transition duration-300 text-sm sm:text-base"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
}

export default Home;
