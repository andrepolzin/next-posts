'use client'
import { createPost } from "./actions"

export const PostForm = () => {
    return (
        <div>
            <form action={createPost} className="flex flex-col p-5 gap-3">
                <input
                    type="text"
                    placeholder="Post title"
                    name="title"
                    required
                    className="border-2 rounded-md text-black p-2 md:w-2/4 lg:w-1/4"
                />
                <textarea
                    name="content"
                    placeholder="Post content"
                    required
                    className="border-2 rounded-md text-black p-2 md:w-2/4 lg:w-1/3"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 cursor-pointer p-2 text-white rounded-md md:w-36">Add Post</button>

            </form>
        </div>
    )

}

