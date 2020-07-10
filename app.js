var msec=0;
var sec=0;
var min=0;
var milliSecond;
var second;
var minute;
var interval;
function startWatch(){
    msec++;
    milliSecond=document.getElementById("msec");
    milliSecond.innerHTML=msec;
    if(msec>=10)
    {
        sec++;
        second=document.getElementById("sec");
        second.innerHTML=sec;
        msec=0;
    }
    if(sec>=60)
    {
        min++;
        minute=document.getElementById("min");
        minute.innerHTML=min;
        sec=0;
    }
    var disab=document.getElementById("option1").disabled=true;
    
}
function start(){
    interval=setInterval(startWatch,100);
}
function pause(){
    clearInterval(interval);
    var disab=document.getElementById("option1").disabled=false;
}
function reset(){
    msec=0;
    sec=0;
    min=0;
    clearInterval(interval);
    minute=document.getElementById("min");
    minute.innerHTML=min;
    second=document.getElementById("sec");
    second.innerHTML=sec;
    milliSecond=document.getElementById("msec");
    milliSecond.innerHTML=msec;
    var disab=document.getElementById("option1").disabled=false;
}