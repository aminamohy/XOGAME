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
    if(cell1 == "X"){
        turns.innerHTML="GAME OVER";
        document.getElementById("winnerX").style.display="block";
        document.getElementById("newgame").style.display="block";
    }
}
function WINNER(){
  for(let i = 0 ; i < 10 ; i++){
    cells[i] = document.getElementById("cell"+i);
  }
  if(cells[1] == cells[2]== cells[3] && cells[1]!== ''){
       
  }
  else if(cells[4] == cells[5]== cells[6] && cells[4]!== ''){

  }
  else if(cells[7] == cells[8]== cells[9] && cells[7]!==''){

  }
  else if(cells[1] == cells[5]== cells[9] && cells[1]!== ''){

  }
  else if(cells[3] == cells[5]== cells[7] && cells[7]!==''){

  }
  else if(cells[1] == cells[4]== cells[7] && cells[1]!==''){

  }
  else if(cells[2] == cells[5]== cells[8] && cells[2]!== ''){

  }
  else if(cells[3] == cells[6]== cells[9] && cells[3]!==''){

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

