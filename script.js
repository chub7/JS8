let html = document.querySelector(`html`)
html.setAttribute(`lang`,`en`);



let head = document.querySelector(`head`)

let meta = document.createElement(`meta`)
meta.setAttribute(`charset`,`UTF-8`);
    document.head.append(meta)

let title = document.createElement(`title`)
title.innerHTML =`Choose Your Option`
    document.head.append(title)

let style = document.createElement(`style`)
style.innerHTML =`
* {
    margin: 0;
    padding: 0; 
 }
 
 @font-face {
     font-family: 'Arvo';
     src: local('Arvo'), url('arvo.woff2') format('woff2'), url('arvo.woff') format('woff'), url('arvo.ttf') format('truetype');
     font-weight: 400;
     font-style: normal;
 }
 @font-face {
     font-family: 'Arvo';
     src: local('Arvo Italic'), local('Arvo-Italic'), url('arvoitalic.woff2') format('woff2'), url('arvoitalic.woff') format('woff'), url('arvoitalic.ttf') format('truetype');
     font-weight: 400;
     font-style: italic;
 }
 @font-face {
     font-family: 'Arvo';
     src: local('Arvo Bold'), local('Arvo-Bold'), url('arvobold.woff2') format('woff2'), url('arvobold.woff') format('woff'), url('arvobold.ttf') format('truetype');
     font-weight: 700;
     font-style: normal;
 }
 @font-face {
     font-family: 'Arvo';
     src: local('Arvo Bold Italic'), local('Arvo-BoldItalic'), url('arvobolditalic.woff2') format('woff2'), url('arvobolditalic.woff') format('woff'), url('arvobolditalic.ttf') format('truetype');
     font-weight: 700;
     font-style: italic;
 }
 
 
 .content {
     width: 800px;
     margin-left: auto;
     margin-right: auto;
 }
 
 
 .title {
     font-family: Arvo;
     
 }
 .mainTitle {
     text-align: center;
     font-size: 48px;
     margin-top: 200px;
     margin-bottom: 30px;
 }
 
 .tinyGrey {
     text-align: center;
     margin-bottom: 50px;
     color: #9FA3A7;
 
 }
 
 
 .mainCont {
    display: flex;
    justify-content: space-around;
    
    
    width: 800px;
    height: 480px;
    
     
 }
 
 .leftCont {
     display: flex;
     flex-direction: column;
     flex-grow: 1;
     justify-content: space-between;
     align-items: center;
     border: 0.2px solid #E8E9ED;
     font-family: Arvo;
     padding: 30px;
     
 }
 
 .free {
     letter-spacing: 5px;
     color: black;
     font-size: 12px;
     
 }
 
 .init {
     text-align: center;
     font-size: 46px;
 }
 
 
 .leftText {
     text-align: center;
     
     color: #9FA3A7;
 }
 
 .buttonleft {
     width: max-content;
     border-radius: 50px;
     border: solid #FFC80A 5px;
     text-align: center;
     padding: 20px 20px;
 }
 
 
 
 .rightCont {
     display: flex;
     flex-direction: column;
     flex-grow: 1;
     justify-content: space-between;
     align-items: center;
     background-color: #8F75BE;
     font-family: Arvo;
     padding: 30px;
     
 }
 
 .studio {
     letter-spacing: 5px;
     color: #FFC80A;
     font-size: 12px;
     
 }
 
 .rightInit{
     text-align: center;
     font-size: 46px;
 
 }
 
 
 
 .buttonRight {
     width: max-content;
     border-radius: 50px;
     border: solid #FFC80A 5px;
     text-align: center;
     color: azure;
     padding: 20px 20px;
 }
 
 .rightText {
     text-align: center;
 }
`
document.head.append(style)

let body = document.querySelector(`body`);

let divContent = document.createElement(`div`)
document.body.prepend(divContent)

divContent.classList.add(`content`)


let bodyContent = document.querySelector(`.content`);
let divTitle = document.createElement(`div`)
bodyContent.prepend(divTitle)
divTitle.classList.add(`title`)

let titleContent = document.querySelector(`.title`);
let mainTitle = document.createElement(`div`)
titleContent.prepend(mainTitle)
mainTitle.classList.add(`mainTitle`)
mainTitle.innerHTML =`Choose Your Option`

let tinyGrey = document.createElement(`div`)
titleContent.append(tinyGrey)
tinyGrey.classList.add(`tinyGrey`)
tinyGrey.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`

let mainCont = document.createElement(`div`)
bodyContent.append(mainCont)
mainCont.classList.add(`mainCont`)

let leftCont = document.createElement(`div`)
mainCont.append(leftCont)
leftCont.classList.add(`leftCont`)

//  left content begining
let free = document.createElement(`div`)
leftCont.append(free)
free.classList.add(`free`)
free.innerHTML = `FREELANCER`

let init = document.createElement(`div`)
leftCont.append(init)
init.classList.add(`init`)
init.innerHTML = `Initially designed to `

let leftText = document.createElement(`div`)
leftCont.append(leftText)
leftText.classList.add(`leftText`)
leftText.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`

let buttonleft = document.createElement(`div`)
leftCont.append(buttonleft)
buttonleft.classList.add(`buttonleft`)
buttonleft.innerHTML = `START HERE`

//  left content end
//  right content begining

let rightCont = document.createElement(`div`)
mainCont.append(rightCont)
rightCont.classList.add(`rightCont`)

let studio = document.createElement(`div`)
rightCont.append(studio)
studio.classList.add(`studio`)
studio.innerHTML = `STUDIO`

let rightInit = document.createElement(`div`)
rightCont.append(rightInit)
rightInit.classList.add(`rightInit`)
rightInit.innerHTML = `Initially designed to `

let rightText = document.createElement(`div`)
rightCont.append(rightText)
rightText.classList.add(`rightText`)
rightText.innerHTML = `But I must explain to you how all this mistaken idea of denouncing`

let buttonRight = document.createElement(`div`)
rightCont.append(buttonRight)
buttonRight.classList.add(`buttonRight`)
buttonRight.innerHTML = `START HERE`














console.log(html)