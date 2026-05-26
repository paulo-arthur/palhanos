import fs from "fs";
import path from "path";

export function getPostData(slug) {
    const mdPath = path.join(process.cwd(), `src/content/posts/${slug}.md`);
    const data = fs.readFileSync(mdPath, "utf8");
    return data;
}