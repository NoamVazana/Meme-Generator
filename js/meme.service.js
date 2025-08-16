'use strict'

var gImgs = [
    {id: 1, url: 'meme-imgs/meme-imgs-square/1.jpg', keywords: ['funny', 'man']},
    {id: 2, url: 'meme-imgs/meme-imgs-square/2.jpg', keywords: ['cute', 'dog']},
    {id: 3, url: 'meme-imgs/meme-imgs-square/3.jpg', keywords: ['cute', 'cat']},
    {id: 4, url: 'meme-imgs/meme-imgs-square/4.jpg', keywords: ['cute', 'baby', 'dog']},
    {id: 5, url: 'meme-imgs/meme-imgs-square/5.jpg', keywords: ['cute', 'baby']},
    {id: 6, url: 'meme-imgs/meme-imgs-square/6.jpg', keywords: ['funny', 'man']},
    {id: 7, url: 'meme-imgs/meme-imgs-square/7.jpg', keywords: ['funny', 'baby']},
    {id: 8, url: 'meme-imgs/meme-imgs-square/8.jpg', keywords: ['funny', 'man']},
    {id: 9, url: 'meme-imgs/meme-imgs-square/9.jpg', keywords: ['funny', 'baby']},
    {id: 10, url: 'meme-imgs/meme-imgs-square/10.jpg', keywords: ['funny', 'man']},
    
]

//INITIAL LINE POSITION
// var gPosition = {x: 20, y: 20}

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    nextLinePos: {x: 20, y: 20},

    lines: [
    {
    txt: 'Add text',
    size: 40,
    weight: 'normal',
    font: 'Arial, sans-serif',
    borderColor: 'black',
    fillColor: 'White',
    pos: {x: 20, y: 20},
    isDrag: false
    }
    ]}

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

function switchLineIdx(){
    var line = gMeme.selectedLineIdx
    if(line >= gMeme.lines.length-1 )
        gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}

function getLinePos(idx){
    return gMeme.lines[idx].pos
}

function getImgs() {
    return gImgs
}

function getImgById(id){
    return gImgs.find(img => img.id === id)
}

function getMeme(){
    return gMeme
}

function getLine(){
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getLineTxt(){
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function changeCurrImg(imgId){
    gMeme.selectedImgId = imgId
}

function changeLineBorderColor(color){
    gMeme.lines[gMeme.selectedLineIdx].borderColor = color
}

function changeLineFillColor(color){
    gMeme.lines[gMeme.selectedLineIdx].fillColor = color
}

function increaseLineFont(){
    gMeme.lines[gMeme.selectedLineIdx].size+= 5
}

function decreaseLineFont(){
    gMeme.lines[gMeme.selectedLineIdx].size -= 5
}

function addLine(){
    gMeme.nextLinePos.x += 40
    gMeme.nextLinePos.y += 40
    gMeme.lines.push({
        txt: 'Add text',
        size: 40,
        weight: 'normal',
        font:'Arial, sans-serif',
        borderColor: 'black',
        fillColor: 'White',
        pos: {x: gMeme.nextLinePos.x, y: gMeme.nextLinePos.y},
        isDrag: false
    })
}

function  changeSelectedLineIdx(idx = gMeme.lines.length-1){
    gMeme.selectedLineIdx = idx
}

function resetLines(){
    gMeme.lines = [{
    txt: 'Add text',
    size: 40,
    weight: 'normal',
    font:'Arial, sans-serif',
    borderColor: 'black',
    fillColor: 'White',
    pos: {x: 20, y: 20},
    isDrag: false
    }]
}

function changeLineFont(font){
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function changeLineWeight(isBold){
    if(isBold === true)
        gMeme.lines[gMeme.selectedLineIdx].weight = 'bold'
    else gMeme.lines[gMeme.selectedLineIdx].weight = 'normal'
}

function isLineClicked(offsetX, offsetY){
    const clickedLineIdx = gMeme.lines.findIndex((line, i) => {
        const {width, height} = getLineDimentions(line)
        const {x, y}= line.pos
        return (
            offsetX >= x && offsetX <= x + width &&
            offsetY >= y && offsetY <= y + height
        )
    })
    if(clickedLineIdx >=0)
        changeSelectedLineIdx(clickedLineIdx)

    return clickedLineIdx
}

function setLineDrag(isDrag){
    const line = getLine()
    line.isDrag = isDrag
}

function moveLine(dx, dy){
    const line = getLine()
    line.pos.x += dx
    line.pos.y += dy
}

function setLinePos(x, y){
    const line = getLine()
    if (x !== undefined ) line.pos.x = x
    if (y !== undefined ) line.pos.y = y

}

function deleteLine(){
    const idx = gMeme.selectedLineIdx
    gMeme.lines.splice(idx, 1)

}