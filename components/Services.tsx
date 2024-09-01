import { Badge } from "@/components/ui/badge";
import { serviceItems } from "@/data";
import ServiceCard from "./ui/ServiceCard";
import { HoverEffect } from "./ui/HoverEffect";

export const Services = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-16">
        <div className="flex gap-6 flex-col items-start">
          <div>{/* <Badge>Platform</Badge> */}</div>
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-left">
              Nos services
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-left">
              Nos services sont conçus pour répondre aux besoins spécifiques de
              votre organisation, en combinant expertise technique et
              compréhension approfondie des enjeux de développement.
            </p>
          </div>
        </div>
        <div>
          <HoverEffect items={serviceItems} />
        </div>
      </div>
    </div>
  </div>
);
