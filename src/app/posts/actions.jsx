'use server'

export async function createPost(formData) {
    const title = formData.get("title")
    const content = formData.get("content")

    // adicionar ao db

}