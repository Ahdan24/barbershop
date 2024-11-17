import ServicesCard from "@/components/ServicesCard";
import { Barber } from "@/type/barber";
import { FC } from "react";

interface BarberListProps {
  barbers: Barber[];
}

const ServiceList: FC<BarberListProps> = ({ barbers }) => {
  return (
    <section className="container mx-auto px-10 bg-gray-800 text-white">
      <h1 className="text-2xl md:text-3xl font-bold flex justify-center pt-8 md:pt-10">
        Services of B-Barbershop
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 md:py-10">
        {barbers?.map((barber, index) => (
          <ServicesCard key={index} barber={barber}/>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
