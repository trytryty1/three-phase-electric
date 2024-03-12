import Image from "next/image";
import Hero from "@/components/Hero";
import OfferedServices from "@/components/OfferedServices";
import ScheduleService from "@/components/ScheduleService";
import Hours from "@/components/Hours";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <OfferedServices />
      <Hours />
      <Gallery />
      <ScheduleService />
    </main>
  );
}
