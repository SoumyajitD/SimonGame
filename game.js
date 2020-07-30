var buttonColours=["red","blue","green","yellow"]
var gamePattern=[]
var userClickedPattern=[]
var started=false;
var level=0;

function nextSequence(){
  randomNumber=Math.floor((Math.random()*4));
randomChosenColour=buttonColours[randomNumber]
$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
gamePattern.push(randomChosenColour)
playSound(randomChosenColour)
$("h1").text("Level"+" "+ level)
level++;

}

function playSound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play()
}

$(".btn").click(function(){
var userChosenColour=this.id;
$("#" + this.id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
userClickedPattern.push(userChosenColour)
playSound(userChosenColour)
checkAnswer(userClickedPattern.length-1)
}
)

$(document).keypress(function(){
  if(started==false){
    nextSequence();
    $("h1").text("Level"+" "+level)
    started=true;
    level++;
  }
})

function checkAnswer(currentLevel){

  if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
    if(userClickedPattern.length==gamePattern.length){
      setTimeout(function(){ nextSequence(); }, 1000);
      userClickedPattern=[]
    }
    console.log("sucesss")
  }
  else{
    playSound("wrong")
    $("body").addClass("game-over")
    $("h1").text("Game Over. Please press a key to try again!")
    setTimeout(function(){ $("body").removeClass("game-over"); }, 200);
    console.log("wrong")
    startOver();
  }

}

function startOver(){
  level=0;
  userClickedPattern=[]
  gamePattern=[];
  started=false;
}
