
const contact = (pops: any) => {
    return (
    <div>
        <p className=" text-justify text-lg">Si vous souhaitez me contacter pour une demande professionnelle ou personnelle, n'hésitez pas à m'envoyer un <a href="mailto:antoine.chatelain@student.junia.com" className="underline text-sky-700 hover:text-sky-500"> e-mail</a>. <br /> Vous pouvez également me trouver sur <a href="https://www.linkedin.com/in/chatelain-antoine/" className=" underline text-sky-700 hover:text-sky-500">LinkedIn</a>.</p>
        <p className=" mt-3 text-justify text-lg">N'hésitez pas à me connecter si vous souhaitez discuter de mes projets ou de mes expériences professionnelles. Je ferai de mon mieux pour répondre à votre message dans les plus brefs délais. <br /> Je vous remerci de l'intérêt que vous portez à mon travail.</p>
        <div className="text-center mt-8">
        <a className=" hover:bg-sky-900 border rounded-lg bg-sky-700 p-2 text-white font-semibold" href="/">Retour vers l'accueil</a>
        </div>
    </div>
  );
};
export default contact;