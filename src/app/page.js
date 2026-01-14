import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans">
      <h1>Welcome to our Posts List</h1>
      <Link href={"/posts"}>See all Posts</Link>
    </div>
  );
}
