
 
for( let i = 1; i < 101; i++){
    let div = document.createElement('div');
    div.innerHTML = i;
    div.classList.add('square')
    document.getElementById('container').appendChild(div);

}