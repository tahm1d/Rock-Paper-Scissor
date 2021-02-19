const uImg = document.querySelector(".u");
const cImg = document.querySelector(".c");
const rBtn = document.querySelector(".rock");
const pBtn = document.querySelector(".paper");
const sBtn = document.querySelector(".scissor");
const result = document.querySelector(".result");

const win = new Audio("/sfx/success1.mp3");
const play = new Audio("/sfx/pruing1.mp3");
const lose = new Audio("/sfx/lose1.mp3");


function rand()
{
    return 1+Math.floor(Math.random()*3);
}


function res(u,c)
{
    if(u==1)
    {
        if(c==2)
        {
            result.innerHTML="Computer wins!";
            lose.play();
            //console.log("Computer wins!");
        }

        else if(c==3)
        {
            result.innerHTML="You win!";
            win.play();
            //console.log("You win!");
        }

        else if(c==1)
        {
            result.innerHTML="Draw!";
            play.play();
            //console.log("Draw!");
        }
    }

    else if(u==2)
    {

        if(c==1)
        {
            result.innerHTML="You win!";
            win.play();
            //console.log("You win!");
        }

        else if(c==3)
        {
            result.innerHTML="Computer wins!";
            lose.play();
            //console.log("Computer wins!");
        }

        else if(c==2)
        {
            result.innerHTML="Draw!";
            play.play();
            //console.log("Draw!");
        }

    }


    else if(u==3)
    {

        if(c==1)
        {
            result.innerHTML="Computer wins!";
            lose.play();
            //console.log("Computer wins!");
        }

        else if(c==2)
        {
            result.innerHTML="You win!";
            win.play();
            //console.log("You win!");
        }

        else if(c==3)
        {
            result.innerHTML="Draw!";
            play.play();
            //console.log("Draw!");
        }

    }
}



rBtn.addEventListener("click", function()
{
    //play.play();
    let uValue = 1;
    uImg.src = `/images/${uValue}.png`;

    let cValue = rand();
    cImg.src = `/images/${cValue}.png`;

    res(uValue,cValue);
    

});


pBtn.addEventListener("click", function()
{
    //play.play();
    let uValue = 2;
    uImg.src = `/images/${uValue}.png`;

    let cValue = rand();
    cImg.src = `/images/${cValue}.png`;

    res(uValue,cValue);
    

});

sBtn.addEventListener("click", function()
{
    //play.play();
    let uValue = 3;
    uImg.src = `/images/${uValue}.png`;

    let cValue = rand();
    cImg.src = `/images/${cValue}.png`;

    res(uValue,cValue);
    

});