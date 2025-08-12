'use strict'
const gElHomePage = document.querySelector('.gallery-view')
const gElEditorPage = document.querySelector('.editor-view')
var gElCanvas
var gCtx

function onInit(){
    console.log("page loaded");    
    renderGallery()
}

function renderGallery(){
    const elImgContainer = document.querySelector('.img-container')
    var images = getImgs()
    var strHtml = images.map(image => `
        <img src="${image.url}" alt="meme-image" onclick="onSelectImg(${image.id})">
        `)
    elImgContainer.innerHTML = strHtml.join('')    
}

function onSelectImg(imgID) {
    const currMeme = getMeme()
    currMeme.selectedImgId = imgID
    var img = getImgById(imgID)
    
    gElHomePage.classList.add('hidden')
    gElEditorPage.classList.remove('hidden')

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme(img.url, currMeme)
}

function renderMeme(src, meme) {
    const elImg = new Image()

    elImg.src = src
    gCtx.drawImage(elImg, 0, 0 , gElCanvas.width, gElCanvas.height) // loading the image in canvas
}

function onGalleryClick() {
    gElHomePage.classList.remove('hidden')
    gElEditorPage.classList.add('hidden')
    renderGallery()
}

function onDraw(ev){
    const offsetX = ev.offsetX
    const offsety = ev.offsetY

    drawTxt( offsetX, offsety) 
}

function drawTxt( x, y){
    const meme = getMeme();
    const line = meme.lines[0];

    gCtx.fillStyle = line.color;
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 2
    gCtx.font = `${line.size}px  Arial sans-serif`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y);

}
