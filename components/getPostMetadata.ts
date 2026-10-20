const FR_FLAG_EMOJI = '\\uD83C\\uDDEB\\uD83C\\uDDF7';
const UK_FLAG_EMOJI = '\\uD83C\\uDDEC\\uD83C\\uDDE7';

import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from 'components/PostMetadata';

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/"
    const files = fs.readdirSync(folder);
    const markdownPost = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPost.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        const language = matterResult.data.language;
        let flagEmoji = '';
        if (language === 'fr') {
            flagEmoji = FR_FLAG_EMOJI;
        } else if (language === 'en') {
            flagEmoji = UK_FLAG_EMOJI;
        }
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            language: language,
            slug: fileName.replace(".md", ""),
            flagEmoji: flagEmoji
        };
    });

    posts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    return posts;
};

export default getPostMetadata;
