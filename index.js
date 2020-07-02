// function generate(){
//     var image = document.createElement('img');
//     var div = document.getElementById('flex-cat-gen');
//     image.src='https://cdn2.thecatapi.com/images/b1q.jpg'
//     div.appendChild(image);
// }   

function rpsGame(yourChoice){
    //console.log(yourChoice.id);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice = randomChoice(randomNumber());
    //console.log(botChoice);
    results = decideWinner(humanChoice,botChoice);
   // console.log(result);
   message = finalMessage(results);
   rpsFrontEnd(yourChoice.id,botChoice,message);
   document.getElementById('action-message').remove();
   document.getElementById('footer').remove();
   document.getElementById('final-message').append("Thank you!");

}

function randomNumber(){
    return Math.floor(Math.random() * 3);
}

function randomChoice(number){
   return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
         'rock': {'scissors':1,'rock':0.5,'paper':0},
         'paper': {'rock':1,'paper':0.5,'scissors':0},
         'scissors': {'paper':1,'scissors':0.5,'rock':0}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message':'You lost!','color':'rgb(199, 8, 8)'};
    }else if(yourScore === 0.5){
        return {'message':'You tied!','color':'yellow'};
    }else{
        return {'message':'You won!','color':'rgb(11, 192, 50)'};
    }
}
function rpsFrontEnd(humanImage,computerImage,finalMessage)
{
    var imageDatabase = {
        'rock' : document.getElementById('rock').className,
        'paper' : document.getElementById('paper').className,
        'scissors' : document.getElementById('scissors').className
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var computerDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    
    humanDiv.innerHTML = "<i class='" + imageDatabase[humanImage] + " fa-5x final_human_image'>" + "</i>"; 
     
     messageDiv.innerHTML = "<h1 class='answer' style='color: " + finalMessage['color'] + "; text-shadow: 0px 0px 6px " +finalMessage['color']+" ;  '>" + finalMessage['message'] + "</h1>";
    computerDiv.innerHTML = "<i class='" + imageDatabase[computerImage] + " fa-5x final_bot_image'>"  + "</i>";

    // humanDiv.innerHTML = "<img src='" + imageDatabase[humanImage] + "' height=150 >";
    // messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px;'>" + finalMessage['message'] + "</h1>"
    // computerDiv.innerHTML = "<img src='" + imageDatabase[computerImage] + "' height=150 >";

    document.getElementById('rps-div').appendChild(humanDiv);
    document.getElementById('rps-div').appendChild(messageDiv);
    document.getElementById('rps-div').appendChild(computerDiv);

}
