const HeroSection = () => {
  return (
    <section
      className="relative h-screen w-full bg-center bg-cover"
      style={{ backgroundImage: "url('/Bg-HeroSection.avif')" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 h-full">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-white animate-bounce">
            <span className="text-red-500">B</span>-BarberShop
          </h1>
          <h1 className="font-bold text-4xl md:text-5xl text-white mt-5">
            <span className="text-blue-500">Step In for Style, </span>Step Out
            with Confidence!
          </h1>

          <p className="mt-10 line-clamp-6 text-white text-justify">
            Welcome to B-BarberShop, where style meets tradition. Established
            with a passion for grooming and a commitment to excellence, our
            barbershop is a place where every client feels valued and leaves
            looking their best. Our team of skilled barbers combines classic
            techniques with modern trends to offer precision cuts, sharp fades,
            and tailored styles for every personality and lifestyle. At
            B-BarberShop, we believe a great haircut is more than just the look
            — it's about the experience. From the moment you step in, our
            welcoming atmosphere and attention to detail create a space where
            you can relax, unwind, and enjoy a grooming service tailored just
            for you. We're here to help you look sharp and feel confident every
            day. Whether you're looking for a traditional shave, a contemporary
            style, or just a quick refresh, we're dedicated to delivering the
            highest quality service in a place that feels like home. Join us for
            your next haircut and discover why our clients keep coming back.
            Your look, your style — at B-BarberShop.
          </p>
        </div>

        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default HeroSection;
