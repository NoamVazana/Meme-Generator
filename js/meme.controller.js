'use strict'
const gElHomePage = document.querySelector('.gallery-view')
const gElEditorPage = document.querySelector('.editor-view')
var gElCanvas
var gCtx


function onSelectImg(imgId) {

    changeCurrImg(imgId)
    // resetLinePos()
    resetLines()
    gElHomePage.classList.add('hidden')
    gElEditorPage.classList.remove('hidden')

    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    resizeCanvas() //resize when entering editor view

    window.addEventListener('resize', resizeCanvas) //resize of future size changes
    renderMeme()
}

function renderMeme() {
    const elImg = new Image()
    const { selectedImgId, lines , selectedLineIdx} = getMeme();
    var currImage = getImgById(selectedImgId)

    elImg.src = currImage.url
    elImg.onload = () => {
        gElCanvas.height = (elImg.naturalHeight/elImg.naturalWidth) * gElCanvas.width
        gCtx.drawImage(elImg, 0, 0 , gElCanvas.width, gElCanvas.height) // drawing image on canvas after it finish loading
        lines.forEach((line, i) => drawTxt(line, i === selectedLineIdx));

    } 
}


function onLineClick(ev){
    const elInput = document.querySelector('.meme-text')
    var meme = getMeme()

    const offsetX = ev.offsetX
    const offsetY = ev.offsetY

    const clickedLineIdx = meme.lines.findIndex((line, i) => {
        const {width, height} = getLineDimentions(line)
        const {x, y}= line.pos
        return (
            offsetX >= x && offsetX <= x + width &&
            offsetY >= y && offsetY <= y + height
        )
    })
    elInput.value = meme.lines[clickedLineIdx].txt
    changeSelectedLineIdx(clickedLineIdx)
    console.log(clickedLineIdx)
    renderMeme()
}

function drawTxt(line, isHighlighted){

    gCtx.fillStyle = line.fillColor;
    gCtx.strokeStyle = line.borderColor
    gCtx.lineWidth = 1.5
    gCtx.font = `${line.weight} ${line.size}px  ${line.font}`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = 'left';
    gCtx.textBaseline = 'top';
    gCtx.fillText(line.txt, line.pos.x, line.pos.y)
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y);

    if(isHighlighted) drawSelectionBox(line)
   
}


function drawSelectionBox(line){

    // MEASURE LINE DIMENTIONS
    const pad = 12
    const metrics = getLineDimentions(line)  
    const width = metrics.width + pad
    const height =  metrics.height + pad
            
    const x = line.pos.x - pad/2
    const y = line.pos.y - pad/2

    gCtx.rect(x , y  , width, height)
    gCtx.stroke()
}

function getLineDimentions(line){
    const metrics = gCtx.measureText(line.txt)   
    const width = metrics.width 
    const height =  ( line.size * 0.8) + (line.size * 0.2)
    return {width, height}
}


function onInputSubmit(elInput){

    var inputText = elInput.value
    setLineTxt(inputText)
    renderMeme()
}

function onMemeTxttBlur(elInput){
    elInput.value = ''
}

function onDownloadCanvas(elLink){
    const dataUrl = gElCanvas.toDataURL()

    elLink.href = dataUrl
}

function resizeCanvas(){
    const elCanvasContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elCanvasContainer.clientWidth- 60
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

function onSetFont(elOption){
    changeLineFont(elOption.value)
    renderMeme()
}

function onWeightChange(elBtn){
    const isBold = elBtn.checked
    changeLineWeight(isBold)
    renderMeme()
}
