let homeScore = 0;
let guestScore = 0;

//increment
function addScore(team, points) {
    if (team = "home") {
        
    }
}

//home
function homeAddOne() {
    homeScore += 1;
    document.getElementById("homeScore").textContent = homeScore;
}
function homeAddTwo() {
    homeScore += 2;
    document.getElementById("homeScore").textContent = homeScore;    
}
function homeAddThree() {
    homeScore += 3;
    document.getElementById("homeScore").textContent = homeScore;    
}

//guest
function guestAddOne() {
    guestScore += 1;
    document.getElementById("guestScore").textContent = guestScore;    
}
function guestAddTwo() {
    guestScore += 2;
    document.getElementById("guestScore").textContent = guestScore;    
}
function guestAddThree() {
    guestScore += 3;
    document.getElementById("guestScore").textContent = guestScore;
}

//new game
function newGame() {
    homeScore = 0
    document.getElementById("homeScore").textContent = homeScore;
    
    guestScore = 0
    document.getElementById("guestScore").textContent = guestScore;

    homeBox.classList.remove("winning-score");
    guestBox.classList.remove("winning-score");

}

//leader
let winningTeam = 0;
let homeBox = document.getElementById("homeScore");
let guestBox = document.getElementById("guestScore");

function winner() {
    if(homeScore > guestScore) {
        winningTeam = homeScore;
        homeBox.classList.add("winning-score");
        guestBox.classList.remove("winning-score");
        
    } else if(homeScore < guestScore) {
        winningTeam = guestScore;
        guestBox.classList.add("winning-score");
        homeBox.classList.remove("winning-score");
    }
}
