/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

var lastdice;


init()

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        
    var dice1 = Math.floor(Math.random () * 6) + 1;
    var dice2 = Math.floor(Math.random () * 6) + 1;
    var diceDom1 = document.getElementById('dice-1');
    var diceDom2 = document.getElementById('dice-2');
    diceDom1.style.display = 'block';
    diceDom2.style.display = 'block';
    diceDom1.src = 'dice-' + dice1 + '.png';
    diceDom2.src = 'dice-' + dice2 + '.png';

    //     if(dice == 6 && lastdice == 6){
    //         //person lost score
    //         scores[activePlayer] = '0';
    //         document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    //         nextPlayer();
    //     }
    //     else if(dice !== 1){
    //         document.querySelector('#current-' + activePlayer).textContent = roundScore;
    //         roundScore += dice;
    //        }
    //        else {
    //     nextPlayer();
    //        }

   
    //        lastdice = dice;


    // }
    if(dice1 !== 1 && dice2 !==1){
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                roundScore += dice1 + dice2;
               }
               else {
            nextPlayer();
               }
            }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        
    //add active player score here
    scores[activePlayer] += roundScore;
    //Update in UI
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    //check player who won

    //input field
        var input = document.querySelector('.final-score').value;
        var winningscrore;
        //input should not be null, "", undefined, 0 are coercedto false
        if(input){
            winningscrore = input;
        }
        else {
            winningscrore = 30;
        }

    if(scores[activePlayer] >= winningscrore){
        document.querySelector('#name-' + activePlayer).textContent = 'winner';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else{
        nextPlayer();
    }

    //Active player has to switch on click of hold after score update
    }
    
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       roundScore = 0;
       var diceDom = document.querySelector('.dice');
       document.getElementById('current-0').textContent = '0';
       document.getElementById('current-1').textContent = '0';
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
       var diceDom1 = document.getElementById('dice-1');
    var diceDom2 = document.getElementById('dice-2');
       diceDom1.style.display = 'none';
       diceDom2.style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
var diceDom1 = document.getElementById('dice-1');
    var diceDom2 = document.getElementById('dice-2');
    diceDom1.style.display = 'block';
    diceDom2.style.display = 'block';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
}