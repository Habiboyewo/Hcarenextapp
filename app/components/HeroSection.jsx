import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="relative w-full h-[78vh] md:h-[85vh] lg:h-screen">
 
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hcareherophoto.jpg')" }}
      />

    
      <div className="absolute inset-0 bg-black/20" />

     
      <section className="relative z-10 flex items-center h-full">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-5 w-full">
          <div className="bg-white/50 rounded-md p-5 md:p-6 lg:p-10 max-w-md md:max-w-2xl lg:max-w-3xl">
            <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl leading-snug text-gray-900">
              Your Health Is Our Priority
            </h1>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dignissim pulvinar netus
              velit cursus erat nulla amet in. Consequat tincidunt sit elit amet
              mattis tincidunt libero vestibulum sit. Tempor sagittis habitant
              vitae rhoncus neque commodo sociis mollis quam.
            </p>
            <Link href="/bookappointment">
              <button className="mt-6 bg-blue-600 text-white rounded-md px-6 py-2 md:px-8 md:py-2 text-sm md:text-base lg:text-lg font-medium hover:bg-blue-700 transition">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
