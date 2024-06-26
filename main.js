let canvas=document.getElementById("canvas");
let context=canvas.getContext("2d");
var window_height=window.innerHeight;
var window_width=window.innerWidth;
canvas.width=window_width;
canvas.height=window_height;
canvas.style.background='#00008B';
class Rect{
    constructor(xpos,ypos,height,width){
        this.xpos=xpos;
        this.ypos=ypos;
        this.height=height;
        this.width=width;
        
        
    }
    draw(context){
        context.fillStyle="black";
        context.fillRect(this.xpos,this.ypos,this.width,this.height);
    }
    clear(context){
        context.clearRect(this.xpos,this.ypos,this.width,this.height);
    }

} 
class Zombies{
    constructor(xpos,ypos,height,width,color,speed){
        this.xpos=xpos;
        this.ypos=ypos;
        this.height=height;
        this.width=width;
        this.color=color;
        this.speed=speed;
        
        
    }drawZombies(context){
        context.fillStyle="green";
        context.fillRect(this.xpos,this.ypos,this.width,this.height);
    }
    clear(context){
     
        context.clearRect(this.xpos,this.ypos,this.width,this.height);
    }
updatePosition(){
    this.xpos+=this.speed;
}}

class Bullets{
    constructor(xpoint,ypoint,radius,color){
        this.xpoint=xpoint;
        this.ypoint=ypoint;
        this.radius=radius;
        this.color=color;
        this.gravity=0.5
        this.groundLevel=550;
        this.isFalling=false;
        this.fallVelocity=10;
    }
    drawBullets(context){
        context.beginPath();
        context.arc(this.xpoint,this.ypoint,this.radius,0,Math.PI*2,false);
        context.strokeStyle='white';
        context.fillStyle=this.color;
        context.fill();
        context.stroke();
        context.closePath();
    }
    clear(context){
        context.clearRect(0,0,canvas.width,canvas.height);
    }
    fall(){
        if(!this.isFalling){
            this.fallVelocity= 5;
            this.isFalling=true;
        }
    }updatePosition() {
        if (this.isFalling) {

            //this.fallVelocity += this.gravity;
            this.ypoint += this.fallVelocity;
            let groundLevel=650;
            

            // Check if the man has landed back on the ground
            if (this.ypoint+this.radius > this.groundLevel) {
                this.ypoint = man.ypos+25;
                this.isFalling = false;
                //this.fallVelocity = 10;
            
                    
                }
            }
        }

        
    }
    console.log("||||bullet-ypos",Bullets.ypoint);
    console.log("||||bullet-radius",Bullets.radius);
    
function drawScore() {
    context.fillStyle = "white";
    context.font = "20px Arial";
    context.fillText("Score: " + score, 10, 30);
}
    
class Survivor{
    constructor(xpos,ypos,height,width){
        this.xpos=xpos;
        this.ypos=ypos;
        this.height=height;
        this.width=width;
        this.gravity=0.5
        this.groundLevel=550;
        this.isJumping=false;
        this.jumpVelocity=0;


    }drawSurvivor(context){
        context.fillStyle="white";
        context.fillRect(this.xpos,this.ypos,this.width,this.height);

    }
    clear(context){
        context.clearRect(this.xpos,this.ypos,this.width,this.height);
    }
    jump(){
        if(!this.isJumping){
            this.jumpVelocity=15;
            this.isJumping=true;
        }
    }updatePosition() {
        if (this.isJumping) {


            this.ypos += this.jumpVelocity;
            this.jumpVelocity += this.gravity;

            // Check if the man has landed back on the ground
            if (this.ypos >= this.groundLevel) {
                this.ypos = this.groundLevel;
                this.isJumping = false;
                this.jumpVelocity = 0;
            }
        }
    }
    
}
//class Shoot{

//}




const ground=new Rect(0,600,100,10000 );
const hill1=new Rect(400,400,200,100);
const hill2=new Rect(800,400,200,100);
const man=new Survivor(625,200,50,50);
const bullets=new Bullets(650,225,10,'red');
const zombies=new Zombies(Zombies.xpos,400,50,50,'green');
let zombie1=[];
let zombie2=[];
let zombieWidth=50;
for(let i=0;i<4;i++){
    let xpos=100*i;
    let zombie=new Zombies(xpos,550,50,50);
    zombie1.push(zombie);
}
for(let j=0;j<4;j++){
    let xpos=window_width - (j + 2) * (zombieWidth + 50);
    let Zombie=new Zombies(xpos,550,50,50);
    zombie2.push(Zombie);
}
function drawZombies(){
    zombie1.forEach(zombie => {
        zombie.drawZombies(context);
    })
    zombie2.forEach(zombie=> {
        zombie.drawZombies(context);
    })
 
let zombiesList=[];  
}
function drawZomb() {
    zombiesList.forEach(zombie => {
        zombie.drawZombies(context);
    });

}//zombiesList.forEach(zombie=>{
   // console.log(zombie.ypos)});

//zombiesList.forEach(zombie=>{if(

//console.log(zombiesList.zombie);    
        
function isCollided(){
    
    zombiesList.forEach(zombie =>{
        if(isCollidingWith(Bullets)){
        
        }})}
    //Bullets.xpoint > this.xpos && Bullets.xpoint < this.xpos + this.width &&
;



let zombiesList=[];
ground.draw(context);
hill1.draw(context);
hill2.draw(context);
man.drawSurvivor(context);

