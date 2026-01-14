import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-blue-500 h-24">
            <Link href={"/"} className="">Posts Project</Link>
            <nav className="flex gap-4">
                <Link href={"/"} className="hover:bg-blue-700 p-2 rounded-md">Home</Link>
                <Link href={"/posts"} className="hover:bg-blue-700 p-2 rounded-md">Posts</Link>
            </nav>
        </header>
    )
}