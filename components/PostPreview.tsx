import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link className="border border-slate-300 p-4 rounded-md shadow-sm bg-white" href={`posts/${props.slug}`}>
        <Image className="min-w-full rounded-lg" src={`/images/${props.slug}.png`} width={500} height={0} alt={"Projects img"}/>
        <h2 className=" mt-2 text-black text-2xl hover:underline mb-4">{props.title}</h2>
        <p className=" p-botom-6 text-slate-700">{props.subtitle}</p>
        <p className="text-sm text-slate-400">{props.date}</p>
    </Link>
  );
};

export default PostPreview;
