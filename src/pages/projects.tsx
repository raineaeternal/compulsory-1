import "../fonts.scss";
import "../App.scss"

export default function Projects() {
    return (
        <>
            <div className="flex flex-col justify-items-start">
                <h1 className="text-5xl ibm-plex-mono-regular">
                    Projects
                </h1>
                <p className="text-2xl ibm-plex-mono-light">
                    These are a mixture of projects I've worked on over my time as a developer.
                </p>
            </div>

            <section>
                <div>
                    <h2 className="text-4xl ibm-plex-mono-regular">
                        CompSaber
                    </h2>
                    <p className="text-sm ibm-plex-mono-light-italic">
                        Name pending
                    </p>

                    <p className="text-xl ibm-plex-mono-regular">
                        Role: Backend/Database
                    </p>
                    <div className="btn-secondary p-4 rounded-l text-black mt-2 fit-content">
                        <a href="http://github.com/Saber-Quest/">Project Source</a>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h2 className="text-4xl ibm-plex-mono-regular">
                        SaberQuest
                    </h2>
                    <p className="text- ibm-plex-mono-regular">
                        Role: Full Stack (Backend focus")
                    </p>
                </div>
            </section>

            <section>
                <div>
                    <h2 className="text-4xl ibm-plex-mono-regular">
                        TournamentTools
                    </h2>
                    <p className="text- ibm-plex-mono-regular">
                        Role: System/Flow Engineer
                    </p>
                </div>
            </section>
        </>
    );
}