bullets.drawBullets(context);

document.addEventListener('keydown',(event)=>{
    if (!((man.xpos < hill1.xpos + hill1.width && man.xpos + man.width > hill1.xpos &&
        man.ypos < hill1.ypos + hill1.height && man.ypos + man.height > hill1.ypos)) ){
       //(man.xpos < hill2.xpos + hill2.width && man.xpos + man.width > hill2.xpos &&
        //man.ypos < hill2.ypos + hill2.height && man.ypos + man.height > hill2.ypos))){
        switch(event.key){
        
            case 'ArrowLeft':
                function update(){
                    context.clearRect(man.xpos,man.ypos,canvas.width,canvas.height);
                    man.xpos-=10
                    bullets.xpoint-=10;
                    console.log(man.xpos);
                    ground.draw(context);
                    hill1.draw(context);
                    hill2.draw(context);
                    drawZomb();
                    man.drawSurvivor(context);
                    bullets.drawBullets(context);}
    }}  requestAnimationFrame(update);
    });
document.addEventListener('keydown',(event)=>{
    if (!((man.xpos + man.width > hill2.xpos && man.xpos < hill2.xpos + hill2.width) &&
    (man.ypos + man.height > hill2.ypos && man.ypos < hill2.ypos + hill2.height))){
        switch(event.key){
            case 'ArrowRight':
                function update(){
                    context.clearRect(man.xpos,man.ypos,canvas.width,canvas.height);
                    man.xpos+=10
                    bullets.xpoint+=10;
                    console.log(man.xpos);
                    ground.draw(context);
                    hill1.draw(context);
                    hill2.draw(context);
                    drawZomb();
                    
                    man.drawSurvivor(context);
                    bullets.drawBullets(context);
               
                
            }}
            
        }  requestAnimationFrame(update);
            
    
    //createImage(image,image.xpos,image.ypos,image.height,image.width);
});

document.addEventListener('keydown',(event)=>{
    switch(event.key){

        case ' ':
            //Survivor.gameLoop();
            console.log("hello");
            
            
            bullets.fall();
            //pickRandomSide();

            gameLoop();
            drawZomb();
            
            
            
             


        } 
});
function RandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function pickRandomSide() {
    let side= Math.random() < 0.5 ? 'left' : 'right';
    if(side=='left'){
        let xpos=RandomNumber(5,350);
        let zombie=new Zombies(xpos,550,50,50,'green');
        console.log(xpos);
        zombiesList.push(zombie);
        console.log(zombiesList[0]);
        
        //console.log("hello",zombiesList.zombie.xpos);
        //zombie.drawZombies(context);
        }
    else{
        let xpos=RandomNumber(900,1000);
        let zombie=new Zombies(xpos,550,50,50,'green');
        console.log(xpos);
        zombiesList.push(zombie);
        //zombie.drawZombies(context);
        }
        zombiesList.forEach(zombie => {
            zombie.drawZombies(context);});

    } 
        
    
function isCollidingWith(Bullets) {
    console.log("1");
    console.log(zombiesList[0].xpos);
    console.log(Bullets.ypoint);
    console.log(Bullets.radius);
    


    zombiesList.forEach(zombie=>{
        console.log("zombie-ypos",zombie.ypos);
    console.log("zombie-height",zombie.height);
    if(
    ((Bullets.ypoint+Bullets.radius) <= (zombie.ypos-zombie.height)) ){
        //
        console.log('hi',zombiesList[0]);
        console.log("yes");
        return true;}})
    }    

//let distance=Math.sqrt(((Bullets.xpoint-(Zombies.xpos-25))*(Bullets.xpoint-(Zombies.xpos-25)))+((Bullets.ypoint-(Zombies.ypos-25))*(Bullets.ypoint-(Zombies.ypos-25))));
//console.log(distance);
//let collided=false
//if (distance==20){
//    console.log("collided");
//};



    
    





    
document.addEventListener('keydown',(event)=>{
    switch(event.keyCode){

        case 13:
            function startLoop() {
                let j = 0;
                const maxIterations = 1000;
                const intervalDelay = 1000; // 1000ms = 1 second
                const loopInterval = setInterval(() => {
                    if (j >= maxIterations) {
                        clearInterval(loopInterval); // Stop the interval when maxIterations is reached
                        return;
                    }
                    pickRandomSide();
                    
                    j++;
    }, intervalDelay);
}
 
// Start the loop
startLoop();}})
//console.log("hello and", zombiesList.zombie.xpos);
            
        
let distance=(((Bullets.ypoint+Bullets.radius)-(Zombies.ypos)));
if (distance==0){
    console.log("collided");
}

// Example usage:
let side = pickRandomSide();
function gameLoop() {
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    ground.draw(context);
    hill1.draw(context);
    hill2.draw(context);
    drawZomb();
    man.drawSurvivor(context);
    bullets.updatePosition();
    //Zombies.updatePosition();
    
    
    if (Bullets.ypoint + Bullets.radius >= bullets.groundLevel) {
        Bullets.ypoint = man.ypos - 25; // Reset bullet to the initial position
        bullets.fallVelocity = 10;
        bullets.drawBullets(context);}
    else{
        bullets.drawBullets(context);
    }//pickRandomSide();
    isCollided();

    


    
    //();
    requestAnimationFrame(gameLoop);
}















 












































