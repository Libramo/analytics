"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { logoPartners } from "@/data";
import Image from "next/image";

export const Partners = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-10">
          <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Nos partenaires
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {logoPartners.map((logo, index) => (
                <CarouselItem
                  className="mx-auto gap-0 basis-1/4 lg:basis-1/6"
                  key={index}
                >
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      height={512}
                      width={512}
                      className="w-full h-full object-contain"
                    />
                    {/* <span className="text-sm">{logo.name}</span> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
