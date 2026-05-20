import { supportItems } from "@/data/dataSupportItems";

export default function SupportAndWarrantyHome() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="mx-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-secondary font-semibold text-3xl mb-4">Soporte y Garantía</h3>
          <h2 className="text-3xl md:text-5xl font-black text-dark mb-8">
            POR QUÉ ESCOGER GRUPO FADIAR
          </h2>
        </div>

        {/* Grid de items */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {supportItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="flex gap-4 ">
                {/* Icon + Title */}
                  <IconComponent className="w-18 h-18 text-dark shrink-0" />
                <div className="flex flex-col  gap-3 mb-4 mt-4">
                  <h3 className="text-3xl font-bold text-dark">{item.title}</h3>
                <p className="text-gray-700 text-xl leading-relaxed">{item.description}</p>
                </div>

                {/* Description */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}