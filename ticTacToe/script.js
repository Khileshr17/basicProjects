let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector(".new-btn");
let resetBtn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-box");
let msg = document.querySelector(".msg")
let  turnO =  true;
let winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
    
];
boxes.forEach((box)  =>{
    box.addEventListener("click" , () =>{
        console.log("block was clickree");
       if(turnO){
            box.innerText  = "O"
            turnO = false;
       }
       else{
           box.innerText = "X"
           turnO = true;
       }
       box.disabled = true;
       checkWinner();
    });
});
const disablebtn = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}
const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
let showWinner = (winner) =>{
    msg.innerText = `Congratulation the winner is ${winner}`
    msgContainer.classList.remove("hide")
    disablebtn();

}
let reset = () =>{
    turnO = true ;
    enablebtn();
    msgContainer.classList.add("hide");
}

const checkWinner = () =>{
    for(let pattern of winnerPattern){
        let pos1  = boxes[pattern[0]].innerText;
        let pos2  = boxes[pattern[1]].innerText;
        let pos3  = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 !=  ""){
            if(pos1 ===  pos2 && pos2 === pos3){
                 console.log("Winner" , pos1);
                 showWinner(pos1);
            }
        } 
    
    }
}
newbtn.addEventListener("click" , reset);
resetBtn.addEventListener("click" , reset);


