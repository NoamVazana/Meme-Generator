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
var gPosition = {x: 20, y: 20}

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,

    lines: [
    {
    txt: 'Add text',
    size: 40,
    borderColor: 'black',
    fillColor: 'White',
    initPos: {x: gPosition.x, y: gPosition.y}
    }
    ]}

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}


function getLinePos(idx){
    return gMeme.lines[idx].initPos
}


function resetLinePos(){
    var gX = 20
    var gY = 20
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
    gPosition.x += 30
    gPosition.y += 30
    gMeme.lines.push({
        txt: 'Add text',
        size: 40,
        borderColor: 'black',
        fillColor: 'White',
        initPos: {x: gPosition.x, y: gPosition.y}
    })
}

function  changeSelectedLineIdx(idx = gMeme.lines.length-1){
    gMeme.selectedLineIdx = idx
}