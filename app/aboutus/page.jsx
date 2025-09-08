import Image from "next/image";

export default function AboutUsPage() {
    return (
        <main className="max-w-6xl mx-auto px-6 md:px-10 lg:px-5 pt-12 pb-20">
           
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                About Us
            </h1>

          
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
                
                <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet consectetur. Tempus sed congue urna varius
                        cras. Quam nisl orci sed aliquam mi etiam. Amet nulla nisl arcu nulla
                        in. Arcu id donec sit aliquet nisl. Nunc justo commodo at dictum amet
                        feugiat hendrerit. Tristique massa scelerisque lectus commodo tempor
                        et lacus. Adipiscing enim enim a leo tortor aliquam.
                    </p>
                </div>

             
                <div className="flex justify-center">
                    <Image
                        src="/aboutusimage.png"
                        alt="About us"
                        width={450}
                        height={350}
                        className="rounded-lg object-cover"
                    />
                </div>
            </section>

            
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Elit non aliquet odio amet
                    viverra maecenas ac. Augue faucibus tincidunt consequat leo. Ut a neque
                    dictum habitasse fermentum pharetra iaculis diam. Suspendisse amet
                    pretium faucibus sem fermentum neque ac. Tristique malesuada morbi nunc
                    accumsan odio. Dictum lectus lobortis aenean non suspendisse nullam
                    erat ut eu. Ut feugiat arcu odio varius fringilla. Curabitur vivamus
                    vestibulum imperdiet vel enim. Neque purus elit ut egestas odio. In
                    sollicitudin tempor massa quis id. Ac sit aliquet orci fusce pretium
                    risus sem sodales.
                </p>
            </section>

          
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Elit non aliquet odio amet
                    viverra maecenas ac. Augue faucibus tincidunt consequat leo. Ut a neque
                    dictum habitasse fermentum pharetra iaculis diam. Suspendisse amet
                    pretium faucibus sem fermentum neque ac. Tristique malesuada morbi nunc
                    accumsan odio. Dictum lectus lobortis aenean non suspendisse nullam
                    erat ut eu. Ut feugiat arcu odio varius fringilla. Curabitur vivamus
                    vestibulum imperdiet vel enim. Neque purus elit ut egestas odio. In
                    sollicitudin tempor massa quis id. Ac sit aliquet orci fusce pretium
                    risus sem sodales.
                </p>
            </section>

            <section>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Our Core Values
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Elit non aliquet odio amet
                    viverra maecenas ac. Augue faucibus tincidunt consequat leo. Ut a neque
                    dictum habitasse fermentum pharetra iaculis diam. Suspendisse amet
                    pretium faucibus sem fermentum neque ac. Tristique malesuada morbi nunc
                    accumsan odio. Dictum lectus lobortis aenean non suspendisse nullam
                    erat ut eu. Ut feugiat arcu odio varius fringilla. Curabitur vivamus
                    vestibulum imperdiet vel enim. Neque purus elit ut egestas odio. In
                    sollicitudin tempor massa quis id. Ac sit aliquet orci fusce pretium
                    risus sem sodales.
                </p>
            </section>
        </main>
    );
}
