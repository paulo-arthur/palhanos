import { getPostData } from "@/app/lib/getPostData";
import Menu from "@/components/Menu/Menu";

export default async function TopicPage({params}) {
    const { slug } = await params;

    return (
        <main className="w-3/5 flex flex-col justify-center">
            <Menu />
        </main>
    );
}