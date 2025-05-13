
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";


const imagensTrabalho = [
  "/imagem5.jpeg",
  "/imagem1.jpg",
  "/imagem3.jpeg",
  "/imagem2.jpg",
  "/imagem4.jpeg",
];



export default function CarouselTrabalhos() {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  
  return (
    <section className="px-4 py-8 overflow-x-hidden relative">
      <h2 className="text-2xl font-bold mb-6 text-center">Alguns de Nossos Trabalhos</h2>
      <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto relative overflow-hidden">
        <CarouselContent>
          {imagensTrabalho.map((src, index) => (
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3" key={index}>
              <div className="p-1">

                <img
                  src={src}
                  alt={`Trabalho ${index + 1}`}
                  className="rounded-lg w-full h-40 object-cover max-h-[400px]"
                />

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm ">
        Slide {current}
      </div>
    </section>
  );
}
