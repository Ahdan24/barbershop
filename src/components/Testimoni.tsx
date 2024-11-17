import { TestiMarquee } from "./TestiMarquee";

const Testimoni = () => {
  return (
    <section className="text-3xl font-bold px-10 bg-gray-800">
      <div className="flex justify-center text-white">
        <h1>Customer satisfaction</h1>
      </div>

      <div className=" pt-10">
        <TestiMarquee />
      </div>
    </section>
  );
};

export default Testimoni;
