'use strict'

const heroesEl = document.querySelector('.heroes')

// 이미지 생성
for (let i =1; i<33; i++){
    const heroEl = document.createElement('div')
    heroEl.classList.add('hero')
    const imageEl = document.createElement('div')
    imageEl.classList.add('image')
    
    let url = `https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero${i}.png`
    
    imageEl.style.cssText += `background-image :url(${url})`

    heroesEl.appendChild(heroEl)
    heroEl.appendChild(imageEl)
}