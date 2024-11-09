import Image from "next/image";

export function SocialMediaFooter(){
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-purple"
                href="https://letterboxd.com/MoGame11/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/social-media/letterboxd.svg"
                    alt="Letterboxd icon"
                    width={20}
                    height={20}
                />
                Letterboxd
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-blue"
                href="https://musescore.com/user/31276892"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/social-media/musescore.svg"
                    alt="Discord icon"
                    width={32}
                    height={32}
                    className="dark:invert-0 invert"
                />
                MuseScore
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-red"
                href="https://www.instagram.com/mogame11/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/social-media/instagram.svg"
                    alt="Instagram icon"
                    width={20}
                    height={20}
                    className="dark:invert-0 invert"
                />
                Instagram
            </a>
        </footer>
    )
}