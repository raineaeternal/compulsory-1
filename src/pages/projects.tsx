import "../fonts.scss";
import "../App.scss"
import { Link } from "react-router";

export default function Projects() {
    return (
        <>
            <div className="flex flex-col justify-items-center mx-auto min-w-[375px] md:max-w-[768px] lg:max-w-[1024px]">
                <div>
                    <h1 className="text-5xl ibm-plex-mono-regular">
                        Projects
                    </h1>
                    <p className="text-2xl ibm-plex-mono-light">
                        These are a mixture of projects I've worked on over my time as a developer.
                    </p>
                </div>

                <section className="mt-4 mb-4">
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
                        <p className="pl-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum accusantium excepturi, vel vitae maiores nemo ea, ab sint eos totam exercitationem non tempora blanditiis placeat rerum voluptatibus architecto libero.
                            Quaerat ab natus excepturi eos at, veniam alias nulla, commodi, recusandae voluptatum magnam optio voluptatem ipsum nesciunt perspiciatis reiciendis iusto. Quam enim beatae quo ea ducimus incidunt temporibus accusantium doloribus!
                            Iusto voluptate pariatur dolorem facere reprehenderit nihil numquam nostrum ad cumque est laudantium vero corporis dolore, praesentium atque ducimus. Non quo itaque alias magni, odit reprehenderit quod iusto earum voluptatibus?
                            Temporibus, aliquam odit. Quidem minus nesciunt aspernatur qui nihil. Aperiam amet dolor commodi, nostrum hic dolorum. Quos dolor consequatur officiis libero neque mollitia ex voluptatum, fuga, facilis quod sunt atque.
                            Quas, itaque ut deleniti corporis sunt illum ipsam hic eos obcaecati cum praesentium labore quibusdam possimus! Ratione consequuntur amet quis commodi enim eum a nam. Ab provident voluptatum nisi cupiditate!
                        </p>

                        <Link className="btn-secondary p-4 rounded-l text-black mt-2" to="http://github.com/TournamentTools/compsaber-backend">Project Source</Link>
                    </div>
                </section>

                <section className="mt-4 mb-4">
                    <div>
                        <h2 className="text-4xl ibm-plex-mono-regular">
                            TournamentTools
                        </h2>
                        <p className="text-sm ibm-plex-mono-regular">
                            Role: System/Flow Engineer
                        </p>
                        <p className="pl-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum accusantium excepturi, vel vitae maiores nemo ea, ab sint eos totam exercitationem non tempora blanditiis placeat rerum voluptatibus architecto libero.
                            Quaerat ab natus excepturi eos at, veniam alias nulla, commodi, recusandae voluptatum magnam optio voluptatem ipsum nesciunt perspiciatis reiciendis iusto. Quam enim beatae quo ea ducimus incidunt temporibus accusantium doloribus!
                            Iusto voluptate pariatur dolorem facere reprehenderit nihil numquam nostrum ad cumque est laudantium vero corporis dolore, praesentium atque ducimus. Non quo itaque alias magni, odit reprehenderit quod iusto earum voluptatibus?
                            Temporibus, aliquam odit. Quidem minus nesciunt aspernatur qui nihil. Aperiam amet dolor commodi, nostrum hic dolorum. Quos dolor consequatur officiis libero neque mollitia ex voluptatum, fuga, facilis quod sunt atque.
                            Quas, itaque ut deleniti corporis sunt illum ipsam hic eos obcaecati cum praesentium labore quibusdam possimus! Ratione consequuntur amet quis commodi enim eum a nam. Ab provident voluptatum nisi cupiditate!
                        </p>
                        <Link to="https://github.com/tournamenttools" className="btn-secondary p-4 rounded-l text-black mt-2">Project Source</Link>
                    </div>
                </section>

                <section className="mt-4 mb-4">
                    <div>
                        <h2 className="text-4xl ibm-plex-mono-regular">
                            SaberQuest
                        </h2>
                        <p className="text-sm ibm-plex-mono-regular">
                            Role: Full Stack (Backend focus)
                            Stack: Express TypeScript with Knex backend, NextJS frontend
                        </p>
                        <p className="pl-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum accusantium excepturi, vel vitae maiores nemo ea, ab sint eos totam exercitationem non tempora blanditiis placeat rerum voluptatibus architecto libero.
                            Quaerat ab natus excepturi eos at, veniam alias nulla, commodi, recusandae voluptatum magnam optio voluptatem ipsum nesciunt perspiciatis reiciendis iusto. Quam enim beatae quo ea ducimus incidunt temporibus accusantium doloribus!
                            Iusto voluptate pariatur dolorem facere reprehenderit nihil numquam nostrum ad cumque est laudantium vero corporis dolore, praesentium atque ducimus. Non quo itaque alias magni, odit reprehenderit quod iusto earum voluptatibus?
                            Temporibus, aliquam odit. Quidem minus nesciunt aspernatur qui nihil. Aperiam amet dolor commodi, nostrum hic dolorum. Quos dolor consequatur officiis libero neque mollitia ex voluptatum, fuga, facilis quod sunt atque.
                            Quas, itaque ut deleniti corporis sunt illum ipsam hic eos obcaecati cum praesentium labore quibusdam possimus! Ratione consequuntur amet quis commodi enim eum a nam. Ab provident voluptatum nisi cupiditate!
                        </p>
                        <Link to="https://github.com/saber-quest" className="btn-secondary p-4 rounded-l text-black">Project Source</Link>
                    </div>
                </section>
            </div>
        </>
    );
}