import React, {useContext} from "react"
import { Image } from "../components"

import {Context} from "../Context"

export function CategoryContainer({ children, ...restProps }) {
    const {guitarPhotos, recordPhotos, pianoPhotos, category, displayOverlay} = useContext(Context)

    const GuitarElements = guitarPhotos.map(img => {
        return <Image.Photo 
        key={img.id} 
        src={img.urls.regular} 
        alt={img.alt_description} 
        onClick={() => displayOverlay(img)}
        />
    })

    const RecordElements = recordPhotos.map(img => {
        return <Image.Photo 
        key={img.id} 
        src={img.urls.regular} 
        alt={img.alt_description} 
        onClick={() => displayOverlay(img)}
        />
    })

    const PianoElements = pianoPhotos.map(img => {
        return <Image.Photo 
            key={img.id} 
            src={img.urls.regular} 
            alt={img.alt_description}
            onClick={() => displayOverlay(img)}
            />
    })

    const headlineText = category === "guitar" ? "Guitar" : category === "records" ? "Record" : "Piano"
    
    return (
        <>
        <Image.Headline>{`Displaying All ${headlineText} Images`}</Image.Headline>
        <Image>
            {category === "guitar" ? GuitarElements : category === "records" ? RecordElements : PianoElements}
        </Image>
        </>
    )
}