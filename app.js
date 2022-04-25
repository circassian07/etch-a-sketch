const containerBox = document.getElementById('container')

for (let i=0;i<16;i++) {
    containerBox.innerHTML += `<div class=square></div>`;
}

const squares = document.querySelectorAll('.square')

for (let i=0; i < squares.length; i++) {
    squares[i].addEventListener('mouseenter', function (e) {
      squares[i].classList.add('changedColor');
    })
}


