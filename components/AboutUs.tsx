import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const AboutUs = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
          <Image
            src="/abut-us-image.jpeg"
            alt="about-us-image"
            width={1024}
            height={1024}
            className="rounded-lg"
          />
        </div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>{/* <Badge>Platform</Badge> */}</div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Nous sommes une jeune équipe dynamique spécialisée dans
              l&apos;analyse de données, les statistiques, l&apos;évaluation de
              projets, et bien plus encore. Notre objectif est de vous
              accompagner dans la transformation de vos données en actions
              concrètes et stratégiques. Grâce à notre expertise en machine
              learning, en IT, et en recherche, nous offrons des solutions sur
              mesure pour optimiser vos projets.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
