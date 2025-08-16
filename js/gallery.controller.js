'use strict'
var gCurrFilter = ''

function onInit(){
    renderGallery()
    
}

function renderGallery(){
    const elImgContainer = document.querySelector('.img-container')
    var images = getImgs(gCurrFilter)
    var strHtml = images.map(image => `
        <img src="${image.url}" alt="meme-image" onclick="onSelectImg(${image.id})">
        `)
    elImgContainer.innerHTML = strHtml.join('')   
    
    
}

function onGalleryClick() {
    gElHomePage.classList.remove('hidden')
    gElEditorPage.classList.add('hidden')
    renderGallery()
}

function onSetFilter(elInput){
    gCurrFilter = elInput.value.toLowerCase()
    console.log(gCurrFilter)
    renderGallery()
}
