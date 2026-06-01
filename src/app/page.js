import Menu from "@/components/Menu/Menu";
import Publication from "@/components/Publication/Publication";
import { getPostsMetadata } from "./lib/posts";

export default function Home() {
  const posts = getPostsMetadata();
  
  return (
    <main className="w-4/5 md:w-3/5 flex flex-col justify-center items-center">
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