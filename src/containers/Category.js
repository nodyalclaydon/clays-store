import React, {useContext} from "react"
import { Image } from "../components"

import {Context} from "../Context"

export function CategoryContainer({ children, ...restProps }) {
    const {guitarPhotos} = useContext(Context)

    const ImageElements = guitarPhotos.map(img => {
        return <Image.Photo key={img.id} src={img.urls.raw} alt={img.alt_description} />
    })

    console.log(guitarPhotos)
    return (
        <Image>
            {ImageElements}
        </Image>
    )
}