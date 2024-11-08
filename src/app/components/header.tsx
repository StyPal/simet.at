import Link from "next/link";

export function Header() {
    return (
        <header className="flex items-center justify-center w-full gap-4">
            <p className="text-sm sm:text-lg leading-tight text-purple flex-1 text-center sm:text-left">
                MoGame11
            </p>

            <Link className="font-bold text-xl sm:text-3xl leading-tight text-blue text-center flex-none"
                  href="/">
                MORITZ SIMET
            </Link>

            <p className="text-sm sm:text-lg leading-tight text-red flex-1 text-center sm:text-right">
                StyPal
            </p>
        </header>
    );
}