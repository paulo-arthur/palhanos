import Link from "next/link";

export default function Publication({data}) {
    return (
        <article className="w-full flex justify-between my-5 pb-5 border-b border-solid border-gray-800">
            <div>
                <h1 className="text-base md:text-lg hover:text-emerald-600">
                    <Link href={`/posts/${data.slug}`} className="">
                        {data.title}
                    </Link>
                </h1>
                <p className=" my-2 text-sm md:text-base text-gray-500">
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

            <time className="my-auto text-gray-500 text-xs">{data.date}</time>
        </article>
    );
}