"use client"

import { CldImage } from 'next-cloudinary';

export default function ImageCard({publicID, ...props}) {
    return (
        <CldImage
            src={publicID}
            sizes="100vw"
            alt="Description of my image"
            {...props}
        />
    )
}