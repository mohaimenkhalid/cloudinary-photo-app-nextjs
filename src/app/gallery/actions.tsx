"use server"
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache'

export default async function SetAsFavouriteAction(publicID) {
    await cloudinary.v2.uploader.add_tag('favourite', [publicID])
    revalidatePath('/gallery')
}