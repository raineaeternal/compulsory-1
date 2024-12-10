import { projects } from "../../_components/project";

export default function Projects() {
    return (
        <>
            <div>
                { projects.map((proj, idx) => {
                    return (
                        <h2 key={idx}>{proj.title}</h2>
                    );
                } )}
            </div>
        </>
    );
}