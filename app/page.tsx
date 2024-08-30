import { AboutUs } from "@/components/AboutUs";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Cta />
      <Partners />
      <Footer />
    </main>
  );
}
