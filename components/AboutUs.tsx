import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";

export const AboutUs = () => (
  <div id="#" className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        {/* Image Section */}
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
          <Image
            src="/abut-us-image.jpeg"
            alt="about-us-image"
            width={1024}
            height={1024}
            className="rounded-lg object-cover h-full w-full"
          />
        </div>

        {/* Text Content */}
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
          {/* Optional Badge or Label */}
          <div>{/* <Badge>Platform</Badge> */}</div>

          {/* Title and Description */}
          <div className="flex gap-2 flex-col">
            <h2 className="text-2xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              Nous sommes une jeune équipe dynamique spécialisée dans
              l&apos;analyse de données, les statistiques, l&apos;évaluation de
              projets, et bien plus encore. Notre objectif est de vous
              accompagner dans la transformation de vos données en actions
              concrètes et stratégiques. Grâce à notre expertise en machine
              learning, en IT, et en recherche, nous offrons des solutions sur
              mesure pour optimiser vos projets.
            </p>
          </div>

          {/* Additional Information or CTA */}
          <div className="flex flex-col gap-4">
            <p className="text-base text-muted-foreground">
              Nous croyons en l&apos;innovation et en la collaboration pour
              créer des solutions qui répondent aux défis actuels. Notre équipe
              travaille étroitement avec vous pour comprendre vos besoins
              uniques et offrir des services adaptés.
            </p>
            <Button variant="default" className="self-start">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
