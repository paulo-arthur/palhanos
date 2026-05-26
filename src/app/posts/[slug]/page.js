import { getPostData } from "@/app/lib/getPostData";
import Menu from "@/components/Menu/Menu";

export default async function PostPage({params}) {
    const { slug } = await params;
    const data = getPostData(slug);
    return (
        <main className="">
            <Menu />
            <h1>{data}</h1>
        </main>
    );
}