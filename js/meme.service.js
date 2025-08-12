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

var gMeme = {
 selectedImgId: 5,
 selectedLineIdx: 0,
 lines: [
 {
 txt: 'I sometimes eat Falafel',
 size: 30,
 color: 'red'
 }
 ]
}

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

function getImgs() {
    return gImgs
}

function getImgById(id){
    return gImgs.find(img => img.id === id)
}

function getMeme(){
    return gMeme
}