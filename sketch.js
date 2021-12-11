var bgImage;
var catAnimation1, catAnimation2, catAnimation3;
var mouseAnimation1, mouseAnimation2, mouseAnimation3;
var cat, mouse

function preload() {
    //carregue as imagens aqui
    bgImage = loadImage("images/garden.png");
    catAnimation1 = loadAnimation("images/cat1.png");
    catAnimation2 = loadAnimation("images/cat2.png","images/cat3.png");
    catAnimation3 = loadAnimation("images/cat4.png");

    mouseAnimation1 = loadAnimation("images/mouse1.png");
    mouseAnimation2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseAnimation3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    cat = createSprite(850,700,20,20); 
    cat.addAnimation("01",catAnimation1);
    cat.addAnimation("02",catAnimation2);
    cat.addAnimation("03",catAnimation3);
    cat.scale = 0.2;
    cat.setCollider("circle",-50,0,500);

    mouse = createSprite(100,750,20,20);
    mouse.addAnimation("01",mouseAnimation1);
    mouse.addAnimation("02",mouseAnimation2);
    mouse.addAnimation("03",mouseAnimation3);
    mouse.scale = 0.1;
    mouse.setCollider("circle",0,0,350);
}

function draw() {

    background(bgImage);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if (cat.x - mouse.x < cat.width/2 - mouse.width/2) {
        mouse.changeAnimation("03");
        cat.changeAnimation("03");
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){
  //Para mover e alterar a animação, escreva o código aqui
    if (keyCode == LEFT_ARROW) {
        mouse.changeAnimation("02");
        mouse.frameDelay = 25;

        cat.velocityX = -5;
        cat.changeAnimation("02");
    }

}
