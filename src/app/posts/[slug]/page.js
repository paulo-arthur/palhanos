import { getPostData } from "@/app/lib/getPostData";
import Menu from "@/components/Menu/Menu";
import ReactMarkdown from "react-markdown";

export default async function PostPage({params}) {
    const { slug } = await params;
    const data = getPostData(slug);
    return (
        <main className="w-3/5">
            <Menu />
            <ReactMarkdown
                components={{

                    h1: ({ children }) => (

                        <h1 className="
                            text-5xl
                            font-bold
                            mt-16
                            mb-8
                            text-white
                            tracking-tight
                        ">
                            {children}
                        </h1>
                    ),

                    h2: ({ children }) => (

                        <h2 className="
                            text-4xl
                            font-semibold
                            mt-14
                            mb-6
                            text-zinc-100
                        ">
                            {children}
                        </h2>
                    ),

                    h3: ({ children }) => (

                        <h3 className="
                            text-3xl
                            font-semibold
                            mt-12
                            mb-4
                            text-zinc-200
                        ">
                            {children}
                        </h3>
                    ),

                    h4: ({ children }) => (

                        <h4 className="
                            text-2xl
                            font-medium
                            mt-10
                            mb-4
                            text-zinc-200
                        ">
                            {children}
                        </h4>
                    ),

                    p: ({ children }) => (

                        <p className="
                            text-zinc-300
                            leading-8
                            text-lg
                            mb-6
                        ">
                            {children}
                        </p>
                    ),

                    strong: ({ children }) => (

                        <strong className="
                            text-white
                            font-semibold
                        ">
                            {children}
                        </strong>
                    ),

                    em: ({ children }) => (

                        <em className="
                            italic
                            text-zinc-200
                        ">
                            {children}
                        </em>
                    ),

                    blockquote: ({ children }) => (

                        <blockquote className="
                            border-l-4
                            border-zinc-600
                            pl-6
                            py-2
                            my-8
                            italic
                            text-zinc-400
                        ">
                            {children}
                        </blockquote>
                    ),

                    ul: ({ children }) => (

                        <ul className="
                            list-disc
                            pl-8
                            mb-6
                            space-y-3
                            text-zinc-300
                        ">
                            {children}
                        </ul>
                    ),

                    ol: ({ children }) => (

                        <ol className="
                            list-decimal
                            pl-8
                            mb-6
                            space-y-3
                            text-zinc-300
                        ">
                            {children}
                        </ol>
                    ),

                    li: ({ children }) => (

                        <li className="
                            leading-8
                        ">
                            {children}
                        </li>
                    ),

                    a: ({ href, children }) => (

                        <a

                            href={href}

                            className="
                                text-blue-400
                                hover:text-blue-300
                                underline
                                transition-colors
                            "

                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {children}
                        </a>
                    ),

                    hr: () => (

                        <hr className="
                            border-zinc-700
                            my-12
                        "/>
                    ),

                    table: ({ children }) => (

                        <div className="overflow-x-auto my-8">

                            <table className="
                                w-full
                                border-collapse
                                text-left
                            ">
                                {children}
                            </table>

                        </div>
                    ),

                    thead: ({ children }) => (

                        <thead className="
                            bg-zinc-800
                        ">
                            {children}
                        </thead>
                    ),

                    th: ({ children }) => (

                        <th className="
                            border
                            border-zinc-700
                            px-4
                            py-3
                            text-zinc-100
                            font-semibold
                        ">
                            {children}
                        </th>
                    ),

                    td: ({ children }) => (

                        <td className="
                            border
                            border-zinc-700
                            px-4
                            py-3
                            text-zinc-300
                        ">
                            {children}
                        </td>
                    ),

                    img: ({ src, alt }) => (

                        <img

                            src={src}
                            alt={alt}

                            className="
                                rounded-2xl
                                my-10
                                w-full
                            "
                        />
                    ),

                    inlineCode: ({ children }) => (

                        <code className="
                            bg-zinc-800
                            text-zinc-100
                            px-2
                            py-1
                            rounded
                            text-sm
                        ">
                            {children}
                        </code>
                    ),

                    pre: ({ children }) => (

                        <pre className="
                            bg-zinc-900
                            border
                            border-zinc-800
                            rounded-2xl
                            p-6
                            overflow-x-auto
                            my-8
                        ">
                            {children}
                        </pre>
                    ),

                    code: ({ children }) => (

                        <code className="
                            text-zinc-200
                            text-sm
                            leading-7
                            font-mono
                        ">
                            {children}
                        </code>
                    )
                }}

            >
                {data}
            </ReactMarkdown>
        </main>
    );
}