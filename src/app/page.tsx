import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import PaginationSection from "@/components/PaginationSection";
import ServiceList from "@/components/ServiceList";
import Testimoni from "@/components/Testimoni";
import { getEntries } from "@/lib/contentful";

interface HomeProps {
  searchParams: {[key: string]: string}
}

export default async function Home({searchParams}: HomeProps) {
  const barbers = await getEntries(Number(searchParams.page) || 1);
  if (!barbers) {
    return;
  }

  return (
    <main>
      <HeroSection />
      <AboutUs />
      <ServiceList barbers={barbers.data} />
      <Testimoni />
    </main>
  );
}
