let hsCount = 0
let gsCount = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let hs1 = document.getElementById("hs1")
let hs2 = document.getElementById("hs1")
let hs3 = document.getElementById("hs1")

let gs1 = document.getElementById("gs1")
let gs2 = document.getElementById("gs2")
let gs3 = document.getElementById("gs3")

function h1() {
    hsCount += 1
    homeScore.textContent = hsCount
}

function h2() {
    hsCount += 2
    homeScore.textContent = hsCount
}

function h3() {
    hsCount += 3
    homeScore.textContent = hsCount  
}

function g1() {
    gsCount += 1
    guestScore.textContent = gsCount  
}

function g2() {
    gsCount += 2
    guestScore.textContent = gsCount     
}

function g3() {
    gsCount += 3
    guestScore.textContent = gsCount  
}