import UploadButton from "./upload-button"
import cloudinary from "cloudinary";
import ImageCard from "@/app/components/ImageCard";

export default async function GalleryPage() {
    const result = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(10)
        .execute()

    // .then(result=>console.log(result));
    const MAX_COLUMN = 4;
    function getColumns(colIndex) {
        return result.resources.filter((resource, index) => {
            return index % MAX_COLUMN === colIndex
        })
    }

    return (
        <div className="px-5">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Galley</h1>
                <UploadButton/>
            </div>
            {/*{JSON.stringify(result.resources[0].public_id)}*/}
            <div className="grid grid-cols-4 gap-4 mt-5">

                {[
                    getColumns(0),
                    getColumns(1),
                    getColumns(2),
                    getColumns(3)
                ].map((col, index) =>
                    <div key={index} className="flex flex-col gap-4">
                        {
                            col.map(item => {
                                return (
                                    <ImageCard
                                        key={item.public_id}
                                        imageData={item}
                                        path={'/gallery'}
                                        width="400"
                                        height="300"
                                    />
                                )
                            })
                        }
                     </div>)}
            </div>
        </div>
    )
}
