const button = document.querySelector('button')
button.addEventListener('click',getNewColor)
function getNewColor(){
    var symbols = "0123456789ABCDEF"
    var color = "#"
    for(var i=0;i<6;i++){
      color = color + symbols[Math.floor(Math.random() * 16)]
    }
    document.body.style.backgroundColor = color;
    document.querySelector('#hexa').innerHTML = color;
}

document.querySelector('h4').addEventListener('click',()=>{
    document.querySelector('.detail-box').classList.toggle('show')
})