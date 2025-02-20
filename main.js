let turns =document.querySelector(".turns");
let Turn = 'X';

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("cell")) {
            document.getElementById("glow-text").style.display= "none";
        }
    }
);
let cells =[];
function XORO( cell1 , cell2 , cell3){
    if(cells[cell1] == "X"){
        turns.innerHTML="GAME OVER";
        document.getElementById("winnerX").style.display="block";
        document.getElementById("newgame").style.display="block";

        document.getElementById("cell" + cell1).style.background = "green";
        document.getElementById("cell" + cell2).style.background = "green";
        document.getElementById("cell" + cell3).style.background = "green";

        turns.innerHTML = `${cells[cell1]} Winner`;
    }

    else if (cells[cell1] == "O"){
      turns.innerHTML = "GAME OVER";
      document.getElementById("winnerO").style.display = "block";
      document.getElementById("newgame").style.display="block";
      
      document.getElementById("cell" + cell1).style.background = "green";
      document.getElementById("cell" + cell2).style.background = "green";
      document.getElementById("cell" + cell3).style.background = "green";
    }
}

function DRAW(){
  document.getElementById("NOwinner").style.display = "block";
}

function WINNER(){
  for(let i = 1 ; i < 10 ; i++){
    cells[i] = document.getElementById("cell"+i).innerHTML;
  }
  if(cells[1] == cells[2] && cells [1] == cells[3] && cells[1]!= ''){
    XORO(1,2,3);
  }
  else if(cells[4] == cells[5] && cells [4] == cells[6] && cells[4]!== ''){
    XORO(4,5,6);
  }
  else if(cells[7] == cells[8] && cells [7] == cells[9] && cells[7]!==''){
    XORO(7,8,9);
  }
  else if(cells[1] == cells[5] && cells [1] == cells[9] && cells[1]!== ''){
    XORO(1,5,9);
  }
  else if(cells[3] == cells[5] && cells [3] == cells[7] && cells[7]!==''){
    XORO(3,5,7);
  }
  else if(cells[1] == cells[4] && cells [1] == cells[7] && cells[1]!==''){
    XORO(1,4,7);
  }
  else if(cells[2] == cells[5] && cells [2] == cells[8] && cells[2]!== ''){
    XORO(2,5,8);
  }
  else if(cells[3] == cells[6] && cells [3] == cells[9] && cells[3]!==''){
    XORO(3,6,9);
  }

  else if (cells[1] != '' && cells[2] != '' && cells[3] != '' && cells[4] != '' &&
          cells[5] != '' && cells[6] != '' && cells[7] != '' && cells[8] != '' && cells[9] != '') {
    DRAW();
  }
};
function game(id)
{
    
   let cell = document.getElementById(id);
   if(Turn ==='X' && cell.innerHTML == '' )
    {
      cell.innerHTML = 'X';
      Turn = 'O';
      turns.innerHTML ="O";
   }
   else if(Turn === 'O' && cell.innerHTML==''){
    cell.innerHTML = 'O';
    Turn= 'X';
    turns.innerHTML="X";
   }
   
   WINNER();
   
}

