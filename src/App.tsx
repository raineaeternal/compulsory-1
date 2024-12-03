import { lazy } from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
const FFXIV = lazy(async () => import("./pages/ffxiv.tsx"));
const NavBar = lazy(async () => import("./components/navBar.tsx"));
const FrontPage = lazy(async () => import("./pages/frontPage.tsx"));
const Smash = lazy(async () => import("./pages/smash.tsx"));
const Projects = lazy(async () => import("./pages/projects.tsx"));

function Home() {
  return (
    <>
    <div className="mx-auto min-w-[375px] md:max-w-[768px] lg:max-w-[1024px]">
      <NavBar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/ffxiv" element={<FFXIV />} />
        <Route path="/smash" element={<Smash />} />
        <Route path="/development" element={<Projects />} />
      </Routes>
    </div>
    </>
  );
}

export default Home;
