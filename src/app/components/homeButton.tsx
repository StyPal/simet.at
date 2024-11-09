import Link from "next/link";

export default function HomeButton() {
    return (
        <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-blue text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/"
            rel="noopener noreferrer"
        >
            <label>
                ← Go Back
            </label>
        </Link>
    );
}