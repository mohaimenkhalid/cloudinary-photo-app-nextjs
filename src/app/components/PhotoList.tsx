"use client"

import ImageCard from "@/app/components/ImageCard";

export default function PhotoList({photoItems, refreshActionPath}) {

    const MAX_COLUMN = 4;
    function getColumns(colIndex) {
        return photoItems.filter((resource, index) => {
            return index % MAX_COLUMN === colIndex
        })
    }

    return (
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
                                    path={refreshActionPath}
                                    width="400"
                                    height="300"
                                />
                            )
                        })
                    }
                </div>)}
        </div>
    )
}