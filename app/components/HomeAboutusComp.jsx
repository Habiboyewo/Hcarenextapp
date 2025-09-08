import Image from "next/image";
import Link from "next/link";
export default function HomeAboutusComp() {
    return (
        <section>
            <div className="max-w-6xl m-auto px-8 md:px-10 lg:px-5 my-12" >
                <div className="md:flex gap-8  ">
                    <div className="px-4 md:px-0 md:w-1/2 md:justify-center md:flex md:flex-col ">
                        <h2 className="text-center md:text-start font-medium text-2xl mb-3">About Us</h2>

                        <p className="text-gray-700 leading-relaxe ">Lorem ipsum dolor sit amet consectetur. Placerat aliquam viverra sit duis fermentum elit. Quis sagittis morbi nisl sit. Hendrerit molestie fames tellus adipiscing id risus nunc. Eu quis nulla neque amet at eget etiam condimentum massa. Et sapien cras nullam adipiscing in purus ultricies. Neque nulla magnis at sit enim tellus vehicula in. Euismod est eu elementum tincidunt diam. Scelerisque porta aliquam amet aliquam.</p>
                    </div>
                    <div className="hidden md:flex md:w-1/2 justify-center items-center">
                        <Image
                            src="/Aboutusimage.png" alt="Aboutus image"
                            width={500}
                            height={500} className="max-w-full h-auto rounded-md" />

                    </div>
                </div>
                <div className="mt- text-right mt-3">
                    <Link href="*" className="text-blue-600 text-sm hover:underline ">
                        Read more...
                    </Link>
                </div>
            </div>
        </section>
    )
}