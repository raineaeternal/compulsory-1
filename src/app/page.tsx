import { NavBar } from "./_components/navbar";


export default async function Home() {
  return (
    <div className="h-full w-full min-h-screen w-min-[375px] md:w-min-[768px] lg:w-min-[1024px]">
      <NavBar />        
    </div>
  );
}
