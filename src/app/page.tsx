import Link from "next/link";

import { LatestPost, NavBar } from "~/app/_components/navbar";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <div className="h-full w-full min-h-full w-min-[375px] md:w-min-[768px] lg:w-min-[1024px] bg-[#353535]">
      <HydrateClient>
        <NavBar />
      </HydrateClient>
    </div>
  );
}
