import Menu from "@/components/Menu/Menu";
import Publication from "@/components/Publication/Publication";

export default function Home() {
  return (
    <main className="w-3/5 flex flex-col justify-center items-center">
      <Menu />
      <Publication />
      <Publication />
    </main>
  );
}