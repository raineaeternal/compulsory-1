import { Link } from "react-router";
import "../App.scss";
import "../fonts.scss";

export default function NavBar() {
    return (
        <div className="bg-transparent flex items-center justify-between p-2 shadow-lg">
            <div className="flex items-center">
                <img className="mr-4 size-16 rounded-lg" src="/FrontPunchIn.png" alt="Image of Raine's avatar" />
            </div>
            <div className="flex space-x-4 ibm-plex-mono-regular">
                <Link to="/ffxiv" className="hover:text-white rounded-md p-4 btn-primary">Final Fantasy XIV</Link>
                <Link to="/smash" className="hover:text-white rounded-md p-4 btn-primary">Super Smash Bros.</Link>
                <Link to="/development" className="hover:text-white rounded-md p-4 btn-primary">Development Projects</Link>
            </div>
        </div>
    );
}