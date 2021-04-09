import React, {useContext} from "react"
import { Image } from "../components"

import {Context} from "../Context"

export function CategoryContainer({ children, ...restProps }) {
    const {mountainPhotos, cityPhotos, wildlifePhotos, category, displayOverlay} = useContext(Context)

    const MountainElements = mountainPhotos.map(img => {
        return <Image.Photo 
        key={img.id} 
        src={img.urls.regular} 
        alt={img.alt_description} 
        onClick={() => displayOverlay(img)}
        />
    })

    const CityElements = cityPhotos.map(img => {
        return <Image.Photo 
        key={img.id} 
        src={img.urls.regular} 
        alt={img.alt_description} 
        onClick={() => displayOverlay(img)}
        />
    })

    const WildlifeElements = wildlifePhotos.map(img => {
        return <Image.Photo 
            key={img.id} 
            src={img.urls.regular} 
            alt={img.alt_description}
            onClick={() => displayOverlay(img)}
            />
    })

    const headlineText = category === "mountains" ? "Mountain" : category === "cities" ? "City" : "Wildlife"
    
    return (
        <>
        <Image.Headline>{`${headlineText} Photography`}</Image.Headline>
        <Image>
            {category === "mountains" ? MountainElements : category === "cities" ? CityElements : WildlifeElements}
        </Image>
        </>
    )
}