import { prefix } from "@/helper/prefixes";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[75rem] text-center sm:mb-0">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <div>
            <Image
              src={`${prefix}/assets/boy.png`}
              alt="boy"
              width={400}
              height={400}
              quality={100}
              priority={true}
              className="rounded-full shadow-xl object-cover"
            />
          </div>
        </div>

        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5]">
            Grow your business with a new website.
          </span>
          <p className="text-[14px]">
            Frontend is a full-service creative studio creating beautiful
            digital experience and products.
          </p>
        </h1>

        <div className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium">
          <Link
            href={"mailto:ankur.vasta@gmail.com"}
            className="group bg-gray-900 text-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
          >
            Connect <Mail color="#9ca3af" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ankur-vasta-910570226/"}
            target="__blank"
            className="group bg-gray-900 text-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
          >
            <BsLinkedin />
          </Link>
          <Link
            href={"https://github.com/ankur-2103"}
            target="__blank"
            className="group bg-gray-900 text-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
          >
            <BsGithub />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
