import {
    Card,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
import { Barber } from "@/type/barber"
import Image from "next/image"
import { FC } from "react"
  
interface SevicesCardProps {
    barber: Barber
}

const ServicesCard: FC<SevicesCardProps> = ({barber}) => {
  return (
    <Card className="mb-4">
  <CardHeader>
    <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
        <Image src={barber.thumbnail} alt="thumbnail" fill className="hover:scale-105 duration-150"/>
    </div>
  </CardHeader>
 
 <h2 className="my-2 flex justify-center text-lg font-bold">{barber.title}</h2>
<p className="line-clamp-5 mx-7">{barber.description}</p>
<CardFooter className="flex justify-center mt-4">
    <p>{ barber.price}</p>
</CardFooter>
</Card>

  )
}

export default ServicesCard