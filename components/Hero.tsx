import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => (
  <div className="w-full  py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>{/* <Badge variant="outline">We&apos;re live!</Badge> */}</div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Transformez vos données en décisions stratégiques
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Nous sommes une équipe d'experts en analyse de données,
              statistiques, et évaluation de projets. Découvrez comment nous
              pouvons vous aider à atteindre vos objectifs
            </p>
          </div>
          <div className="flex flex-row gap-4">
            {/* <Button size="lg" className="gap-4" variant="outline">
              Découvrez nos services <PhoneCall className="w-4 h-4" />
            </Button> */}
            <Button size="lg" className="gap-4">
              Decouvrez nos services <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>
    </div>
  </div>
);
