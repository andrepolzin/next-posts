'use client'
import { createPost } from "./actions"

export const PostForm = () => {
    return (
        <div>
            <form action={createPost} className="flex flex-col p-5 gap-3 items-center">
                <input
                    type="text"
                    placeholder="Post title"
                    name="title"
                    required
                    className="border-2 rounded-md text-black p-2 w-56 md:w-2/4 lg:w-110"
                />
                <textarea
                    name="content"
                    placeholder="Post content"
                    required
                    className="border-2 rounded-md text-black w-56 p-2 md:w-2/4 lg:w-110"
                />
                <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    className="border-2 rounded-md text-black w-56 p-2 md:w-2/4 lg:w-110"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 cursor-pointer p-2 text-white rounded-md md:w-36 transition-all duration-350 ease-out hover:-translate-0.5">
                    Add Post
                </button>

            </form>
        </div>
    )

}

