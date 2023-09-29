import cloudinary from "cloudinary";
import ImageCard from "@/app/components/ImageCard";
import PhotoList from "@/app/components/PhotoList";

export default async function FavouritePage() {
    const result = await cloudinary.v2.search
        .expression('resource_type:image AND tags:favourite')
        .sort_by('created_at','desc')
        .with_field('tags')
        .max_results(10)
        .execute()
        // .then(result=>console.log(result));
  return (
      <div className="px-5 w-full">
          <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Favourite</h1>
          </div>
          <PhotoList
              photoItems={result.resources}
              refreshActionPath={'favourites'}
          />
      </div>
  )
}
