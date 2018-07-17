const cnv = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const size = 68;

let posY = 2
const espacamento = 2

//cosnt dia = 
//getDay() pega o dia da semana
//getDate() pega o dia do mes
function draw(){
    ctx.clearRect(0,0,cnv.width,cnv.height)
    ctx.fillStyle = "#000"
    for(var i = 0; i <= 7; i++){
        ctx.fillRect(espacamento+(size+espacamento)*i, posY, size, size)
    }
    
    
}

function wheel(event){
    var y = event.deltaY;
    console.log(y)
    if(y<0){
        posY -= size
         
    }else{
        posY += size
    }

}

function loop(){
	window.requestAnimationFrame(loop, cnv)
	//update()
    draw()
    //wheel()
    //console.log('rodando')
}
loop()