import Link from "next/link";
import Hero from "../_components/_hero";

export default function Home() {
    return (
        <>
            <Hero>
                <h1 className="text-2xl justify-center">
                    <span className="text-4xl text-primary">hi!</span> <span className="text-2xl">i'm</span> <span className="text-2xl text-secondary">Raine.</span>
                </h1>
                <p>
                    i'm a game modder, developer and general development enthusiast.<br /><br />

                    i work on numerous projects throughout my free time, including the creation of the website you are currently visiting. <br />
                    some of the projects I've worked on in the past include <Link className="text-primary font-bold" href="https://github.com/Saber-Quest" rel="noopener noreferrer" target="_blank">SaberQuest</Link>, <Link className="text-primary font-bold" href="https://github.com/raineaeternal/Quest-SongCore" rel="noopener noreferrer" target="_blank">SongCore</Link> for Beat Saber on the Meta Quest and many others, which you can find in my <Link className="text-primary font-bold" href="/projects" >projects</Link> page.
                </p>
            </Hero>
        </>
    );
}
