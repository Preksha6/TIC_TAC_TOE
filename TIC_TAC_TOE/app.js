let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turn0=true;

const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
const allBoxes=[[0,1,2],[3,4,5],[6,7,8]];


const resetGame=()=>{
    let turn0=true;
    enablebtns();
    msgcontainer.classList.add("hide");
}
let c=0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        c+=1;
        box.disabled=true;
        chkWinner();
        draw();
    });
});

const disablebtns=()=>{
    for (box of boxes) {
        box.disabled=true;
    }
}

const enablebtns=()=>{
    for (box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}

 const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtns();
}
 
const draw=()=>{
    if(c===9 && !chkWinner())
        {
            msg.innerText=`Match Draw!!`;
            msgcontainer.classList.remove("hide");
            disablebtns();
        }
}

const chkWinner=()=>{
    for (let pattern of winPattern) {
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1===pos2 && pos2===pos3 && pos1===pos3)
            {
                showWinner(pos1);
            } 
        }
    }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
