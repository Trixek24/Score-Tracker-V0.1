Team1_score = 0;
Team2_score = 0;

function teamoneAdd()
{
    Team1_score = Team1_score + 1;
    localStorage.setItem("Team 1 Score",Team1_score);
    console.log("Team 1's Score is " + Team1_score);
    document.getElementById("Score_1").innerHTML = Team1_score;
}

function teamtwoAdd()
{
    Team2_score = Team2_score + 1;
    localStorage.setItem("Team 2 Score",Team2_score);
    console.log("Team 2's Score is " + Team2_score);
    document.getElementById("Score_2").innerHTML = Team2_score;
}

function teamoneSub()
{
    Team1_score = Team1_score - 1;
    localStorage.setItem("Team 1 Score",Team1_score);
    console.log("Team 1's Score is " + Team1_score);
    document.getElementById("Score_1").innerHTML = Team1_score;
}

function teamtwoSub()
{
    Team2_score = Team2_score - 1;
    localStorage.setItem("Team 2 Score",Team2_score);
    console.log("Team 2's Score is " + Team2_score);
    document.getElementById("Score_2").innerHTML = Team2_score;
}