import { lazy } from "react";
import "./App.scss";
const FrontPage = lazy(async () => import("./pages/frontPage.tsx"));

function Home() {
  return (
    <>
      <FrontPage />
      <section>
        <h1>
          This is everything I've done
        </h1>
      </section>
    </>
  );
}

export default Home;
