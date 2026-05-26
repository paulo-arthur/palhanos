import Menu from "@/components/Menu/Menu";

export default function({params}) {
    return (
        <main className="">
            <Menu />
            <h1>{params.slug}</h1>
        </main>
    );
}