// sets time to 120 
var timeLeft = 120;

// timer element to set 
var timerEl = document.getElementById('timer');

// store the timer inteval
var timerInterval;

// call this function to start timer 
function startTimer() {
  // decrease time by 1
  timeLeft--;

  // minutes and seconds 
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;

  // if seconds are less than 10 it puts 0 before
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  // timer elements updated 
  timerEl.innerHTML = minutes + ':' + seconds;

  // message when time is up 
  if (timeLeft === 0) {
    clearInterval(timerInterval);
    alert('Time is up!');
  }
}

// start timer 
function startTimerInterval() {
  timerInterval = setInterval(startTimer, 1000);
}

// call timer to start it 
startTimerInterval();

//questions are stored here 
var questionBank= [
    //question one
    {
        question : 'What was the first video game?',
        option : ['Tetris','Pong','Mario','Sonic'],
        answer : 'Pong'
    },
    //question two
    {
        question : 'What is the best-selling video game of all time?',
        option : ['Minecraft','Fortnite','GTA V','Super Mario Bros'],
        answer : 'Minecraft',
    },
    //question three
    {
        question : 'Who created the game Fortnite?',
        option : ['Epic Games','Activision','EA Sports','Ubisoft'],
        answer : 'Epic Games',
    },
    //question four
    {
        question : 'What is the best-selling game console of all time?',
        option : ['PS2','Xbox 360','Nintendo Wii','GameCube'],
        answer : 'PS2',
    },
    //question five
    {
        question : 'What is the highest-grossing mobile game of all time?',
        option : ['Candy Crush','Pokemon Go','PUBG','Clash of Clans'],
        answer : 'PUBG',
    },
    //question six
    {
        question : 'Which of the following game series is developed by Blizzard Entertainment?',
        option : ['Assassins Creed','Overwatch','GTA V','Uncharted'],
        answer : 'Overwatch',
    },
    //question seven
    {
        question : 'What is the name of the yellow, circular character that eats dots in a popular arcade game?',
        option : ['Mario','Luigi','Pac-Man','Steve'],
        answer : 'Pac-Man',
    },
    //question eight
    {
        question : 'What is the name of the classic board game where players move their pieces around a board and try to capture their opponents pieces?',
        option : ['Monopoly','Minecraft','Roblox','Chess'],
        answer : 'Chess',
    },
    //question nine
    {
        question : 'Which of the following is NOT a character in the "Mario Kart" series?',
        option : ['Mario','Luigi','Bowser','Sonic'],
        answer : 'Sonic',
    },
    //question ten
    {
        question : 'In what game do players control a character named Kratos and battle gods and mythical creatures?',
        option : ['God of War',' Devil May Cry','Bayonetta','Nioh'],
        answer : 'God of War',
    }
]
//message bank message is stored here 
var messageArea=[
    {
        message : 'Welldone',
    },
    {
        message : 'Good Job',
    },
    {
        message : 'Nice Try',
    },
    {
        message : 'Better luck next time ',
    },
]

// set the questions to question and connect everything
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var message= document.getElementById('message')
var span= document.querySelectorAll('span');
var i=0;
var score= 0; // keep count of score 

//displays questions one by one with options and stat of what question your on
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stats.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//calculates the score depending on how the user does 
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//message for user depending on how they did depending on their score it will display a different message 
// with conditions
function messagedecider(){
    if(score >= 0 && score<=3){
        message.innerHTML= messageArea[3].message;
    }
    else if(score<=4&&score<=6){
        message.innerHTML= messageArea[2].message;
    }
    else if(score<=7&&score<=9){
        message.innerHTML= messageArea[1].message;
    }
    else{
        message.innerHTML= messageArea[0].message;
    }
}
//displays next questions
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{ // otherwise or once all 10 done it shows score and message
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
        messagedecider();
    }
}


//sees what the user clicks 
next.addEventListener('click',nextQuestion);

//restart quuz button
function backToQuiz(){
    location.reload();
}

//ceck answer is right 
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion(); // calls main program 