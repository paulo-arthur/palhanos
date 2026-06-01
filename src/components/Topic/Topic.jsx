import slugfy from "@/app/lib/slugfy";
import Link from "next/link";

export default function Topic({data}) {
    return (
        <div className="w-full flex justify-between my-5 pb-5 border-b border-solid border-gray-800">
                <h1 className="text-base md:text-lg hover:text-emerald-600">
                    <Link href={`/explore/topics/${slugfy(data.title)}`} className="">
                        {(data.title.charAt(0).toUpperCase() + data.title.slice(1)).replace("-", "  ")}
                    </Link>
                </h1>

                <h1>
                    ( {data.count} )
                </h1>
        </div>
    );
}