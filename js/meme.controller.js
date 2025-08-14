'use strict'
const gElHomePage = document.querySelector('.gallery-view')
const gElEditorPage = document.querySelector('.editor-view')
var gElCanvas
var gCtx


function onSelectImg(imgId) {

    changeCurrImg(imgId)
    resetLinePos()

    gElHomePage.classList.add('hidden')
    gElEditorPage.classList.remove('hidden')

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    window.addEventListener('resize', resizeCanvas)
    renderMeme()
}

function renderMeme() {
    const elImg = new Image()
    const { selectedImgId, lines } = getMeme();
    var currImage = getImgById(selectedImgId)

    elImg.src = currImage.url
    elImg.onload = () => {
        gElCanvas.height = (elImg.naturalHeight/elImg.naturalWidth) * gElCanvas.width
        gCtx.drawImage(elImg, 0, 0 , gElCanvas.width, gElCanvas.height) // drawing image on canvas after it finish loading
        lines.forEach( drawTxt)

    } 
}


function onDraw(ev){
    const offsetX = ev.offsetX
    const offsety = ev.offsetY

    drawTxt( offsetX, offsety) 
}

function drawTxt(line){

    gCtx.fillStyle = line.fillColor;
    gCtx.strokeStyle = line.borderColor
    gCtx.lineWidth = 1.5
    gCtx.font = `${line.size}px  Arial sans-serif`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = 'left';
    gCtx.textBaseline = 'top';
    gCtx.fillText(line.txt, line.initPos.x, line.initPos.y)
    gCtx.strokeText(line.txt, line.initPos.x, line.initPos.y);
   
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

function onSetColor(elInput){
    var color = elInput.value
    
    if(elInput.className === 'border-color')
        changeLineBorderColor(color)
    else changeLineFillColor(color)
    renderMeme()
}

function onSetSize(elBtn){
    
    if(elBtn.classList.contains('increase'))
        increaseLineFont()
    else decreaseLineFont()

    renderMeme()
}

function onAddLine(){
    addLine()
    changeSelectedLineIdx()
    renderMeme()
}

function onSwitchLine(){
    switchLineIdx()    
    renderMeme()
}