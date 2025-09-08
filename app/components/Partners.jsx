import Image from "next/image";

export default function Partners() {
    return (
        <section className="bg-[#DEEEFF]">
            <div className="max-w-6xl m-auto px-6 md:px-10 lg:px-5 pt-8 pb-12 ">
                <h2 className="text-center text-2xl font-semibold">Partners</h2>

                <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-4 lg:gap-8">
                    <Image
                        src="/Unilever.png"
                        alt="Unilever"
                        width={100}
                        height={100}
                        className="w-24 h-24 md:w-16 md:h-16 lg:w-24 lg:h-20 object-contain"
                    />
                    <Image
                        src="/nestle.png"
                        alt="Nestle"
                        width={100}
                        height={100}
                        className="w-24 h-24 md:w-16 md:h-16 lg:w-24 lg:h-20 object-contain"
                    />
     
                    <Image
                        src="/UBA-logo.png"
                        alt="UBA"
                        width={100}
                        height={100}
                        className="w-24 h-24 md:w-16 md:h-16 lg:w-24 lg:h-20 object-contain"
                    />
                    <Image
                        src="/NHIS-logo.png"
                        alt="NHIS"
                        width={100}
                        height={100}
                        className="w-24 h-24 md:w-16 md:h-16 lg:w-24 lg:h-20 object-contain"
                    />
                    <Image
                        src="/Dangote.png"
                        alt="Dangote"
                        width={100}
                        height={100}
                        className="w-24 h-24 md:w-16 md:h-16 lg:w-24 lg:h-20 object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
