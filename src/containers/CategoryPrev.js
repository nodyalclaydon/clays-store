import React, {useContext} from "react"

import { Preview } from "../components"
import { Context } from "../Context"

export function CategoryPrev({ children, ...restProps }) {
    const {mountainPhotos, cityPhotos, wildlifePhotos, setCategory, displayOverlay} = useContext(Context)

    // create new photo array of first 4 for each category
    const mountainPrevElements = mountainPhotos.slice(0, 4).map(img => {
        return <Preview.ImagePrev 
                key={img.id} 
                src={img.urls.regular} 
                alt={img.alt_description} 
                onClick={() => displayOverlay(img)}
                />
    })

    const cityPrevElements = cityPhotos.slice(0, 4).map(img => {
        return <Preview.ImagePrev 
                key={img.id} 
                src={img.urls.regular} 
                alt={img.alt_description} 
                onClick={() => displayOverlay(img)}
                />
    })

    const wildlifePrevElements = wildlifePhotos.slice(0, 4).map(img => {
        return <Preview.ImagePrev 
                key={img.id} 
                src={img.urls.regular} 
                alt={img.alt_description} 
                onClick={() => displayOverlay(img)}
                />
    })

    return (
        <>
        <Preview>
            <Preview.Header>Mountains</Preview.Header>
            <Preview.PrevContainer>
                {mountainPrevElements}
            </Preview.PrevContainer>
            <Preview.SeeMore><Preview.Link to="/category" onClick={() => {setCategory("mountains")}}>see more</Preview.Link></Preview.SeeMore>
        </Preview>

        <Preview>
            <Preview.Header>Cities</Preview.Header>
            <Preview.PrevContainer>
                {cityPrevElements}
            </Preview.PrevContainer>
            <Preview.SeeMore><Preview.Link to="/category" onClick={() => {setCategory("cities")}}>see more</Preview.Link></Preview.SeeMore>
        </Preview>

        <Preview>
            <Preview.Header>Wildlife</Preview.Header>
            <Preview.PrevContainer>
                {wildlifePrevElements}
            </Preview.PrevContainer>
            <Preview.SeeMore><Preview.Link to="/category" onClick={() => {setCategory("wildlife")}}>see more</Preview.Link></Preview.SeeMore>
        </Preview>
        </>
    )

}