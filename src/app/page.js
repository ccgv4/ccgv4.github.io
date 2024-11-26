import Image from "next/image";
import TypewriterField from "./helper";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col pt-8 gap-8 items-center justify-items-center">
        <div className="flex items-center justify-center">
          <Image
            className="dark:invert justify-center items-center"
            src="/typewriter.svg"
            alt="Typewriter logo"
            width={120}
            height={120}
            priority
          />
        </div> 
        <div className="list-inside list-decimal text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          TYPEWRITER TEST
        </div>
        <TypewriterField></TypewriterField>
      </main>
    </div>
  );
}
