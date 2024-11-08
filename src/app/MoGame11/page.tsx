import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <header className="flex items-center justify-center w-full gap-4">
                <Link className="text-sm sm:text-lg leading-tight text-colors-purple flex-1 text-center sm:text-left" href="/MoGame11">
                    MoGame11
                </Link>

                <Link className="font-bold text-xl sm:text-3xl leading-tight text-colors-blue text-center flex-none" href="/">
                    MORITZ SIMET
                </Link>

                <Link className="text-sm sm:text-lg leading-tight text-colors-red flex-1 text-center sm:text-right" href="/StyPal">
                    StyPal
                </Link>
            </header>

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                MoGame11
            </main>

            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-colors-purple"
                    href="https://letterboxd.com/MoGame11/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/social-media/letterboxd.svg"
                        alt="Letterboxd icon"
                        width={16}
                        height={16}
                    />
                    Letterboxd
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-colors-blue"
                    href="https://discordapp.com/users/325606075887910913"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/social-media/discord.svg"
                        alt="Discord icon"
                        width={16}
                        height={16}
                        className="invert-svg"
                    />
                    Discord
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-colors-red"
                    href="https://www.instagram.com/mogame11/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/social-media/instagram.svg"
                        alt="Instagram icon"
                        width={16}
                        height={16}
                        className="invert-svg"
                    />
                    Instagram
                </a>
            </footer>
        </div>
    );
}
