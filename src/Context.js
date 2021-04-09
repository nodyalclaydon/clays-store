import React, {useState, useEffect} from "react"


const Context = React.createContext()

function ContextProvider({children}) {
    const [mountainPhotos, setMountainPhotos] = useState([])
    const [cityPhotos, setCityPhotos] = useState([])
    const [wildlifePhotos, setWildlifePhotos] = useState([])
    const [category, setCategory] = useState("")
    const [cartItems, setCartItems] = useState([])
    const [overlay, setOverlay] = useState([])

    const mountainUrl = "https://api.unsplash.com/search/photos?per_page=30&query=mountains&client_id=bHVrFWHKFDWazV4a0kjfyUxs-8lQxb9CHg_JeXczL8g"
    const cityUrl = "https://api.unsplash.com/search/photos?per_page=30&query=cities&client_id=bHVrFWHKFDWazV4a0kjfyUxs-8lQxb9CHg_JeXczL8g"
    const wildlifeUrl = "https://api.unsplash.com/search/photos?per_page=30&query=animals&client_id=bHVrFWHKFDWazV4a0kjfyUxs-8lQxb9CHg_JeXczL8g"

    function getMPhotos() {
        fetch(mountainUrl)
            .then(res => res.json())
            .then(data => setMountainPhotos(data.results))
    }

    function getCPhotos() {
        fetch(cityUrl)
            .then(res => res.json())
            .then(data => setCityPhotos(data.results))
    }

    function getWPhotos() {
        fetch(wildlifeUrl)
            .then(res => res.json())
            .then(data => setWildlifePhotos(data.results))
    }

    useEffect(() => {
        let mounted = true
        if (mounted) {
            getMPhotos()
            getCPhotos()
            getWPhotos()
        }
        return function cleanup() {
            mounted = false
        }
    }, [])

    function addToCart(newItem) {
        setCartItems(prevCartItems => [...prevCartItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id)) 
    }

    function clearCart() {
        setCartItems([])
    }

    //category page: add onClick to each rendered image that displays image overlay component

    function displayOverlay(img) {
        //set state for overlay array to img array
        setOverlay(img)
        //in overlay container, display overlay using info from state (passed here)
    }

    function hideOverlay() {
        setOverlay([])
    }

    return (
        <Context.Provider value={{
            mountainPhotos,
            cityPhotos,
            wildlifePhotos,
            category,
            setCategory,
            cartItems,
            addToCart,
            clearCart,
            removeFromCart,
            overlay,
            displayOverlay,
            hideOverlay
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}