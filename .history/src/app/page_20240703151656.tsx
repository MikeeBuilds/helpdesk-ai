import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4">
          <span className="text-orange bg-orange/20 px-4 py-2 rounde-">

          </span>
        </div>
      </section>
    </main>
  );
}
