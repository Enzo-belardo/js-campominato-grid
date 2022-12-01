
 
let pulsante= document.getElementById('pulsante')

pulsante.addEventListener('click', function(){

for( let i = 1; i < 101; i++){
  let div = document.createElement('div');
  div.innerHTML = i;
  div.classList.add('square')
  div.addEventListener('click', function(){
    div.classList.add('squareclick')
  })
  document.getElementById('container').appendChild(div);
  }
},{once: true})


