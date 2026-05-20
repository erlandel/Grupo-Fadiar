export default function MetricsAboutUs() {
  return (
    <>
      <section className="mt-10 w-full flex flex-col">
        <div className="w-full">
          <img
            src="/images/imagesAboutUs/about.png"
            alt="About Us"
            className="w-full h-auto"
          />
        </div>

        <div className="flex justify-around -mt-20 ">
          <div className="bg-white px-5 py-7 shadow-xl flex flex-col w-50">
            <h2 className="text-5xl font-black text-dark">8K</h2>
            <p className="text-2xl font-bold text-dark mt-2">
              Pedidos
              <br />
              procesados
            </p>
          </div>
          <div className="bg-white px-5 py-7 shadow-xl flex flex-col w-50">
            <h2 className="text-5xl font-black text-dark">99%</h2>
            <p className="text-2xl font-bold text-dark mt-2">
              Clientes
              <br />
              satisfechos
            </p>
          </div>
          <div className="bg-white px-5 py-7 shadow-xl flex flex-col w-50">
            <h2 className="text-5xl font-black text-dark">16K</h2>
            <p className="text-2xl font-bold text-dark mt-2">
              Cantidad
              <br />
              de clientes
            </p>
          </div>
          <div className="bg-white px-5 py-7 shadow-xl flex flex-col w-50">
            <h2 className="text-5xl font-black text-dark">123</h2>
            <p className="text-2xl font-bold text-dark mt-2">
              Pedidos
              <br />
              devueltos
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
