let user_score = 0;
let computer_score = 0;

const userscore = document.querySelector("#user");
const computerscore = document.querySelector("#comp");

const choices =  document.querySelectorAll(".choice");
const para = document.querySelector(".msgpara");

const gencompchoice =() =>{
    let options = ["rock","paper","scissors"];
   let randind  =Math.floor(Math.random() * 3);
   return options[randind];


};
const drawgame =()=>{
    para.innerText="DRAW-Play again";
    para.style.background = "white";
    para.style.color = "black";



};


const showWinner = (userwin,userChoice,compchoice) =>{
    if(userwin){
    user_score++;
    userscore.innerText = user_score;
    para.innerText`"you won the game your ${userChoice} beats ${compchoice} `;
    para.style.background = "green";


    }
    else{
        computer_score++;
        computerscore.innerText = computer_score;
    para.innerText = `you lost the game computer ${compchoice} beats your ${userChoice}`;
    para.style.background = "red";
    }
}


const playgame = (userChoice) => {
    console.log("user choice",userChoice);
    const compchoice = gencompchoice();
    console.log("computer choice",compchoice);
    if(userChoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compchoice ==="paper" ? false : true;
        }else if(userChoice === "paper" ){
            userwin = compchoice === "scissors" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userChoice,compchoice);

    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice,);

    });
});