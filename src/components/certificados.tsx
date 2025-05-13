const certificados = [
  "/abnt.jpg",
  "/falcao.jpg",
  "/rrt.jpg",
  "/garantia.jpg",
];

export default function Certificados() {
  return (
    <section className="px-4 py-8 bg-gray-100">
      
      <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-auto">
        {certificados.map((src, index) => (
          <div key={index} className="flex items-center justify-center bg-white rounded-lg shadow p-2">
            <img
              src={src}
              alt={`Certificado ${index + 1}`}
              className="max-w-full max-h-[300px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
