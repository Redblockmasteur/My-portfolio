import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
    <div>
        <div className="my-10 text-center">
            <h2 className=" text-5xl text-slate-600 ">{post.data.title}</h2>
            <p className=" text-lg text-slate-500 mt-2">{post.data.date}</p>
        </div>

        <article className="prose min-w-fit text-justify">
            <Markdown>{post.content}</Markdown>
        </article>
        <div className="text-center mt-8">
            <a className=" hover:bg-sky-900 border rounded-lg bg-sky-700 p-2 text-white font-semibold" href="/">Retour aux projets</a>
        </div>
        <div className="aspect-w-16 aspect-h-9 hidden">
        </div>
        <div className="hidden sm:block"></div>
        <div className="visible sm:hidden"></div>
    </div>
  );
};

export default PostPage;