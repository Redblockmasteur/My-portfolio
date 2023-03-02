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
    <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <div>
          <Image src="/logo.png" width={40} height={40} className="mx-auto" alt={"logo"}/>
          <h1 className="text-3xl text-white">Bienvenue sur mon portfolio</h1>
          <p className="text-slate-300 mt-1"> Antoine Chatelain étudiant en 2ème année à JUNIA Adimaker</p>
      </div>
    </header>
    </Link> 
  )
 
  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <p>Voir le code sur <a className=" hover:underline text-gray-500" href="https://github.com">GitHub</a></p>
      </div>
    </footer>
  )

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
            {header}
            {children}
            {footer}
        </div>  
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
