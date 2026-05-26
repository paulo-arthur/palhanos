import Link from "next/link";

export default function Publication({data}) {
    console.log(data)
    return (
        <article className="w-full flex justify-between my-5 pb-5 border-b border-solid border-gray-800">
            <div>
                <h1 className="text-base md:text-lg hover:text-emerald-600">
                    <Link href="#" className="">
                        {data.title}
                    </Link>
                </h1>
                <p className=" my-2 text-xs md:text-sm text-gray-500">
                    {data.subtitle}
                </p>
                <div className="flex justify-start">
                    {data.tags.map((tag) => (
                        <span key={data.tags.indexOf(tag)} className="text-gray-500 text-xs md:text-xs mr-4">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <time className="text-gray-500 text-xs md:text-sm">2026-05-26</time>
        </article>
    );
}