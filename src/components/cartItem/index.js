import React from "react"

import {
    Container,
    Trash,
    Thumbnail,
    Title,
    Credit,
    Price,
    Total,
    Info,
    BuyBtn
} from "./styles/cartItem"

export default function CartItem({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

CartItem.Trash = function CartItemTrash({ ...restProps }) {
    return <Trash {...restProps} />
}

CartItem.Thumbnail = function CartItemThumbnail({ ...restProps }) {
    return <Thumbnail {...restProps} />
}

CartItem.Title = function CartItemTitle({ ...restProps }) {
    return <Title {...restProps} />
}

CartItem.Credit = function CartItemCredit({ ...restProps }) {
    return <Credit {...restProps} />
} //see if you can just as easily use the credit component from overlay

CartItem.Price = function CartItemPrice({ ...restProps }) {
    return <Price {...restProps} />
}

CartItem.Total = function CartItemTotal({ ...restProps }) {
    return <Total {...restProps} />
}

CartItem.Info = function CartItemInfo({ children, ...restProps }) {
    return <Info {...restProps}>{children}</Info>
}

CartItem.BuyBtn = function CartItemBuyBtn({ ...restProps }) {
    return <BuyBtn {...restProps} />
}