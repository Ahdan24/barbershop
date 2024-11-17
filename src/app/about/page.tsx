import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CardProps {
  title?: string;
  content: string | React.ReactNode;
  imageSrc?: string;
  bgColor?: string;
  titleStyle?: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  content,
  imageSrc,
  bgColor = "bg-white",
  titleStyle = "",
}) => {
  return (
    <Card className={bgColor}>
      <CardHeader>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title || "Card image"}
            width={400}
            height={300}
          />
        ) : (
          title && (
            <p
              className={`text-3xl flex justify-center font-bold ${titleStyle}`}
            >
              {title}
            </p>
          )
        )}
      </CardHeader>
      <CardContent>
        <div className="text-center">{content}</div>
      </CardContent>
    </Card>
  );
};

const About = () => {
  return (
    <section className="pt-8 gap-6 bg-gray-800">
      <div className="mt-6 md:mt-0 col-span-1 md:col-span-2 px-4 sm:px-0">
        <p className="font-bold text-center md:text-left mx-10 text-white">
          Learn About Us
        </p>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center md:text-left mt-2 md:mt-4 mx-10 text-blue-500">
          15 Years Experience
        </h1>
        <div>
          <p className="text-white mx-10 mt-5 md:mt-10 text-sm sm:text-base text-justify">
            Welcome to – B-BarberShop where craftsmanship meets community.
            Founded on a love for grooming and a dedication to quality, we’re
            more than just a barbershop. We’re a place where tradition and style
            come together, B-BarberShop and where every client is treated like
            family. Here, every haircut is more than just a service; it’s an
            experience crafted with skill, care, and attention to detail. Our
            barbers are experienced professionals with a passion for their
            craft. With years of experience and a keen eye for style, they blend
            traditional barbering techniques with contemporary trends, ensuring
            each cut and shave is tailored to bring out the best in you. Whether
            you’re after a classic cut, a sharp fade, or something entirely new,
            our team works with you to find a look that matches your personality
            and lifestyle. We understand that a barbershop is more than just a
            place to get a haircut – it’s a space to relax, unwind, and connect.
            From the moment you walk through our doors, you’re greeted with a
            warm welcome and a friendly atmosphere designed to make you feel at
            home. Enjoy a refreshment, have a chat, or simply sit back while our
            barbers do what they do best. Our space is a hub where friends are
            made, stories are shared, and each visit leaves you looking and
            feeling your best. We also prioritize quality in everything we do.
            From our top-tier grooming products to our meticulous attention to
            detail, we go above and beyond to make sure you leave looking sharp
            and feeling confident. Our goal is to give each client a memorable
            experience that keeps them coming back, not just for a haircut, but
            for the community and comfort we provide. At B-BarberShop, every
            client is a part of our story. We’re honored to be a part of your
            journey, and we’re here to make sure you look and feel ready for
            whatever comes next. So come in, relax, and let us take care of you
            – because at B-BarberShop, great style is just the beginning.
          </p>
        </div>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardComponent
            title="VISION"
            content={
              <p className=" text-white">
                To be the leading barbershop in our community, known for
                exceptional grooming experiences, a welcoming atmosphere, and a
                commitment to elevating the art of barbering.
              </p>
            }
            bgColor="bg-slate-600"
            titleStyle="text-blue-500"
          />

          <CardComponent
            imageSrc="/ceo-B-barberShop.png"
            title="Our Executive Officer"
            content={
              <p className="text-blue-500 text-2xl font-bold">
                Our Executive Officer
              </p>
            }
            bgColor="bg-slate-600"
          />

          <CardComponent
            title="MISION"
            content={
              <ul className="list-disc list-inside text-start text-white">
                <li>
                  Craft Excellence: Deliver high-quality haircuts, grooming
                  services, and styling tailored to each client’s unique
                  personality and preferences.
                </li>
                <li>
                  Customer-Centric Experience: Create a comfortable and
                  inclusive environment where every client feels valued and
                  appreciated.
                </li>
                <li>
                  Innovation & Tradition: Blend modern techniques with timeless
                  barbering traditions to stay ahead of trends while honoring
                  the craft.
                </li>
                <li>
                  Community Impact: Support the local community by fostering
                  connections, promoting self-confidence, and inspiring
                  individuality through grooming.
                </li>
              </ul>
            }
            bgColor="bg-slate-600"
            titleStyle="text-blue-500"
          />

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
