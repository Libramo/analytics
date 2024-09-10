import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Cta = () => (
  <div className="w-full py-10 lg:py-10 bg-muted">
    <div className="container mx-auto">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div className="flex flex-col gap-2">
          <h2 className=" text-5xl md:text-6xl font-semibold  text-left   tracking-tighter max-w-xl font-regular">
            Besoins de conseils ?
          </h2>
          <h3 className="text-2xl">Contactez nous dès aujourd&apos;hui</h3>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4 text-xl">
            Nous contacter <MoveRight className="w-3 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
