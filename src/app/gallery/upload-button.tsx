"use client"
import { CldUploadButton } from 'next-cloudinary';

export default function uploadButton() {
    return (
        <CldUploadButton
            uploadPreset="du253v2y"
            className="bg-[#646464] text-white px-5 py-3 rounded-lg"
            onUpload={(result) => {
                console.log(result)
            }}
        >
            <div className="flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>

                <span className="text-sm">Upload</span>
            </div>
        </CldUploadButton>
    );
}