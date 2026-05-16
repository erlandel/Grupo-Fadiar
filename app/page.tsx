import Brands from "@/components/brands/brands";
import Carousel from "@/components/carousel/carousel";
import DiscoverOurGroup from "@/components/discoverOurGroup/discoverOurGroup";
import Promotions from "@/components/promotions/promotions";
import SupportAndWarranty from "@/components/supportAndWarranty/supportAndWarranty";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Carousel />
        </div>

        <div className="mt-10 mb-10">
          <DiscoverOurGroup />
        </div>

        <div>
          <Brands />
        </div>

        <div>
          <Promotions />
        </div>

        <div>         
         <SupportAndWarranty />
        </div>

      </div>
    </>
  );
}
