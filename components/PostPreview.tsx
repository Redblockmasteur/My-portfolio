import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link className="border border-slate-300 p-4 rounded-md drop-shadow-md hover:drop-shadow-xl bg-white" href={`posts/${props.slug}`}>
        <Image
          className="w-full rounded-lg"
          src={`/images/${props.slug}.png`}
          width={500}
          height={300}
          sizes="(max-width: 768px) 100vw, 500px"
          alt="Projects img"
        />
        <h2 className=" mt-2 text-black text-2xl hover:underline mb-4">{props.title}</h2>
        <p className=" p-botom-6 text-slate-700">{props.subtitle}</p>
        <p className="text-sm text-slate-400">{props.date}</p>
        <p className="text-xl">{props.flagEmoji}</p>
    </Link>
  );
};

export default PostPreview;
