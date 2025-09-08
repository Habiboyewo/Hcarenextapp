import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function ServiceComponent() {
  const services = await prisma.service.findMany({ take: 3 });
  return (
    <section>
      <div className="max-w-6xl m-auto px-8 md:px-10 lg:px-5">
        <h2 className="mt-5 text-center font-medium text-2xl">Our Services</h2>
        <p className="mb-6 mt-3 text-center">
          Lorem ipsum dolor sit amet consectetur. Quisque et et vitae dolor.
          Vitae nunc feugiat mattis euismod aliquam tempor purus. Duis praesent
          vel duis in sagittis commodo sed amet. Risus pretium odio tortor
          sapien erat aliquam nunc netus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {services.map((service) => (
            <div key={service.id}>
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="rounded w-100 "
              />
              <h3 className="font-medium mt-2 text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm w-full">
                {service.description.substring(0, 50)}...
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3 text-right mb-8">
          <Link href="*" className="text-blue-600 text-sm hover:underline ">
            Read more...
          </Link>
        </div>
      </div>
    </section>
  );
}
