import PaginationSection from "@/components/PaginationSection";
import ServiceList from "@/components/ServiceList";
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
    <main className="text-white bg-gray-800">
      <ServiceList barbers={barbers.data} />
      <PaginationSection limit={barbers.meta.limit} total={barbers.meta.total} />
    </main>
  );
}
