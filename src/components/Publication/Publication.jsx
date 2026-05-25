export default function Publication() {
    return (
        <article className="w-full flex justify-between my-5 pb-5 border-b border-solid border-gray-800">
            <div>
                <h1 className="text-base md:text-lg ">Lorem Ipsum</h1>
                <p className=" my-2 text-xs md:text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sequi nihil iste, porro.
                </p>
                <div className="flex justify-start">
                    <span className="text-gray-500 text-xs md:text-xs mr-4">tag</span>
                    <span className="text-gray-500 text-xs md:text-xs mr-4">tag</span>
                </div>
            </div>

            <time className="text-gray-500 text-xs md:text-sm">2026-05-26</time>
        </article>
    );
}