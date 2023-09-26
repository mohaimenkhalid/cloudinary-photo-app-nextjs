import UploadButton from "./upload-button"
import cloudinary from "cloudinary";
import ImageCard from "@/app/components/ImageCard";

export default async function GalleryPage() {
    const result = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('created_at','desc')
        .max_results(10)
        .execute()
        // .then(result=>console.log(result));
  return (
      <div className="px-5 1``">
          <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Galley</h1>
              <UploadButton/>
          </div>
          {/*{JSON.stringify(result)}*/}
          <div className="grid grid-cols-4 gap-4 mt-5">
              {
                  result && result.resources.map(item => {
                      return (
                          <ImageCard
                              key={item.public_id}
                              publicID={item.public_id}
                              width="400"
                              height="300"
                          />
                      )
                  })
              }
          </div>
      </div>
  )
}
