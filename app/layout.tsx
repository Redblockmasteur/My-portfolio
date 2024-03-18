import Link from "next/link"; 
import "../styles/globals.css";
import Image from "next/image";
import { AnalyticsWrapper } from './components/analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <Link href ="/">
    <header className="text-center bg-slate-800 p-8 my-6 rounded-xl">
      <div>
          <Image src="/logo.png" width={40} height={40} className="mx-auto object-cover rounded-lg h-16 w-16" alt={"logo"}/>
          <h1 className="text-3xl text-white">Antoine Chatelain</h1>
          <p className="text-slate-300 mt-1">Étudiant en 3ème année à JUNIA ISEN</p>
      </div>
    </header>
    </Link> 
  )
 
  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400 flex justify-around items-center">
        <p className="mr-2">Voir le code sur <a className="hover:underline text-gray-500" href="https://github.com/Redblockmasteur/My-blog">GitHub</a></p>
        <a href="https://bff.ecoindex.fr/redirect/?url=https://antoine-chatelain.vercel.app/">
          <img src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://antoine-chatelain.vercel.app/" alt="EcoIndex Badge" />
        </a>
      </div>
    </footer>
  );
  

  return (
    <html lang="fr">
      <head/>
      <body>
        <div className="mx-auto max-w-3xl px-6">
          {header}
          {children}
          {footer}
        </div>  
        <AnalyticsWrapper/>
      </body>
    </html>
  )
}
