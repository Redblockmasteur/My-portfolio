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
          <p className=' text-justify text-lg'>Ancien Admimaker, en permière année du cycle ingénieur à L'ISEN Lille. <br />Adimaker étant une classe préparatoire basée sur l'apprentissage par projet, je présente ci-dessous certains des projets que j'ai réalisés dans le cadre de ma formation ou pendant mon temps libre.</p>
          <p className=' mt-3 text-lg'>Mon profil vous intéresse ? N'hésitez pas à me <a className='underline text-sky-700 hover:text-sky-500' href="/contact">contacter</a>.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postPreviews}</div>
      </div>
    );
  };

export default HomePage;
