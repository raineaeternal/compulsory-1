import { projects } from "../../_components/project";

export default function Projects() {
    return (
        <>
            <div className="flex flex-col gap-10 text-white w-[1024px] items-start">
                {projects
                    .filter((proj) => proj.pending === false)
                    .map((proj, idx) => (
                        <div>
                            <h2 className="text-white font-semibold" key={idx}>{proj.title}</h2>
                            <p>Stack: {proj.stack}</p>
                            <span>{proj.description}</span>
                        </div>
                    ))}
            </div>
        </>
    );
}