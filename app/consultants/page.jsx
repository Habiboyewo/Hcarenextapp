import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function ConsultantsPage() {

    const consultants = await prisma.consultant.findMany();


    const groupedConsultants = consultants.reduce((groups, consultant) => {
        const role = consultant.role || "Other";
        if (!groups[role]) {
            groups[role] = [];
        }
        groups[role].push(consultant);
        return groups;
    }, {});

    return (
        <section className="max-w-6xl m-auto px-6 md:px-10 lg:px-5 pt-12 pb-20">

            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
                Consultants
            </h2>
            <p className="text-gray-700 text-sm md:text-base text-center leading-relaxed mb-10">
                Lorem ipsum dolor sit amet consectetur. Odio vulputate non amet urna.
                Leo egestas velit mauris sem urna dapibus pulvinar. Fermentum dui lacus
                pretium sed adipiscing non urna amet. Hendrerit vitae lectus et turpis.
                Integer sodales sit aliquam risus. Proin odio tortor quam quam mattis
                eleifend tempus. Eget duis cum mauris aliquam adipiscing in nec.
            </p>


            <div className="space-y-12">
                {Object.entries(groupedConsultants).map(([role, group]) => (
                    <div key={role}>
                        <h3 className="text-xl md:text-2xl font-semibold mb-8  text-center ">
                            {role}
                        </h3>


                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                            {group.map((consultant) => (
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


                                    <div className="pt-12 text-center bg-[#DEEEFF]/50 p-5  h-30 md:h-33 lg:h-30 -mb-2">
                                        <h3 className="text-base md:text-lg font-medium">
                                            {consultant.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{consultant.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
