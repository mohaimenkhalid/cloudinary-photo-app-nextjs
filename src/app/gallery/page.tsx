import UploadButton from "./upload-button"
import cloudinary from "cloudinary";
import ImageCard from "@/app/components/ImageCard";
import PhotoList from "@/app/components/PhotoList";

export default async function GalleryPage() {
    const result = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(10)
        .execute()

    return (
        <div className="px-5">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Galley</h1>
                <UploadButton/>
            </div>

            <PhotoList
                photoItems={result.resources}
                refreshActionPath={'gallery'}
            />
        </div>
    )
}
