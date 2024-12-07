var timer =60;
var score=0;
var hitrn=0;
//jispe clk vo element  raise hoga aur evernt  listner na milne pr event element ke parent par listner dhudenga,waha bhi namilne pr evernt parent k parent pr listner dhundega

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit()
{
     hitrn=Math.floor(Math.random()*10);
    document.querySelector("#Hitval").textContent=hitrn;
}
function makeBubble(){
    var clutter="";

for(var i=1;i<=140;i++){
   hitrn= Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${hitrn}</div> `;
}
document.querySelector("#pbtm").innerHTML=clutter;
}


function runTimer()
{
    var timerint=setInterval(function(){
        if(timer>0){

        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`GAME OVER`;
        }

    },1000);
        
    
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
}

);


runTimer();
makeBubble();
getNewHit();
