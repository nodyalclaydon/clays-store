(this["webpackJsonpclays-store"]=this["webpackJsonpclays-store"]||[]).push([[0],{40:function(n,t,e){"use strict";e.r(t);var r,i=e(1),c=e.n(i),a=e(24),o=e.n(a),s=e(3),j=e(4),b=Object(j.a)(r||(r=Object(s.a)(['\n    html, body {\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        color: #293241;\n        font-size: 10px;\n        margin: 0;\n    }\n\n    .site-content {\n        min-height: 89vh;\n    }\n']))),l=e(11),d=e(28),x=e(12),h=e(0),u=c.a.createContext();function O(n){var t=n.children,e=Object(i.useState)([]),r=Object(x.a)(e,2),c=r[0],a=r[1],o=Object(i.useState)([]),s=Object(x.a)(o,2),j=s[0],b=s[1],l=Object(i.useState)([]),O=Object(x.a)(l,2),p=O[0],f=O[1],m=Object(i.useState)(""),g=Object(x.a)(m,2),v=g[0],w=g[1],y=Object(i.useState)([]),C=Object(x.a)(y,2),k=C[0],P=C[1],z=Object(i.useState)([]),H=Object(x.a)(z,2),_=H[0],I=H[1];return Object(i.useEffect)((function(){var n=!0;return n&&(fetch("https://api.unsplash.com/search/photos?per_page=30&query=mountains&client_id=bHVrFWHKFDWazV4a0kjfyUxs-8lQxb9CHg_JeXczL8g").then((function(n){return n.json()})).then((function(n){return a(n.results)})),fetch("https://api.unsplash.com/search/photos?per_page=30&query=cities&client_id=bHVrFWHKFDWazV4a0kjfyUxs-8lQxb9CHg_JeXczL8g").then((function(n){return n.json()})).then((function(n){return b(n.results)})),fetch("https://api.unsplash.com/search/photos?per_page=30&query=animals&client_id=bHVrFWHKFDWazV4a0kjfyUxs-8lQxb9CHg_JeXczL8g").then((function(n){return n.json()})).then((function(n){return f(n.results)}))),function(){n=!1}}),[]),Object(h.jsx)(u.Provider,{value:{mountainPhotos:c,cityPhotos:j,wildlifePhotos:p,category:v,setCategory:w,cartItems:k,addToCart:function(n){P((function(t){return[].concat(Object(d.a)(t),[n])}))},clearCart:function(){P([])},removeFromCart:function(n){P((function(t){return t.filter((function(t){return t.id!==n}))}))},overlay:_,displayOverlay:function(n){I(n)},hideOverlay:function(){I([])}},children:t})}var p,f,m,g,v,w,y,C,k,P,z=e(6),H=e(2),_=e(5),I=j.b.header(p||(p=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n    background-color: #293241;\n\n    @media (min-width: 600px) {\n        align-items: center;\n    }\n\n    @media (min-width: 2000px) {\n        justify-content: space-around;\n    }\n"]))),F=j.b.img(f||(f=Object(s.a)(["\n    width: 50px;\n    padding: 20px;\n    filter: brightness(0) invert(1);\n\n    @media (min-width: 600px) {\n        margin: 0 40px 0 0;\n    }\n"]))),L=j.b.div(m||(m=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    &:last-of-type {\n        flex-direction: row;\n        position: absolute;\n        top: 0;\n        right: 0;\n    }\n\n    &:first-of-type {\n        margin: 0 auto;\n    }\n\n    @media (min-width: 600px) {\n        flex-direction: row;\n\n        &:last-of-type {\n            flex-direction: row;\n            position: relative;\n        }\n\n        &:first-of-type {\n            margin: 0;\n        }\n    }\n"]))),T=j.b.img(g||(g=Object(s.a)(["  \n    width: 30px;\n    padding: 10px;\n    margin: 0;\n    filter: brightness(0) invert(1);\n    transition: scale 200ms ease-in-out;\n\n    &:hover {\n        transform: scale(1.1)\n    }\n"]))),S=j.b.a(v||(v=Object(s.a)(["   \n    display: block;    \n    color: white;\n    text-decoration: none;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    margin: 0 auto 30px;\n\n    @media (min-width: 600px) {\n        margin: 0 30px 0 0;\n    }\n\n    &:hover {\n        color: #e0fbfc;\n    }\n"]))),V=j.b.p(w||(w=Object(s.a)(["\n    color: #e0fbfc;\n    font-size: 1.6rem;\n"])));function W(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(I,Object(H.a)(Object(H.a)({},e),{},{children:t}))}W.Logo=function(n){var t=n.to,e=Object(_.a)(n,["to"]);return Object(h.jsx)(l.b,{to:t,children:Object(h.jsx)(F,Object(H.a)({},e))})},W.Icon=function(n){var t=n.to,e=Object(_.a)(n,["to"]);return Object(h.jsx)(l.b,{to:t,children:Object(h.jsx)(T,Object(H.a)({},e))})},W.Link=function(n){var t=n.to,e=Object(_.a)(n,["to"]);return Object(h.jsx)(l.b,{to:t,children:Object(h.jsx)(S,Object(H.a)({},e))})},W.Counter=function(n){var t=Object.assign({},n);return Object(h.jsx)(V,Object(H.a)({},t))},W.Frame=function(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(L,Object(H.a)(Object(H.a)({},e),{},{children:t}))};var A,M,B,J=j.b.footer(y||(y=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    background-color: #293241;\n    margin-top: 5px;\n    padding: 20px;\n    height: 100px;\n"]))),q=j.b.img(C||(C=Object(s.a)(["\n    filter: brightness(0) invert(1);\n    height: 50px;\n    width: 50px;\n    cursor: pointer;\n"]))),D=j.b.a(k||(k=Object(s.a)(["\n    margin: 0 auto;\n"]))),K=j.b.p(P||(P=Object(s.a)(["\n    font-size: 1.2rem;\n    font-weight: 400;\n    color: white;\n    letter-spacing: 1.5px;\n    text-transform: uppercase;\n    margin: 15px auto 0;\n"])));function Q(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(J,Object(H.a)(Object(H.a)({},e),{},{children:t}))}Q.Icon=function(n){var t=Object.assign({},n);return Object(h.jsx)(q,Object(H.a)({},t))},Q.Link=function(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(D,Object(H.a)(Object(H.a)({},e),{},{children:t}))},Q.Text=function(n){var t=Object.assign({},n);return Object(h.jsx)(K,Object(H.a)({},t))};var U,X,$,E,N,R,Y=j.b.div(A||(A=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 2000px;\n    margin: 0 auto;\n"]))),G=j.b.img(M||(M=Object(s.a)(["\n    width: 130px;\n    height: 130px;\n    object-fit: cover;\n    margin: 5px;\n    transition: transform 100ms ease-in-out;\n\n    &:hover {\n        transform: scale(1.025);\n        cursor: pointer;\n    }\n\n    @media (min-width: 600px) {\n        width: 250px;\n        height: 250px;\n    }\n"]))),Z=j.b.h2(B||(B=Object(s.a)(["\n    font-size: 2.2rem;\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    font-weight: 500;\n    color: #98c1d9;\n"])));function nn(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(Y,Object(H.a)(Object(H.a)({},e),{},{children:t}))}nn.Photo=function(n){var t=Object.assign({},n);return Object(h.jsx)(G,Object(H.a)({},t))},nn.Headline=function(n){var t=Object.assign({},n);return Object(h.jsx)(Z,Object(H.a)({},t))};var tn,en,rn,cn,an,on,sn,jn,bn,ln,dn=j.b.div(U||(U=Object(s.a)(["\n    margin: 40px auto 40px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-content: center;\n"]))),xn=j.b.img(X||(X=Object(s.a)(["\n    width: 130px;\n    height: 130px;\n    object-fit: cover;\n    margin: 5px;\n    transition: transform 100ms ease-in-out;\n\n    &:hover {\n        transform: scale(1.025);\n        cursor: pointer;\n    }\n\n    @media (min-width: 1000px) {\n        width: 240px;\n        height: 240px;\n    }\n"]))),hn=j.b.div($||($=Object(s.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: center;\n"]))),un=j.b.p(E||(E=Object(s.a)(["\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    text-align: center;\n\n    @media (min-width: 600px) {\n        text-align: right;\n    }\n"]))),On=j.b.h2(N||(N=Object(s.a)(["\n    font-size: 1.6rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    color: #98c1d9;\n    text-align: center;\n\n    @media (min-width: 600px) {\n        text-align: left;\n        margin-left: 5px;\n    }\n"]))),pn=j.b.a(R||(R=Object(s.a)(["\n    text-decoration: none;\n    cursor: pointer;\n"])));function fn(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(dn,Object(H.a)(Object(H.a)({},e),{},{children:t}))}fn.ImagePrev=function(n){var t=Object.assign({},n);return Object(h.jsx)(xn,Object(H.a)({},t))},fn.SeeMore=function(n){var t=Object.assign({},n);return Object(h.jsx)(un,Object(H.a)({},t))},fn.Header=function(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(On,Object(H.a)(Object(H.a)({},e),{},{children:t}))},fn.PrevContainer=function(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(hn,Object(H.a)(Object(H.a)({},e),{},{children:t}))},fn.Link=function(n){var t=n.to,e=Object(_.a)(n,["to"]);return Object(h.jsx)(l.b,{to:t,children:Object(h.jsx)(pn,Object(H.a)({},e))})};var mn,gn,vn,wn,yn,Cn,kn,Pn,zn,Hn=j.b.div(tn||(tn=Object(s.a)(['\n    position: fixed;    \n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &:before {\n        content: "";\n        width: inherit;\n        height: inherit;\n        position: absolute;\n        background: rgba(0, 0, 0);\n        opacity: 0.5;\n    }\n']))),_n=j.b.div(en||(en=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    border-radius: 10px;\n    width: 70%;\n    max-width: 800px;\n    position: fixed;\n    background-color: white;\n    min-height: 500px;\n    height: fit-content;\n    box-shadow: 0 10px 6px -6px #777;\n    z-index: 1;\n\n    @media (min-width: 600px) {\n        flex-direction: row;\n        height: 600px;\n    }\n"]))),In=j.b.img(rn||(rn=Object(s.a)(["\n    width: 150px;\n    height: 150px;\n    object-fit: cover;\n    margin: 30px auto 0;\n\n    @media (min-width: 600px) {\n        width: 55%;\n        height: 85%;\n        margin: auto 15px;\n    }\n"]))),Fn=j.b.div(cn||(cn=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 0 15px 15px;\n\n    @media (min-width: 600px) {\n        margin: auto 15px auto 0;\n    }\n"]))),Ln=j.b.h1(an||(an=Object(s.a)(["\n    font-size: 2.5rem;\n    text-transform: capitalize;\n"]))),Tn=j.b.h2(on||(on=Object(s.a)(["\n    font-size: 1.2rem;\n    font-weight: 400;\n"]))),Sn=j.b.p(sn||(sn=Object(s.a)(["\n    font-size: 2.5rem;\n    margin-top: 30px\n"]))),Vn=j.b.button(jn||(jn=Object(s.a)(["\n    border: none;\n    outline: none;\n    width: 150px;\n    color: white;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    padding: 10px 10px;\n    margin-top: 30px;\n    border-radius: 3px;\n    cursor: pointer;\n    transition: transform 150ms ease-in-out;\n\n    &:hover {\n        transform: scale(1.045)\n    }\n"]))),Wn=j.b.button(bn||(bn=Object(s.a)(["\n    background-color: #ee6c4d;\n    border: none;\n    outline: none;\n    width: 150px;\n    color: white;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    padding: 10px 10px;\n    margin-top: 15px;\n    border-radius: 3px;\n    cursor: pointer;\n    transition: transform 150ms ease-in-out;\n\n    &:hover {\n        transform: scale(1.045)\n    }\n"]))),An=j.b.button(ln||(ln=Object(s.a)(['\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 20px;\n    height: 20px;\n    padding: 3px;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background-color: transparent;\n    transform: rotate(45deg);\n    transition: transform 100ms ease-in-out;\n\n    &:before,\n    &:after {\n        content: " ";\n        position: absolute;\n        left: 8px;\n        top: 0;\n        height: 20px;\n        width: 2px;\n        background-color: #293241;\n    }\n\n    &:hover {\n        transform: rotate(135deg);\n        &:before, &:after { background-color: #ee6c4d; }\n    }\n\n    &:after {\n        transform: rotate(-90deg);\n    }\n'])));function Mn(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(Hn,Object(H.a)(Object(H.a)({},e),{},{children:t}))}Mn.Container=function(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(_n,Object(H.a)(Object(H.a)({},e),{},{children:t}))},Mn.Image=function(n){var t=Object.assign({},n);return Object(h.jsx)(In,Object(H.a)({},t))},Mn.Info=function(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(Fn,Object(H.a)(Object(H.a)({},e),{},{children:t}))},Mn.Header=function(n){var t=Object.assign({},n);return Object(h.jsx)(Ln,Object(H.a)({},t))},Mn.Credits=function(n){var t=Object.assign({},n);return Object(h.jsx)(Tn,Object(H.a)({},t))},Mn.Price=function(n){var t=Object.assign({},n);return Object(h.jsx)(Sn,Object(H.a)({},t))},Mn.AddToCart=function(n){var t=Object.assign({},n);return Object(h.jsx)(Vn,Object(H.a)({},t))},Mn.ViewCart=function(n){var t=n.to,e=Object(_.a)(n,["to"]);return Object(h.jsx)(l.b,{to:t,children:Object(h.jsx)(Wn,Object(H.a)({},e))})},Mn.Close=function(n){var t=Object.assign({},n);return Object(h.jsx)(An,Object(H.a)({},t))};var Bn=j.b.div(mn||(mn=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 15px auto;\n\n    @media (min-width: 600px) {\n        flex-direction: row;\n    }\n"]))),Jn=j.b.img(gn||(gn=Object(s.a)(["\n    width: 15px;\n    height: 22px;\n    cursor: pointer;\n    position: relative;\n    top: 50px;\n    left: 15px;\n\n    &:hover {\n        opacity: 0.5;\n    }\n\n    @media (min-width: 600px) {\n        margin: auto 0 auto 15px;\n        top: 0;\n        left: 0;\n    }\n"]))),qn=j.b.img(vn||(vn=Object(s.a)(["\n    width: 120px;\n    height: 80px;\n    object-fit: cover;\n    margin: 0 15px 5px 45px;\n\n    @media (min-width: 600px) {\n        width: 200px;\n        height: 133px;\n        margin: 0 15px 0;\n    }\n"]))),Dn=j.b.div(wn||(wn=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-left: 45px;\n\n    @media (min-width: 600px) {\n        margin-left: 0;\n    }\n"]))),Kn=j.b.h1(yn||(yn=Object(s.a)(["\n    text-transform: capitalize;\n    margin-top: 0;\n    word-wrap: break-word;\n\n    @media (min-width: 600px) {\n        max-width: 200px;\n    }\n\n    @media (min-width: 800px) {\n        max-width: 400px;\n    }\n\n    @media (min-width: 1000px) {\n        max-width: 700px;\n    }\n\n    @media (min-width: 1200px) {\n        max-width: 900px;\n    }\n"]))),Qn=j.b.h2(Cn||(Cn=Object(s.a)(["\n    font-weight: 400;\n    margin-top: 10px;\n"]))),Un=j.b.h1(kn||(kn=Object(s.a)(["\n    align-self: center;\n    position: absolute;\n    right: 30px;\n    margin-top: 40px;\n    font-weight: 400;\n\n    @media (min-width: 600px) {\n        margin-top: 0;\n    }\n"]))),Xn=j.b.h1(Pn||(Pn=Object(s.a)(["\n    margin: 40px 30px 0 0;\n    text-align: right;\n    font-size: 2.4rem;\n"]))),$n=j.b.button(zn||(zn=Object(s.a)(["   \n    display: block;    \n    margin: 60px 30px 0 auto;\n    border: none;\n    outline: none;\n    width: 150px;\n    color: white;\n    background-color: #ee6c4d;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    padding: 10px 10px;\n    border-radius: 3px;\n    cursor: pointer;\n    transition: transform 150ms ease-in-out;\n\n    &:hover {\n        transform: scale(1.045)\n    }\n"])));function En(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(Bn,Object(H.a)(Object(H.a)({},e),{},{children:t}))}function Nn(){var n=Object(i.useContext)(u),t=n.setCategory,e=n.cartItems,r=e.length>0?e.length:null;return Object(h.jsxs)(W,{children:[Object(h.jsxs)(W.Frame,{children:[Object(h.jsx)(W.Logo,{to:"/",src:"/clays-store/img/CY-Logo.png",alt:"logo"}),Object(h.jsx)(W.Link,{to:"/",children:"home"}),Object(h.jsx)(W.Link,{to:"/category",onClick:function(){t("mountains")},children:"mountains"}),Object(h.jsx)(W.Link,{to:"/category",onClick:function(){t("cities")},children:"cities"}),Object(h.jsx)(W.Link,{to:"/category",onClick:function(){t("wildlife")},children:"wildlife"})]}),Object(h.jsxs)(W.Frame,{children:[Object(h.jsx)(W.Counter,{children:r}),Object(h.jsx)(W.Icon,{to:"/cart",src:"/clays-store/img/cart.png",alt:"cart"})]})]})}function Rn(){return Object(h.jsxs)(Q,{children:[Object(h.jsx)(Q.Link,{href:"https://github.com/nodyalclaydon/clays-store",target:"_blank",children:Object(h.jsx)(Q.Icon,{src:"/clays-store/img/github_logo.png",alt:"logo"})}),Object(h.jsx)(Q.Text,{children:"Claydon Raymer, 2021"})]})}function Yn(n){n.children,Object(_.a)(n,["children"]);var t=Object(i.useContext)(u),e=t.mountainPhotos,r=t.cityPhotos,c=t.wildlifePhotos,a=t.setCategory,o=t.displayOverlay,s=e.slice(0,4).map((function(n){return Object(h.jsx)(fn.ImagePrev,{src:n.urls.regular,alt:n.alt_description,onClick:function(){return o(n)}},n.id)})),j=r.slice(0,4).map((function(n){return Object(h.jsx)(fn.ImagePrev,{src:n.urls.regular,alt:n.alt_description,onClick:function(){return o(n)}},n.id)})),b=c.slice(0,4).map((function(n){return Object(h.jsx)(fn.ImagePrev,{src:n.urls.regular,alt:n.alt_description,onClick:function(){return o(n)}},n.id)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(fn,{children:[Object(h.jsx)(fn.Header,{children:"Mountains"}),Object(h.jsx)(fn.PrevContainer,{children:s}),Object(h.jsx)(fn.SeeMore,{children:Object(h.jsx)(fn.Link,{to:"/category",onClick:function(){a("mountains")},children:"see more"})})]}),Object(h.jsxs)(fn,{children:[Object(h.jsx)(fn.Header,{children:"Cities"}),Object(h.jsx)(fn.PrevContainer,{children:j}),Object(h.jsx)(fn.SeeMore,{children:Object(h.jsx)(fn.Link,{to:"/category",onClick:function(){a("cities")},children:"see more"})})]}),Object(h.jsxs)(fn,{children:[Object(h.jsx)(fn.Header,{children:"Wildlife"}),Object(h.jsx)(fn.PrevContainer,{children:b}),Object(h.jsx)(fn.SeeMore,{children:Object(h.jsx)(fn.Link,{to:"/category",onClick:function(){a("wildlife")},children:"see more"})})]})]})}function Gn(n){n.children,Object(_.a)(n,["children"]);var t=Object(i.useContext)(u),e=t.overlay,r=t.hideOverlay,c=t.addToCart,a=Object(i.useState)(!1),o=Object(x.a)(a,2),s=o[0],j=o[1];var b=s?"#98c1d9":"#3d5a80",l=s?"Added!":"add to cart";return 0===e.length?Object(h.jsx)("div",{}):Object(h.jsx)(Mn,{children:Object(h.jsxs)(Mn.Container,{children:[Object(h.jsx)(Mn.Image,{src:e.urls.regular}),Object(h.jsxs)(Mn.Info,{children:[Object(h.jsx)(Mn.Header,{children:e.alt_description}),Object(h.jsxs)(Mn.Credits,{children:["credit: ",e.user.name]}),Object(h.jsx)(Mn.Price,{children:"$9.89"}),Object(h.jsx)(Mn.AddToCart,{style:{backgroundColor:b},onClick:function(){c(e),!1===s&&j(!0)},children:l}),Object(h.jsx)(Mn.ViewCart,{to:"/cart",onClick:function(){return r()},children:"view cart"}),Object(h.jsx)(Mn.Close,{onClick:function(){j(!1),r()}})]})]})})}En.Trash=function(n){var t=Object.assign({},n);return Object(h.jsx)(Jn,Object(H.a)({},t))},En.Thumbnail=function(n){var t=Object.assign({},n);return Object(h.jsx)(qn,Object(H.a)({},t))},En.Title=function(n){var t=Object.assign({},n);return Object(h.jsx)(Kn,Object(H.a)({},t))},En.Credit=function(n){var t=Object.assign({},n);return Object(h.jsx)(Qn,Object(H.a)({},t))},En.Price=function(n){var t=Object.assign({},n);return Object(h.jsx)(Un,Object(H.a)({},t))},En.Total=function(n){var t=Object.assign({},n);return Object(h.jsx)(Xn,Object(H.a)({},t))},En.Info=function(n){var t=n.children,e=Object(_.a)(n,["children"]);return Object(h.jsx)(Dn,Object(H.a)(Object(H.a)({},e),{},{children:t}))},En.BuyBtn=function(n){var t=Object.assign({},n);return Object(h.jsx)($n,Object(H.a)({},t))};var Zn=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Yn,{}),Object(h.jsx)(Gn,{})]})};function nt(n){n.children,Object(_.a)(n,["children"]);var t=Object(i.useContext)(u),e=t.mountainPhotos,r=t.cityPhotos,c=t.wildlifePhotos,a=t.category,o=t.displayOverlay,s=e.map((function(n){return Object(h.jsx)(nn.Photo,{src:n.urls.regular,alt:n.alt_description,onClick:function(){return o(n)}},n.id)})),j=r.map((function(n){return Object(h.jsx)(nn.Photo,{src:n.urls.regular,alt:n.alt_description,onClick:function(){return o(n)}},n.id)})),b=c.map((function(n){return Object(h.jsx)(nn.Photo,{src:n.urls.regular,alt:n.alt_description,onClick:function(){return o(n)}},n.id)})),l="mountains"===a?"Mountain":"cities"===a?"City":"Wildlife";return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(nn.Headline,{children:"".concat(l," Photography")}),Object(h.jsx)(nn,{children:"mountains"===a?s:"cities"===a?j:b})]})}var tt=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(nt,{}),Object(h.jsx)(Gn,{})]})};function et(n){n.children,Object(_.a)(n,["children"]);var t=Object(i.useContext)(u),e=t.cartItems,r=t.removeFromCart,c=t.clearCart,a=e.map((function(n){return Object(h.jsxs)(En,{children:[Object(h.jsx)(En.Trash,{src:"/clays-store/img/trash.png",onClick:function(){return r(n.id)}}),Object(h.jsx)(En.Thumbnail,{src:n.urls.thumb}),Object(h.jsxs)(En.Info,{children:[Object(h.jsx)(En.Title,{children:n.alt_description}),Object(h.jsxs)(En.Credit,{children:["Credit: ",n.user.name]})]}),Object(h.jsx)(En.Price,{children:"$9.89"})]})}));return e.length>0?Object(h.jsxs)(h.Fragment,{children:[a,Object(h.jsxs)(En.Total,{children:["$",9.89*e.length]}),Object(h.jsx)(En.BuyBtn,{onClick:function(){return c()},children:"check out"}),Object(h.jsx)("h3",{style:{textAlign:"right",margin:"10px 30px 100px 0"},children:"(check out will remove all items from cart)"})]}):Object(h.jsx)("h2",{style:{textAlign:"center",marginTop:"60px"},children:"There are no items in your cart..."})}var rt=function(){return Object(h.jsx)(et,{})};var it=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"site-content",children:[Object(h.jsx)(Nn,{}),Object(h.jsxs)(z.c,{children:[Object(h.jsx)(z.a,{exact:!0,path:"/",children:Object(h.jsx)(Zn,{})}),Object(h.jsx)(z.a,{path:"/category",children:Object(h.jsx)(tt,{})}),Object(h.jsx)(z.a,{path:"/cart",children:Object(h.jsx)(rt,{})})]})]}),Object(h.jsx)(Rn,{})]})};o.a.render(Object(h.jsxs)(O,{children:[Object(h.jsx)(b,{}),Object(h.jsx)(l.a,{children:Object(h.jsx)(it,{})})]}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d5fd6947.chunk.js.map