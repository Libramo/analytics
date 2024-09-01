import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Hero = () => (
  <div className="w-full py-20 lg:py-28">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 lg:space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-left">
            Transformez vos données en décisions stratégiques
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight text-muted-foreground max-w-lg text-left">
            Nous sommes une équipe d&apos;experts en analyse de données,
            statistiques, et évaluation de projets. Découvrez comment nous
            pouvons vous aider à atteindre vos objectifs.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="gap-4">
              Découvrez nos services <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-muted rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/strategy.jpeg"
              alt="strategy"
              width={683}
              height={1024}
              className="object-cover object-center h-[800px] lg:h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
