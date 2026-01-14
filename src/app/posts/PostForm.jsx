'use client'
import { createPost } from "./actions"

export const PostForm = () => {
    return (
        <div>
            <form action={createPost}>
                <input
                    type="text"
                    placeholder="Post title"
                    name="title"
                    required
                />
                <textarea
                    name="content"
                    placeholder="Post content"
                    required
                />
                <button type="submit">Submit</button>

            </form>
        </div>
    )

}

