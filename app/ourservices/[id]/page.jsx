import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function ServiceDetailPage({ params }) {
    const service = await prisma.service.findUnique({
        where: { id: parseInt(params.id) },
        include: { consultants: true },
    });

    if (!service) {
        return (
            <div className="max-w-6xl m-auto px-6 py-12">
                <h1 className="text-xl font-semibold">Service not found!</h1>
            </div>
        );
    }

    return (
        <div className="max-w-6xl m-auto px-6 pt-12 pb-20">
           
            <div className="mb-6">
                <Link
                    href="/services"
                    className="text-blue-600 hover:underline text-sm font-medium"
                >
                    ← Back to Services
                </Link>
            </div>

            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
            <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={400}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-md mb-6"
            />
            <p className="text-gray-700 leading-relaxed">{service.description}</p>

            {service.consultants && service.consultants.length > 0 && (
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-center mb-8">
                        Our Consultants
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
                        {service.consultants.map((consultant) => (
                            <div
                                key={consultant.id}
                                className="shadow-sm hover:shadow-md rounded-md w-full max-w-xs overflow-hidden pt-8 bg-white/70"
                            >
                                <Image
                                    src={consultant.image}
                                    alt={consultant.name}
                                    width={90}
                                    height={90}
                                    className="block mx-auto -mb-11 object-cover rounded-full"
                                />
                                <div className="pt-12 text-center bg-[#DEEEFF]/50 p-5 h-30 md:h-33 lg:h-30 -mb-2">
                                    <h3 className="text-base text-sm font-medium">
                                        {consultant.name}
                                    </h3>
                                    <p className="text-gray-600">{consultant.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
