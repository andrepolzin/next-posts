import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-6 min-h-screen items-center pt-10 bg-zinc-100">
      <h1 className='font-bold md:text-3xl bg-blue-500 p-6 rounded-4xl text-center text-white'>Welcome to our Posts List</h1>
      <Link
        href={"/posts"}
        className='text-lg hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-800 hover:text-white hover:scale-110 hover:-translate-1 p-2 rounded-md transition-all duration-700 ease-out'>
        Create a Post
      </Link>

      <div className='flex flex-col md:flex-row w-90% 2xl:max-w-[60%] p-5 gap-5 text-lg text-justify'>

        <div className='flex-2'>
          <p>animacao</p>
        </div>

        <div className='flex flex-col gap-5 flex-3'>
          <p>
            Heey! This is a full stack project where users can create, edit, delete, and browse posts in a clean
            and straightforward and responsive way. The idea here is to keep things simple and practical, focusing on a smooth experience
            without overcomplicating the basics. It’s all about building and managing content in a way that just feels right.
          </p>
          <p>
            The app is built with a modern stack: Next.js handles the frontend and routing, Tailwind CSS takes care of the
            styling, and Prisma + PostgreSQL power the database layer. This setup makes the project fast, scalable, and easy
            to work with, while also following real-world development patterns.
          </p>
          <p>
            This project is part of my personal portfolio and reflects my journey building full stack applications from scratch.
            It’s a place where I experiment, learn, and apply best practices, connecting backend logic with a responsive and user-friendly interface.
          </p>
        </div>

      </div>
    </div>
  );
}
