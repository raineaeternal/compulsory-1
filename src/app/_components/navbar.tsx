"use client";

import Link from "next/link";

export function NavBar() {
  return (
    <>
      <div className="flex flex-row align-middle mx-auto w-full items-center justify-between bg-transparent bg-blend-darken top-0 sticky">
        <div className="m-4">
          <Link href="/">
            <img className="mr-4 size-16 rounded-lg sm:[w-4 h4] md:[w-8 h-8] lg:[w-12 h-12]" src="/FrontPunchIn.png" alt="Punch in of Raine's FFXIV avatar" />
          </Link>
        </div>
        <div className="flex space-x-4 text-[#ffffff] pr-5">
          <Link className="bg-primary text-xl sm:text-base md:text-lg pt-2 pb-2 pr-4 pl-4 rounded-[8px] transition-all ease-in-out duration-200 outline-4 outline outline-primary/0 hover:outline-primary/100 hover:bg-primary/10" href="/ffxiv">FFXIV</Link>
          <Link className="bg-primary pt-2 pb-2 pr-4 pl-4 rounded-[8px] transition-all ease-in-out duration-200 outline-4 outline outline-primary/0 hover:outline-primary/100 hover:bg-primary/10" href="/projects">Projects</Link>
        </div>
      </div>
    </>
  );
}
