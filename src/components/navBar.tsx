import { Link } from "react-router";
import "../App.scss";
import "../fonts.scss";

export default function NavBar() {
    return (
        <div className="bg-transparent flex items-center justify-between p-2 shadow-lg">
            <div className="flex items-center">
                <img className="mr-4 size-16 rounded-lg" src="../../public/FrontPunchIn.png" alt="Image of Raine's avatar" />
            </div>
            <div className="flex space-x-4 ibm-plex-mono-regular">
                <div className="hover:text-white rounded-md p-4 btn-primary">
                    <Link to="/ffxiv">Final Fantasy XIV</Link>
                </div>
                <div className="hover:text-white rounded-md p-4 btn-primary">
                    <Link to="/smash" >Super Smash Bros.</Link>
                </div>
                <div className="hover:text-white rounded-md p-4 btn-primary">
                    <Link to="/development" >Development Projects</Link>
                </div>
            </div>
        </div>
    );
}