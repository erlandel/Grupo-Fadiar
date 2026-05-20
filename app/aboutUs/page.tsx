import CorporatePillarsAboutUS from "@/components/corporatePillarsAboutUS/corporatePillarsAboutUS";
import MetricsAboutUs from "@/components/metricsAboutUs/metricsAboutUs";
import OurStoryAboutUs from "@/components/ourStoryAboutUs/ourStoryAboutUs";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function FadiarGroup() {
  return (
    <>
      <div className="mx-20 mt-10">
        <div className="flex text-xl">
          <p>
            <Link href="/">Inicio</Link>
          </p>
          <ChevronRight className="h-6 w-6" />
          <p>Grupo Fadiar</p>
        </div>
        <div className="mt-10">
          <h1 className="text-5xl font-bold text-dark">Grupo Fadiar</h1>
        </div>
      </div>

      <div>
        <MetricsAboutUs />
      </div>

      <div>
        <OurStoryAboutUs />
      </div>

<div>
  <CorporatePillarsAboutUS />
</div>

    </>
  );
}
