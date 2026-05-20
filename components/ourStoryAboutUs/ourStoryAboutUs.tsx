import AccordionItem from "../accordionItem/acordionItem";

export default function OurStoryAboutUs() {
  return (
    <>
       <section className="mt-30 w-full bg-[#F4F4F4]">
        <div className="w-full p-20">
          <div className="flex justify-around items-start gap-20">
            <div className="w-1/2 text-xl">
              <h2 className="text-5xl font-black">Nuestra historia</h2>
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 w-1/2">
              <AccordionItem
                title="Nuestra Misión"
                content="Proporcionar soluciones innovadoras que mejoren la calidad de vida de las familias cubanas, con productos duraderos, eficientes y accesibles."
              />
              <AccordionItem
                title="Nuestra Visión"
                content="Ser el grupo empresarial líder en Cuba en soluciones para el hogar y la industria, reconocido por nuestra calidad, innovación y compromiso social."
              />
              <AccordionItem
                title="Nuestros valores"
                content={[
                  "• Compromiso: con nuestros clientes, trabajadores y el país.",
                  "• Innovación: mejora continua en productos y procesos.",
                  "• Calidad: excelencia en cada detalle.",
                  "• Responsabilidad: social y medioambiental.",
                  "• Trabajo en equipo: colaboración para crecer juntos.",
                ]}
              />
              <AccordionItem
                title="Liderazgo"
                content=""
                leaders={[
                  {
                    name: "Idián Chávez Fernández",
                    image: "/images/imagesAboutUs/lider1.png",
                    shortDescription:
                      "Ser el grupo empresarial líder en Cuba en soluciones para el hogar y la industria, reconocido por nuestra calidad, innovación y compromiso.",
                    fullDescription:
                      "Ser el grupo empresarial líder en Cuba en soluciones para el hogar y la industria, reconocido por nuestra calidad, innovación y compromiso social.",
                  },
                  {
                    name: "José Osmani Castillo Mató",
                                      image: "/images/imagesAboutUs/lider1.png",
                    shortDescription:
                      "Ser el grupo empresarial líder en Cuba en soluciones para el hogar y la industria, reconocido por nuestra calidad, innovación y compromiso.",
                    fullDescription:
                      "Ser el grupo empresarial líder en Cuba en soluciones para el hogar y la industria, reconocido por nuestra calidad, innovación y compromiso social.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}
