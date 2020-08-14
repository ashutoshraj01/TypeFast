
var inputfield = document.getElementById('inputfield');
var word = document.getElementById('word');
var scoreVal = document.getElementById('scoreVal');
var timer = document.getElementById('timer');
var modal = document.getElementById('modal');
var closeModal = document.getElementById('closeModal');
var totalValue = document.getElementById('totalValue');


var isInputTakenFirstTime = 0;
var currentWord ='';
var time = 15;
var score = 0;
var intervalTime;
timer.textContent = `Time: ${time}s`;
inputfield.focus();
scoreVal.textContent = `Score: ${score}`;

// Words collections
var wordList = [
    " troop",
     "chase",
     "cottage",
     "means",
     "central",
    "resist",
     "court",
     "looting",
     "damage",
     "decide",
     "pillow",
     "pigeon",
     "sequence",
     "accurate",
     "hammer",
     "referee",
     "lump",
     "exile",
     "terrace",
     "dorm",
     "pepper",
     "appendix",
     "band",
     "stamp",
     "liability",
     "explode",
     "seize",
     "bronze",
     "rush",
     "wrestle",
     "ceremony",
     "strikebreaker",
     "clue",
     "obese",
     "gem",
     "therapist",
     "noise",
     "offense",
     "correspondence",
     "proportion",
     "confusion",
     "illusion",
     "abuse",
     "shiver",
     "ally",
     "superintendent",
     "reputation",
     "stand",
     "portrait",
     "sound"
 ];
 
 const wordListSize = wordList.length;


 // Functions

function randomWordGenerator(){
    return wordList[Math.floor(Math.random()* wordListSize)];
}

function showWord(){
    currentWord  = randomWordGenerator();
    word.textContent = currentWord; 
}




function timeCal(addTime = 0){
    time += addTime;
    time--;
  if(time == 0){
      gameOver();
      time=15;
  }
  timer.textContent = `Time: ${time}s`;
}

function hideModal(){
    modal.style.display = 'none'; 
    restart();
}

function gameOver() {
    clearInterval(intervalTime);
    totalValue.textContent = `You Scored: ${score}`;
    modal.style.display = 'block';
    time=0;
    timer.textContent = `Time: ${time}s`;
  }

function restart(){
    location.reload();
  }



function matchWord(e) { 
    isInputTakenFirstTime++;
    if(isInputTakenFirstTime == 1)
        intervalTime = setInterval(timeCal,1000);

    if(e.target.value == currentWord){
        score++;
        scoreVal.textContent = `Score: ${score}`;
        showWord();
        e.target.value = '';
        timeCal(5);
    }
 }



 showWord();



// Event Listener
closeModal.addEventListener('click',hideModal);

restartBtn.addEventListener('click',hideModal)

document.addEventListener("keydown", function(event) {
    if(event.keyCode === 27){
        restart();
   }
});

 inputfield.addEventListener('input',matchWord);


 // prevent copy functionality

 function killCopy(e){
    return false
}
function reEnable(){
    return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
    document.onmousedown=killCopy
    document.onclick=reEnable
}