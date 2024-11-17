import Image from "next/image";
import { Button } from "./ui/button";

const AboutUs = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 pt-8 bg-gray-800 text-white">
      <div className="flex justify-center md:justify-start px-4 md:px-10">
        <Image
          src="/B-BarberShop-AboutUs.webp"
          alt="Image-of-AboutUs"
          width={500}
          height={260}
          className="w-full max-w-md md:max-w-full"
        />
      </div>

      <div className=" mt-6 md:mt-0 col-span-1 md:col-span-2 px-4 sm:px-0">
        <p className="font-bold text-center md:text-left mx-10">
          Learn About Us
        </p>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center md:text-left mt-2 md:mt-4 mx-10 text-blue-500 ">
          15 Years Experience
        </h1>
        <div>
          <p className="mx-10 mt-5 md:mt-10 text-sm sm:text-base md:line-clamp-6 text-justify line-clamp-5">
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

          <p className=" my-5 mx-10 md:line-clamp-6 line-clamp-5">
            We also prioritize quality in everything we do. From our top-tier
            grooming products to our meticulous attention to detail, we go above
            and beyond to make sure you leave looking sharp and feeling
            confident. Our goal is to give each client a memorable experience
            that keeps them coming back, not just for a haircut, but for the
            community and comfort we provide. At B-BarberShop, every client is a
            part of our story. We’re honored to be a part of your journey, and
            we’re here to make sure you look and feel ready for whatever comes
            next. So come in, relax, and let us take care of you – because at
            B-BarberShop, great style is just the beginning.
          </p>

          <div className="mx-10 flex justify-center md:justify-start">
            <Button  className="bg-blue-500 hover:bg-red-500 rounded-xl text-white text-center">
              Learn More !
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
