var cnv = document.querySelector('canvas')
var ctx = cnv.getContext('2d')



var catX = 0
var catY = 0
var hyp  = 0

var gravit = 0.2

var ball = {
    radius: 20,
    vx: Math.floor(Math.random()*10) +1,
    vy: 0,
    x: 50,
    y: 50,
    color: "#00f",
    held: false
}

cnv.addEventListener('mousedown',function(e){
    var cssValue = "cursor: -webkit-grabbing; cursor: -moz-grabbing;"
    cnv.style.cssText = cssValue
    catX = ball.x - e.offsetX
    catY = ball.y - e.offsetY
    hyp = Math.sqrt(catX*catX + catY*catY)
    
    if(hyp < ball.radius && !ball.held){
        //ball.held = ball.held ? false : true
        ball.held = true
    }
},false)

cnv.addEventListener('mouseup',function(e){
    var cssValue = "cursor: -webkit-grab; cursor: -moz-grab;"
    cnv.style.cssText = cssValue
    if(ball.held){
        ball.held = false
        ball.vx = Math.floor(Math.random()*10) +1
        
    }
},false)

cnv.addEventListener('mousemove',function(e){
    
    if(ball.held){
        ball.x = e.offsetX
        ball.y = e.offsetY
    }
},false)

function loop(){
    window.requestAnimationFrame(loop, cnv)
    update()
    render()
}

function update(){
    if(!ball.held){
        ball.vy += gravit
        ball.y += ball.vy
        ball.x += ball.vx
    }else{
        ball.vy = 0
        ball.vx = 0
    }
    
    // fazer quicar no chão
    if(ball.y + ball.radius > cnv.height){
        ball.y = cnv.height - ball.radius
        ball.vy *=-0.9
    }
    //fazer a bola quicar nas paredes
    if(ball.x - ball.radius < 0 || ball.x + ball.radius > cnv.width){
        // se ball.x - ball.radius < 0, ball.x = ball.radius, se não ball.x = cnv.width - ball.radius
        ball.x = ball.x - ball.radius < 0 ? ball.radius : cnv.width - ball.radius 
        
        /*
        if(ball.x - ball.radius < 0){
            ball.x = ball.radius
        }else{
            ball.x = cnv.width - ball.radius
        }
        */
        ball.vx *=-0.7
    }
}

function render(){
    ctx.clearRect(0,0,cnv.width,cnv.height) // limpa a tela
    ctx.fillStyle = ball.color // define a cor do circulo
    ctx.beginPath() // informa que será criado uma forma diferente de retangulo
    ctx.arc( // desenha o circulo
            ball.x, //posiciona o circulo no eixo x
            ball.y, //posiciona o circulo no eixo y
            ball.radius, // define o valor do raio do circulo
            0, // indica o angulo de inicio de desenho
            Math.PI*2, // indica o angulo de termino do desenho
            false // FALSE por padrão, indica que o circulo será desenhado no sentido ante horário, se TRUE, será desenhado no sentido horário
           )
    ctx.closePath() // informa que o desenho ja foi feito
    ctx.fill() // preenche o circulo
}

loop()