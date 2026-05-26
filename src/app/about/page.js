import Menu from "@/components/Menu/Menu";

export default function AboutPage() {
    return (
        <main className="w-3/5 flex flex-col justify-center">
            <Menu />
            <article className="">
                <h1 className="text-base md:text-2xl">Sobre</h1>
                <p className="text-sm md:text-base text-gray-500 my-5">
                    Naturalmente, a minha vontade de aprender tecnologias e conceitos da área de computação
                    me leva a vasculhar várias documentações, postagens, artigos e textos. Isso costumava criar
                    uma certa bagunça descentralizando as minhas anotações. Claro, eu poderia usar qualquer aplicação
                    de notas que me daria muito mais funcionalidades que esse blog, mas é quase metalinguístico criar
                    um app para registrar meu aprendizado sobre tecnologia. <br />
                    Foi daí que surgiu a ideia de construir o palhanos, servindo basicamente como um bloco de notas virtual. < br/>
                    Sigamos.
                </p>
            </article>
        </main>
    );  
}