"use client"
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
        <div className="px-5">
            <CldUploadButton uploadPreset="<Upload Preset>" />
        </div>
    </main>
  )
}
