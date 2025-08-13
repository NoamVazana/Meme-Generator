'use strict'
const gElHomePage = document.querySelector('.gallery-view')
const gElEditorPage = document.querySelector('.editor-view')
var gElCanvas
var gCtx


function onSelectImg(imgId) {
    changeCurrImg(imgId)
    
    gElHomePage.classList.add('hidden')
    gElEditorPage.classList.remove('hidden')

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    window.addEventListener('resize', resizeCanvas)
    renderMeme()
}

function renderMeme() {
    const elImg = new Image()
    const currMeme = getMeme()

    var currImage = getImgById(currMeme.selectedImgId)

    elImg.src = currImage.url
    elImg.onload = () => {
        gElCanvas.height = (elImg.naturalHeight/elImg.naturalWidth) * gElCanvas.width
        gCtx.drawImage(elImg, 0, 0 , gElCanvas.width, gElCanvas.height) // drawing image on canvas after it finish loading
    } 
}


function onDraw(ev){
    const offsetX = ev.offsetX
    const offsety = ev.offsetY

    drawTxt( offsetX, offsety) 
}

function drawTxt( x, y){
    const meme = getMeme();
    const line = meme.lines[meme.selectedLineIdx]

    gCtx.fillStyle = line.color;
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 2
    gCtx.font = `${line.size}px  Arial sans-serif`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y);
}

function onInputSubmit(elInput){

    var inputText = elInput.value
    setLineTxt(inputText)
    renderMeme()
}

function onDownloadCanvas(elLink){
    const dataUrl = gElCanvas.toDataURL()

    elLink.href = dataUrl
}

function resizeCanvas(){
    const elCanvasContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elCanvasContainer.clientWidth
    renderMeme()
}