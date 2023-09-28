function time(){
    let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let t=document.getElementById("ampm");
let seconds= document.getElementById("seconds");

let currenttime= new Date();

s=currenttime.getSeconds();
h=currenttime.getHours();
m=currenttime.getMinutes();
t.innerHTML=(h<=12)?"AM":"PM";
h=(h>12)?h-12:h;

h=h<10?"0"+h:h;
m=m<10?"0"+m:m;
s=s<10?"0"+s:s;


hour.innerHTML=h;
minute.innerHTML=m;
seconds.innerHTML=s;
setTimeout(time,1000);
}