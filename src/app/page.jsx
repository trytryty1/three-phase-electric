import Image from "next/image";
import Hero from "@/components/Hero";
import OfferedServices from "@/components/OfferedServices";
import ScheduleService from "@/components/ScheduleService";

export default function Home() {
  return (
    <>
      <Hero />
      <OfferedServices />
      <ScheduleService />
    </>
  );
}
