const pillars = [
  {
    id: 1,
    title: "RESPONSABILIDAD SOCIAL",
    description:
      "Proporcionar soluciones innovadoras que mejoren la calidad de vida de las familias cubanas, con productos duraderos, eficientes y accesibles.",
    imageLeft: false,
  },
  {
    id: 2,
    title: "ESTRATEGIA",
    description:
      "Ser el grupo empresarial líder en Cuba en soluciones para el hogar y la industria, reconocido por nuestra calidad, innovación y compromiso social.",
    imageLeft: true,
  },
  {
    id: 3,
    title: "I+D+i",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
    imageLeft: false,
  },
];

export default function CorporatePillarsAboutUS() {
  return (
    <section className="w-full my-20 px-20   space-y-10">
      {pillars.map((pillar) => (
        <div
          key={pillar.id}
          className={`grid grid-cols-2 gap-10 items-stretch  ${
            pillar.imageLeft ? "direction-rtl" : ""
          }`}
        >
          {/* Imagen placeholder — aparece primero o segundo según imageLeft */}
          {pillar.imageLeft && <div className="bg-[#F4F4F4] min-h-56 w-full" />}

          {/* Bloque de texto */}
          <div className="flex flex-col  justify-between">
            <div className="space-y-4">
              <h2 className="text-dark text-[45px] font-black tracking-tight uppercase leading-tight">
                {pillar.title}
              </h2>
              <p className="text-dark mt-10 text-xl leading-relaxed ">
                {pillar.description}
              </p>
            </div>
            {/* Línea azul decorativa */}
            <div className="mt-8 w-full border-2 border-dark" />
          </div>

          {/* Imagen placeholder — si el texto va primero */}
          {!pillar.imageLeft && (
            <div className="bg-[#F4F4F4] min-h-64 w-full" />
          )}
        </div>
      ))}
    </section>
  );
}
