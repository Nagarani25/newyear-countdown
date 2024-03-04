const countdown=document.getElementById('countdown');
const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minute=document.getElementById('minute');
const second=document.getElementById('second');
const year=document.getElementById('year');


const currentyear=new Date().getFullYear();
const nextyear=currentyear+1; //2025

let newYearTime=new Date(`January 01 ${nextyear} 00:00:00`);

function update()
{
    let currentTime=new Date(); //date+time
    let diff=newYearTime-currentTime;

    let d=Math.floor(diff/1000/60/60/24);
    let h=Math.floor(diff/1000/60/60) % 24;
    let m=Math.floor(diff/1000/60) % 60;
    let s=Math.floor(diff/1000) % 60;

    days.innerHTML=d < 10 ? "0"+d : d;
    hours.innerHTML=h < 10 ? "0"+h : h;
    minute.innerHTML=m < 10 ? "0"+m : m;
    second.innerHTML=s < 10 ? "0"+s : s;
}

setInterval(update,1000);