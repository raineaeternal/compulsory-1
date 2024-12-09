"use client";

import Link from "next/link";

export function NavBar() {
  return (
    <>
      <div className="flex flex-row align-middle items-center justify-between bg-inherit bg-blend-darken">
        <div className="m-4">
          <img className="mr-4 size-16 rounded-lg sm:[w-4 h4] md:[w-8 h-8] lg:[w-12 h-12]" src="/FrontPunchIn.png" alt="Punch in of Raine's FFXIV avatar" />
        </div>
        <div className="flex space-x-4 text-[#ffffff] pr-5">
          <Link className="bg-[#DD1155] pt-2 pb-2 pr-4 pl-4 rounded-[8px]" href="/ffxiv">FFXIV</Link>
          <Link className="bg-[#DD1155] pt-2 pb-2 pr-4 pl-4 rounded-[8px]" href="/ffxiv">Projects</Link>
          <Link className="bg-[#DD1155] pt-2 pb-2 pr-4 pl-4 rounded-[8px]" href="/ffxiv">Smash</Link>
          <Link className="bg-[#DD1155] pt-2 pb-2 pr-4 pl-4 rounded-[8px] hover:bg-transparent hover:transition-all ease-in-out duration-[250ms] outline-4 outline-[#DD115500] hover:outline-[#DD1155]" href="/ffxiv">FFXIV</Link>
        </div>
      </div>
    </>
  );
}
