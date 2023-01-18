import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      hey
      <div className="flex flex-col-reverse sm:flex-row items-start">
        hi
        <div className="flex flex-col pr-8">
          hello
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Matt Herzog
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Software Engineer @ <span className="font-semibold">Zealogics</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Software engineer expereince with fullstack developemnt
          </p>
        </div>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
          <Image
            alt="Lee Robinson"
            height={135}
            width={135}
            src="/pic.jpg"
            sizes="30vw"
            priority
            className="rounded-full"
          />
        </div>
      </div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        Links
      </h3>
      <div className="flex gap-6 flex-col md:flex-row">
        <button
          type="button"
          class="outline-style: solid; bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Hover me
        </button>
      </div>
    </div>
  );
}
