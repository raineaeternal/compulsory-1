import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="text-white fixed bottom-0 left-[100%] flex flex-col items-center align-middle justify-center bg-jet/10 bg-blend-darken">
                you can contact me using the following media
                <div className="flex flex-row justify-start space-x-1 pb-2">
                    <p>
                        <img className="w-6 h-6 inline-block" src="https://img.icons8.com/color/48/000000/email.png" alt="Email" />
                        <span className="inline-block"> </span>
                        <Link href="mailto:raine@aeternal.dev" target="_blank" rel="noopener noreferrer" className="inline-block">raine@aeternal.dev</Link>
                    </p>
                    <p>
                        <img className="w-6 h-6 inline-block" src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
                        <span className="inline-block"> </span>
                        <Link href="https://twitter.com/raineaeternal" target="_blank" rel="noopener noreferrer" className="inline-block">@raineaeternal</Link>
                    </p>
                    <p>
                        <img className="w-6 h-6 inline-block" src="https://img.icons8.com/color/48/000000/discord-logo.png" alt="Discord" />
                        <span className="inline-block"> </span>
                        <Link href="https://discordapp.com/users/your-discord-id" target="_blank" rel="noopener noreferrer" className="inline-block">raineaeternal</Link>
                    </p>
                </div>
            </div>
        </>
    );
}