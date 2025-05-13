import Certificados from "./components/certificados";
import Contatos from "./components/contato";
import CarouselTrabalhos from "./components/carousel";
import Sobre from "./components/about";

export default function App() {


  return (
    <>
      {/* header */}
      <header className="flex items-center bg-[#58a6b2] justify-between px-4 py-3 shadow-md">
        <img src="/logo.png" alt="Logo" className="h-15" />
        <h1 className="text-xl font-bold">dbellazzi vidros</h1>
      </header>

      {/* hero */}
      <section className="relative h-80 bg-[url('/bghero.jpg')] bg-cover bg-center flex items-center justify-center text-white">
        <div className="bg-black/50 p-4 rounded">
          <h2 className="text-2xl font-bold text-center">VIDROS QUE VESTEM A SUA VARANDA</h2>
        </div>
      </section>

      {/* about */}
      <Sobre />

      {/* certificados */}
      <Certificados />

      {/* galeria trabalhos */}
      <CarouselTrabalhos/>

      {/* contato */}
      <Contatos/>

    </>

  )
}


