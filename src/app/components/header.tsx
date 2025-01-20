import Link from "next/link";

export function Header() {
    return (
        <header className="flex items-center justify-center w-full gap-4">
            <p className="text-xs sm:text-lg leading-tight text-purple flex-1 text-center sm:text-left">
                MoGame11
            </p>

            <h1>
                <Link className="font-bold text-2xl sm:text-3xl leading-tight text-blue text-center flex-none"
                      href="/">
                    MORITZ SIMET
                </Link>
            </h1>
            <p className="text-xs sm:text-lg leading-tight text-red flex-1 text-center sm:text-right">
                StyPal
            </p>
        </header>
    );
}