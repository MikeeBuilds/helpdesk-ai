import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4">
          <span className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm">
             An AI powered sales assistant chatbot
          </span>
          <Image
            src="/images/corinna-ai-logo.png"
            width={500}
            height={100}
            alt="Corinna AI Logo"
            className="max-w-lg object-contain"
          />
          <p>
            <Button className="bg-orange font-bold text-white px-4">
              Start For Free
            </Button>
            <Image
             src="/images/iphonecorinna.png"
             width={400}
             height={100}
             alt="Logo"
             className="max-w-lg object-contain"
            />
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
         <h2 className="text-4xl text"></h2>
      </section>
    </main>
  );
}
