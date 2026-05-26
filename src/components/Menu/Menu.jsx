import Link from "next/link";

export default function Menu() {    
    return (
        <main className="w-full border-b border-solid border-gray-800 mt-20 mb-12">
            <h1 className="text-base md:text-2xl">palhanos</h1>
            <p className="w-2/3 text-gray-500 my-3">
                Documentando meu aprendizado em forma de blog/portfólio. Notas do que estudo, aprendo e construo.</p>
            <nav className="w-full mt-14 mb-5">
                <ul className="flex justify-start">
                    <li className="mr-5"><Link className="hover:text-emerald-600" href="/">Explorar</Link></li>
                    <li className="mr-5"><Link className="hover:text-emerald-600" href="#">Tópicos</Link></li>
                    <li className="mr-5"><Link className="hover:text-emerald-600" href="/about">Sobre</Link></li>
                </ul>
            </nav>
        </main>
    );
}