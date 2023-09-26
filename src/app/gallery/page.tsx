"use client"
import { CldUploadButton } from 'next-cloudinary';
import {Button} from "@nextui-org/react";

export default function GalleryPage() {
  return (
      <div className="px-5 w-full">
          <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Galley</h1>
              <CldUploadButton uploadPreset="kjhk" className="bg-gray-300 px-5 py-2 rounded-full" />

          </div>
      </div>
  )
}
