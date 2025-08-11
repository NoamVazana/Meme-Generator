'use strict'
const gElHomePage = document.querySelector('.gallery-view')
const gElEditorPage = document.querySelector('.editor-view')
var gElCanvas
var gCtx

function onInit(){
    console.log("page loaded");    

}

function onSelectImg(elImg) {
    gElHomePage.classList.add('hidden')
    gElEditorPage.classList.remove('hidden')

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    drawImg(elImg.src)
}

function drawImg(src) {
    const elImg = new Image()

    elImg.src = src
    gCtx.drawImage(elImg, 0, 0 , gElCanvas.width, gElCanvas.height)
}

function onGalleryClick() {
    gElHomePage.classList.remove('hidden')
    gElEditorPage.classList.add('hidden')
}