export default function Locations() {
    return (
        <section >
            <div className="max-w-6xl m-auto px-8 md:px-10 lg:px-5 pt-8 pb-12">
                <h2 className="text-center text-2xl font-semibold mb-6">Locations</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                    <Location locationName="AGEGE" />
                    <Location locationName="VICTORIA ISLAND" />
                    <Location locationName="AJAH" />
                </div>
            </div>
        </section>
    );
}

function Location({ locationName }) {
    return (
        <div className="border border-[#D9D9D9] shadow-sm rounded-md w-full max-w-xs p-6 text-center">
            <div>
                <h5 className="text-xl font-semibold mb-2">{locationName}</h5>
                <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
            </div>
            <button className="bg-[#0474ED] text-white mt-6 w-full py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition">
                GET DIRECTIONS
            </button>
        </div>
    );
}
