let canvas;

function can(){
    canvas = document.getElementById('c_mask')
}

function draw(){
    can();
    if(canvas.getContext){
        const sqr = canvas.getContext('2d');

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        const sW = 500;
        const sH = 500;
        const sX = canvas.width / 2 - sW / 2;
        const sY = canvas.height / 2 - sH / 2;

        sqr.fillStyle = '#fff'
        sqr.beginPath();
        sqr.fillRect(0,0,canvas.width,canvas.height);
        sqr.clearRect(sX,sY,sW,sH);
    }
}

function change(){
    can();
    gsap.to('#c_mask',{
        scale:8,
        duration: 5
    })
}

let a =  setInterval(function(){
    can();
    change();
},1500);

setTimeout(function(){
    clearInterval(a);
    $('canvas').css({'display':'none'});
},3000);
