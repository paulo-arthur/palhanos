import { getPostsMetadata } from "@/app/lib/posts";
import slugfy from "@/app/lib/slugfy";
import Menu from "@/components/Menu/Menu";
import Publication from "@/components/Publication/Publication";

export default async function TopicPage({params}) {
    const { slug } = await params;
    const posts = getPostsMetadata();
    console.log(slug, posts);

    return (
        <main className="w-4/5 md:w-3/5 flex flex-col justify-center">
            <Menu />
            {posts.map((post) => {
                if ((post.tags).map(post => slugfy(post)).includes(slug)) {
                    return (
                        <Publication 
                        key={posts.indexOf(post)}
                        data={post}
                        />
                    );
                }
            })}
        </main>
    );
}