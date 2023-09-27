"use server"
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache'

export default async function SetAsFavouriteAction(publicID, status) {

    if(status) {
        await cloudinary.v2.uploader.add_tag('favourite', [publicID])
    } else {
        await cloudinary.v2.uploader.remove_tag('favourite', [publicID])
    }
    await new Promise((resolve) => setTimeout(resolve, 1000))
    revalidatePath('/gallery')
}