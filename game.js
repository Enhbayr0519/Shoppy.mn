let squ = document.querySelectorAll('.square')

let current = 'x'

let mass = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


function checkWinner(){
  mass.forEach((test) => {
    let check = test.every(nums => squ[nums].innerText === current);
    if(check){
      result(test)
      alert(current + ' Winner')
    }
  })
}

function result(test){
  test.forEach((nums) => {
    squ[nums].classList.add('square_child')
  })
}

squ.forEach((hell) => {
  hell.addEventListener('click', () => {
    hell.innerText = current
    checkWinner()
    current = current === 'x' ? 'o'  : 'x'
  })
});

