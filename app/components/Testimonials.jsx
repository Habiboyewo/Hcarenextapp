import prisma from "@/lib/prisma";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

export default async function Testimonials() {
  const testimonials = await prisma.testimonial.findMany();

  return (
    <section className="bg-[#DEEEFF]">
      <div className="max-w-6xl m-auto px-6 md:px-10 lg:px-5 pt-8 pb-12 ">
        <h2 className="text-center text-2xl font-semibold mb-8">
          Testimonials
        </h2>


        <div className="mx-6 sm:mx-38 md:mx-0 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center bg-white/40 rounded-lg shadow-sm overflow-hidden"
            >

              <div className="px-6 pt-4 ">
                <span className="text-[30px] text-[#0474ED]">
                  <RiDoubleQuotesL />
                </span>


                <div className="my-2 text-center">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-[18px] inline-block"
                        color="gold"
                      />
                    ))}
                </div>

                <p className="text-center text-gray-600 mb-7">
                  {testimonial.testimony}
                </p>
              </div>


              <div className="relative w-full">

                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={70}
                  height={70}
                  className="w-[80px] h-[80px] object-cover absolute left-1/2 -translate-x-1/2 -top-5 rounded-full z-1"
                />

                <div className="h-[140px] relative">
                  <svg
                    viewBox="0 0 260 140"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full text-[#0474ED]"
                  >
                    <path
                      d="M0,30 Q50,0 120,20 T260,14 L260,140 L0,140 Z"
                      fill="currentColor"
                    />
                  </svg>


                  <div className="relative pt-18 text-center text-white">
                    <h6 className="font-semibold">{testimonial.name}</h6>
                    <p className="text-sm">{testimonial.job}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
