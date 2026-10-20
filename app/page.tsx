import getPostMetadata from 'components/getPostMetadata';
import PostPreview from 'components/PostPreview';
import Link from 'next/link';



const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
      ));

    return(
      <div>
        <div className='border rounded-lg p-2 mb-4'>
          <p className=' text-2xl m-1'>👋 Bienvenue sur mon nouveau portfolio.</p>
          <p className=' text-justify text-lg'>Ancien Admimaker, en première année du cycle ingénieur à L&apos;ISEN Lille. <br />Adimaker étant une classe préparatoire basée sur l&apos;apprentissage par projet, je présente ci-dessous certains des projets que j&apos;ai réalisés dans le cadre de ma formation ou pendant mon temps libre.</p>
          <p className=' mt-3 text-lg'>Mon profil vous intéresse ? N&apos;hésitez pas à me <Link className='underline text-sky-700 hover:text-sky-500' href="/contact">contacter</Link>.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postPreviews}</div>
      </div>
    );
  };

export default HomePage;
