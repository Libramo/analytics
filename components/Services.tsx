import { Badge } from "@/components/ui/badge";
import { serviceItems } from "@/data";
import ServiceCard from "./ui/ServiceCard";

export const Services = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>{/* <Badge>Platform</Badge> */}</div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-6xl md:text-6xl tracking-tighter max-w-xl font-regular text-left">
              Nos services
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Nos services sont conçus pour répondre aux besoins spécifiques de
              votre organisation, en combinant expertise technique et
              compréhension approfondie des enjeux de développement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <ServiceCard
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
