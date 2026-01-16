import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-blue-500 h-24 text-white">
            <Link href={"/"} className="hover:bg-blue-700 p-2 rounded-md transition-all duration-350 ease-out hover:-translate-0.5">Posts Project</Link>
            <nav className="flex gap-4">
                <Link href={"/"} className="hover:bg-blue-700 p-2 rounded-md transition-all duration-250 ease-out hover:-translate-0.5">Home</Link>
                <Link href={"/posts"} className="hover:bg-blue-700 p-2 rounded-md transition-all duration-250 ease-out hover:-translate-0.5">Posts</Link>
            </nav>
        </header>
    )
}