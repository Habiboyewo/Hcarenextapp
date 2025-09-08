import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
export default async function OurConsultantComp() {
   
  const ourConsultnts = await prisma.consultant.findMany({ take: 3 });

  return (
    <section className="bg-[#DEEEFF]">
      <div className="max-w-6xl m-auto px-8 md:px-10 lg:px-5 pt-8 pb-12">
        <h2 className="mt-5 text-center font-medium text-2xl ">
          Our Consultants
        </h2>
        <p className="my-2 md:mb-10 text-center">
          Lorem ipsum dolor sit amet consectetur. Quisque et et vitae dolor.
          Vitae nunc feugiat mattis euismod aliquam tempor purus. Duis praesent
          vel duis in sagittis commodo sed amet. Risus pretium odio tortor
          sapien erat aliquam nunc netus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center ">
          {ourConsultnts.map((consultant) => (
            <div
              key={consultant.id}
              className="shadow-md hover:shadow-lg rounded-md w-full max-w-xs overflow-hidden pt-8  "
            >
              <Image
                src={consultant.image}
                alt={consultant.name}
                width={90}
                height={90}
                className=" block mx-auto -mb-11 object-cover rounded-full "
              />
              <div className="pt-12 text-center bg-white/70 p-5 h-30 md:h-33 lg:h-30 -mb-2">
                <h3 className="text-base text-sm font-medium">
                  {consultant.name}
                </h3>
                <p className="text-gray-600 ">{consultant.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt- text-right mt-3">
          <Link href="*" className="text-blue-600 text-sm hover:underline ">
            Read more...
          </Link>
        </div>
      </div>
    </section>
  );
}
