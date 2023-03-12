const FR_FLAG_EMOJI = '\u{1F1EB}\u{1F1F7}'; // Code Unicode pour le drapeau de la France
const UK_FLAG_EMOJI = '\u{1F1EC}\u{1F1E7}'; // Code Unicode pour l'Union Jack


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

    // Sort posts by date (descending order)
    posts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    return posts;
};

export default getPostMetadata;
