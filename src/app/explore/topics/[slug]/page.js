import { getPostsMetadata } from "@/app/lib/posts";
import Menu from "@/components/Menu/Menu";
import Publication from "@/components/Publication/Publication";

export default async function TopicPage({params}) {
    const { slug } = await params;
    const posts = getPostsMetadata();

    return (
        <main className="w-3/5 flex flex-col justify-center">
            <Menu />
            {posts.map((post) => {
                return (
                    <Publication 
                    key={posts.indexOf(post)}
                    data={post}  
                    />
                );
            })}
        </main>
    );
}