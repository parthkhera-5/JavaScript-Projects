let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");

let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turnO = true;
let count = 0;
 
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button clicked");
        //playerO
        if(turnO){  
            box.style.color = 'red';
            box.innerText = "O";
            
            turnO = false;
        }
        //playerX
        else{
            box.style.color = 'blue';
            box.innerText = "X";
            turnO= true;
        }

        box.disabled = true;
        count ++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            msg.innerText = `Game Draw`;
            msgContainer.classList.remove('hide');
            disableBoxes();
        }
    });
});

const showWinner = (winner) => {
    if(winner === 'O'){
    msg.innerText = `Congratulations, Winner is ${winner}`;
    }
    else{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const name = () => {
    if(turnO){
        msg.innerText = `Player: ${playername1} chosses O`
    }
}

const checkWinner = () => {
    for(let pattern of winPattern){
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val != "" && pos2val != "" && pos3val !=""){
                if(pos1val==pos2val && pos2val == pos3val){
                    console.log("Winner",pos1val);
                
                    showWinner(pos1val);
                    return true;
                }
            } 
    }
};

const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add('hide');
}

newGameBtn.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);
