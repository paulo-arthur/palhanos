import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/content/posts");

export function getPostsMetadata() {
    const files = fs.readdirSync(postsDir);
    const posts = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const filePath = path.join(postsDir, fileName);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        return {
            slug: slug,
            title: data.title,
            subtitle: data.subtitle,
            tags: data.tags,
            date: data.date
        };
    });

    return posts;
}