const hourE1=document.getElementbyid ("hour");

const minutesE1=document.getElementbyid ("minutes");
const secondsE1=document.getElementbyid ("seconds");
const ampmE1=document.getElementbyid ("ampm");

function updateclock(){
    let h= new Date().gethours()
    let m= new Date().getminutes()
    let s= new Date().getseconds()
    let h= new "AM"
    if (h>12){
        h=h-12
        ampm="PM"
    }
    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;
    m=m<10? "0"+m:m;
    
    hourE1.innertext=h;
    minutesE1.innertext=m;
    secondsE1.innertext=s;
    ampmE1.(innertext=ampm)
    
    setTimeout ()={
        updateclock()
    },1000)
    updateclock();
    
    
}