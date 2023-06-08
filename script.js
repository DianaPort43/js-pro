// PLAYERCHOICES
var choices =["✊", "✋", "✌"];



function selectChoice(index){
    var playerSign = document.querySelector('#playerSign')
    playerSign.innerHTML=choices[index];

    var choiceElements = document.querySelector('.btn-play');
    for (var i = 0; i < choiceElements.length; i++) {
      if (i !== index) {
        choiceElements[i].classList.add('dimmed');
      }
    }
    setTimeout(function() {
        for (var i = 0; i < choiceElements.length; i++) {
            choiceElements[i].classList.remove('dimmed');
        }
        playerSign.innerHTML = '❔';
      }, 2000);
}

// COMPUTER CHOICES

function getComputerChoice(randomIndex) {
    var randomIndex = Math.floor(Math.random() * choices.length);
    computerSign.innerHTML = choices[randomIndex];

    var compChoiceElements = document.querySelector('.btn');
    for (var i = 0; i < compChoiceElements.length; i++) {
      if (i !== index) {
        compChoiceElements[i].classList.add('dimmed');
      }
    }
    setTimeout(function() {
        for (var i = 0; i < compChoiceElements.length; i++) {
            compChoiceElements[i].classList.remove('dimmed');
        }
        computerSign.innerHTML = '❔';
      }, 2000);
}

