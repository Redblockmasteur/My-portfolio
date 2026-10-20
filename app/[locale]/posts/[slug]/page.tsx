import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    if (!fs.existsSync(file)) {
        notFound();
    }
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug
    }));
};

const PostPage = async (props: { params: Promise<{ slug: string }> }) => {
    const { slug } = await props.params;
    const t = await getTranslations('post');
    const post = getPostContent(slug);
    return (
    <div>
        <div className="my-10 text-center">
            <h2 className="text-3xl md:text-5xl text-slate-600">{post.data.title}</h2>
            <p className="text-lg text-slate-500 mt-2">{post.data.date}</p>
            <p>{post.data.flagEmoji}</p>
        </div>

        <article className="prose min-w-fit text-justify text-lg">
            <Markdown>{post.content}</Markdown>
        </article>
        <div className="text-center mt-8">
            <a className="hover:bg-sky-900 border rounded-lg bg-sky-700 p-2 text-white font-semibold" href="/">{t('backToProjects')}</a>
        </div>
    </div>
  );
};

export default PostPage;
