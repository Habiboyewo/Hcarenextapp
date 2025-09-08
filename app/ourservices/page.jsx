import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function ServicesPage() {

    const services = await prisma.service.findMany();

    return (
        <section >
            <div className="max-w-6xl m-auto px-6 md:px-10 lg:px-5 pt-12 pb-20">

                <h1 className="text-3xl font-bold text-center mb-15 mt-8">Our Services</h1>
               


                <div className="space-y-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="md:flex md:items-start md:gap-8"
                        >

                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={250}
                                className="w-full md:w-1/3 h-[200px] object-cover rounded-md shadow"
                            />


                            <div className="mt-4 md:mt-0 md:flex-1">
                                <h2 className="text-2xl font-semibold">{service.title}</h2>
                                <p className="text-gray-600 mt-2 text-sm md:text-base">
                                    {service.description.substring(0, 300)}...
                                </p>
                                <Link
                                    href={`/ourservices/${service.id}`}
                                    className="block mt-3 text-right text-blue-600 hover:underline text-sm font-medium"
                                >
                                    More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
