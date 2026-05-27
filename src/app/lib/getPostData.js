import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPostData(slug) {
    const mdPath = path.join(process.cwd(), `src/content/posts/${slug}.md`);
    const rawData = fs.readFileSync(mdPath, "utf8");

    const { meta, content } = matter(rawData);
    return content;
}