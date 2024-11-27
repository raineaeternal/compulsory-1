import { Link } from "react-router";

export default function NavBar() {
    return (
        <div className="bg-amber-700 flex items-center justify-between p-2">
            <div className="flex items-center">
                <img src="" alt="Image of Raine's avatar" className="mr-4" />
            </div>
            <div className="flex space-x-4">
                <Link to="/ffxiv" className="hover:text-white">Final Fantasy XIV</Link>
                <Link to="#" className="hover:text-white">Super Smash Bros.</Link>
                <Link to="#" className="hover:text-white">Development Projects</Link>
            </div>
        </div>
    );
}