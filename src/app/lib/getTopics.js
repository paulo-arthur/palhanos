import { getPostsMetadata } from "./posts";


export default function getTopics() {
    const posts = getPostsMetadata();
    var topics = {};
    
    posts.forEach((post) => {
            post.tags.forEach((tag) => {
                if (!(tag in topics)) {
                    topics[tag] = [];
                }
                topics[tag].push(post.slug);
            });
    });

    return topics;
}