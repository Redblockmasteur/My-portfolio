import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from 'components/PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/"
    const files = fs.readdirSync(folder);
    const markdownPost = files.filter((file) => file.endsWith(".md"));

    // Get Title, Date, Subtitle, slug using gray-matter
    const posts = markdownPost.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
        };
    });

    // Sort posts by date (descending order)
    posts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    return posts;
};

export default getPostMetadata;
