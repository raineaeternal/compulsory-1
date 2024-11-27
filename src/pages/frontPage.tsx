import { lazy } from "react";

const NavBar = lazy(async () => import("../components/navBar.tsx"));

export default function FrontPage() {
    return (
        <>
            <NavBar />
            <h1>This is me.</h1>
        </>
    );
}