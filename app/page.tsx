import Carousel from "@/components/carousel/carousel";
import DiscoverOurGroup from "@/components/discoverOurGroup/discoverOurGroup";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Carousel />
        </div>
     
     <div className="mt-10 mb-10">
      <DiscoverOurGroup/>
     </div>


      </div>
    </>
  );
}
