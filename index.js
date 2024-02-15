let homeScore = 0
let awayScore = 0

function add1Point() {
    document.getElementById("home-score").textContent = homeScore += 1
}

function add2Points() {
    document.getElementById("home-score").textContent = homeScore += 2
}

function add3Points() {
    document.getElementById("home-score").textContent = homeScore += 3
}

function add1PointGuest() {
    document.getElementById("away-score").textContent = awayScore += 1
}

function add2PointsGuest() {
    document.getElementById("away-score").textContent = awayScore += 2
}

function add3PointsGuest() {
    document.getElementById("away-score").textContent = awayScore += 3
}

function resetScores() {
    homeScore = 0
    awayScore = 0
    document.getElementById("home-score").textContent = 0
    document.getElementById("away-score").textContent = 0
}