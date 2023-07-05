let score = JSON.parse(localStorage.getItem('score'));

if(score === null)
{
    score = {
        wins: 0,
        losses: 0,
        ties: 0,
    };
}
 //calling the score board function  

updatescore();

let result = '';
let computerMove = '';

function playGame(playerMove)
{
   pickComputerMove();

    if (playerMove == 'scissors')
    {
         if(computerMove === 'rock')
        {
        result = 'lose';
        }else if(computerMove === 'paper')
        {
            result = 'Win';
        }else if(computerMove === 'scissors')
        {
            result = 'Tie';
        }
    }
    else if(playerMove == 'paper')
    {
         if(computerMove === 'rock')
        {
        result = 'Win';
        }else if(computerMove === 'paper')
        {
            result = 'Tie';
        }else if(computerMove === 'scissors')
        {
            result = 'lose';
        }
    }

    else if(playerMove == 'rock')
    {
        pickComputerMove(); 

        if(computerMove === 'rock')
        {
        result = 'Tie';
        }else if(computerMove === 'paper')
        {
        result = 'lose';
        }else if(computerMove === 'scissors')
        {
        result = 'Win';
        }
    }

    if(result === 'Win')
    {
        score.wins += 1;
    }
    else if(result === 'lose')
    {
        score.losses += 1;
    }
    else if(result === 'Tie')
    {
        score.ties += 1 ;
    }

   //converting the data in string using JSON and storing the data

    localStorage.setItem('score', JSON.stringify(score));

     //calling the score board function 

    updatescore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
        <img src="image/${playerMove}-emoji.png" 
        class="move-icon">
        <img src="image/${computerMove}-emoji.png"
        class="move-icon">
        computer`;
     
    
}
 
//scoreboard function

function updatescore()
{
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove()
{
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3)
    {
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3)
    {
        computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber <= 1)
    {
        computerMove = 'scissors';
    }
}