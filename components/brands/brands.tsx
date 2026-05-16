import { brandsData } from '@/data/brandsData';
import CardProduct from '../cardProduct/cardProduct';


export default function Brands() {
  return (
    <>
      <div className="w-full bg-linear-to-br from-[#1D3D75] via-dark to-dark py-16">
        <div className="flex items-center justify-center text-white font-bold">
          <div>
            <h2 className="text-secondary text-center text-3xl">Nuestras marcas </h2>
            <div>
              <h3 className="text-5xl mt-4">"Diversidad de soluciones, un solo compromiso"</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-20">
          {brandsData.map((brand) => (
            <CardProduct
              key={brand.brandAlt}
              productImage={brand.productImage}
              productAlt={brand.productAlt}
              brandImage={brand.brandImage}
              brandAlt={brand.brandAlt}
              brandWidth={brand.brandWidth}
              brandHeight={brand.brandHeight}
              description={brand.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}