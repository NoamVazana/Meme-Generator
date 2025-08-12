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

function onGalleryClick() {
    gElHomePage.classList.remove('hidden')
    gElEditorPage.classList.add('hidden')
    renderGallery()
}