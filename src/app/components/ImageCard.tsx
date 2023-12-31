"use client"
import {useTransition} from 'react'
import {CldImage} from 'next-cloudinary';
import SetAsFavouriteAction from "@/app/gallery/actions";
import {Spinner} from "@nextui-org/react";

export default function ImageCard({imageData, path, ...props}) {

    const isFavourite = imageData.tags.includes('favourite')
    const [isPending, startTransition] = useTransition();
    if (isPending) return <Spinner label="processing..." color="default" labelColor="foreground"/>
    return (
        <div className="relative">
            <CldImage
                src={imageData.public_id}
                sizes="100vw"
                alt="Description of my image"
                {...props}
            />
            {
                !isFavourite ?
                    (
                        <button className="absolute right-3 top-2 hover:text-red-500 bg-[#ffffff8c] rounded-full py-2 px-2"
                                onClick={() => {
                                    startTransition(() => {
                                        SetAsFavouriteAction(imageData.public_id, true, path)
                                    })

                                }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                            </svg>
                        </button>
                    )
                    :
                    <button className="absolute right-3 top-2 hover:text-red-500 bg-[#ffffff8c] rounded-full py-2 px-2"
                            onClick={() => {
                                startTransition(() => {
                                    SetAsFavouriteAction(imageData.public_id, false, path)
                                })
                            }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="red" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                        </svg>
                    </button>
            }
        </div>
    )
}