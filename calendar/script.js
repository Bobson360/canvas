const cnv = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const weekDay = ["D","S","T","Q","Q","S","S"]
const date = new Date(); //Define a mensagem
const size = 68;

let posY = 70
const espacamento = 2

//cosnt dia = 
//getDay() pega o dia da semana
//getDate() pega o dia do mes
function draw(){
    
    
    ctx.clearRect(0,0,cnv.width,cnv.height)
    ctx.fillStyle = "#696969"
    
    
    for(var i = 0; i < 7; i++){
        ctx.fillStyle = "##696969"
        ctx.fillRect(espacamento+(size+espacamento)*i, posY, size, size)
    }

    
    
    ctx.font = '18pt Arial'; //Define Tamanho e fonte
    ctx.fillStyle = '#fff'; //Define a cor
    ctx.fillText(date.getDate(), 21+date.getDay()*70, posY+45); //Desenha a mensagem
    ctx.fillStyle = "#696969"
    ctx.fillRect(espacamento, 2, 488, size) // Desenha a Barra Superior, dias da semana D, S, T, Q, Q, S, S
    console.log(date.getDay())

    function weekDayBar(){// Define os dias na barra superior
        var px = 23
        for(let i = 0; i < 7; i++){
            ctx.font = '18pt Arial'; //Define Tamanho e fonte
            ctx.fillStyle = '#fff'; //Define a cor
            ctx.fillText(weekDay[i],px, 45)
            px += 70
        }
    }
    weekDayBar()
}

function wheel(event){
    var y = event.deltaY;
    console.log(y)
    if(y<0){
        posY -= 50
         
    }else{
        posY += 50
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