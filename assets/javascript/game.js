var wins = 0;
var losses = 0;







function startGame() {
    var randNumber = Math.floor(Math.random() * 101) + 19 ;
    var redNum = Math.floor((Math.random() * 12) + 1);
    var blueNum = Math.floor((Math.random() * 12) + 1);
    var greenNum = Math.floor((Math.random() * 12) + 1);
    var yellowNum = Math.floor((Math.random() * 12) + 1);
    var score = 0;

    $("#gameScore").html(randNumber)
    $("#wins_losses").text("Wins: " + wins)
    $("#wins_losses").append("<hr>" + "Losses " + losses)
    $("#userScore").html(score)

    console.log(score)
    $("#redGem").on("click", function () {
        score += redNum;
        console.log(redNum)
        $("#userScore").text(score);
        if (score === randNumber) {
            alert("You Won");
            wins++;
            score = 0;
            startGame()
        }
        else if (score > randNumber) {
            alert("You Lost!")
            losses++;
            score = 0;
            startGame()
        }
     
    })
    $("#blueGem").on("click", function () {
        score += blueNum;
        console.log(blueNum)
        $("#userScore").html(score);
        if (score === randNumber) {
            alert("You Won");
            wins++;
            score = 0;
            startGame()
        }
        else if (score > randNumber) {
            alert("You Lost!")
            losses++;
            score = 0;
            startGame()
        }
        
    })
    $("#greenGem").on("click", function () {
        score += greenNum;
        console.log(greenNum)
        $("#userScore").html(score);
        if (score === randNumber) {
            alert("You Won");
            wins++;
            score = 0;
            startGame()
        }
        else if (score > randNumber) {
            alert("You Lost!")
            losses++;
            score = 0;
            startGame()
        }
        
    })
    $("#yellowGem").on("click", function () {
        score += yellowNum;
        console.log(yellowNum)
        $("#userScore").html(score);
        if (score === randNumber) {
            alert("You Won");
            wins++;
            score = 0;
            startGame()
        }
        else if (score > randNumber) {
            alert("You Lost!")
            losses++;
            score = 0;
            startGame()
        }
        
    })
    console.log(score)

}
startGame();