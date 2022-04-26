
let box = document.getElementsByClassName('box')

let turnCount = 1;
let gameOver = false;
// console.log(box);

for(let i=0; i<box.length; i++){
  box[i].addEventListener('click', add)
}

function add(){
  if(turnCount % 2 === 0 && !gameOver && this.innerHTML == ""){
    turnCount++
    this.innerHTML = 'X'
    
    if(Winner()){
      gameOver = true;
      document.getElementById('over').style.display = "block";
    }

  } else if(turnCount % 2 === 1 && !gameOver && this.innerHTML == ""){
    turnCount++
    this.innerHTML = 'O'

    if(Winner()){
      gameOver = true;
      document.getElementById('over').style.display = "block";
    }
  }
}

function Winner(){
  if(
    box[0].innerHTML != '' &&
    box[0].innerHTML == box[1].innerHTML &&
    box[0].innerHTML == box[2].innerHTML ) {
        return true;
    } else if(
      box[0].innerHTML != '' &&
      box[0].innerHTML == box[3].innerHTML &&
      box[0].innerHTML == box[6].innerHTML ) {
        return true;
    } else if(
      box[0].innerHTML != '' &&
      box[0].innerHTML == box[4].innerHTML &&
      box[0].innerHTML == box[8].innerHTML ) {
        return true;
    } else if(
      box[1].innerHTML != '' &&
      box[1].innerHTML == box[4].innerHTML &&
      box[1].innerHTML == box[7].innerHTML ) {
        return true;
    } else if(
      box[2].innerHTML != '' &&
      box[2].innerHTML == box[5].innerHTML &&
      box[2].innerHTML == box[8].innerHTML ) {
        return true;
    } else if(
      box[2].innerHTML != '' &&
      box[2].innerHTML == box[4].innerHTML &&
      box[2].innerHTML == box[6].innerHTML ) {
        return true;
    } else if(
      box[3].innerHTML != '' &&
      box[3].innerHTML == box[4].innerHTML &&
      box[3].innerHTML == box[5].innerHTML ) {
        return true;
    } else if(
      box[6].innerHTML != '' &&
      box[6].innerHTML == box[7].innerHTML &&
      box[6].innerHTML == box[8].innerHTML ) {
        return true;
    } else {
      return false;
    }
}

let refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  for(let i=0; i<9; i++){
    box[i].innerHTML = "";
  }
  gameOver = false;
  document.getElementById('over').style.display = "none";

})
