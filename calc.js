var btn=document.querySelectorAll(".a");
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('mousedown',changeC ,true);
    btn[i].addEventListener('click',solve,true);
    if(btn[i].innerHTML=='DEL'|| btn[i].innerHTML=='AC'){
     btn[i].addEventListener('mouseup',removeD,true);
    }
    else{
        btn[i].addEventListener('mouseup',removeC,true);
    }
}
function changeC(event){
    var box =event.currentTarget;
    box.style.backgroundColor="rgb(183, 166, 143)";
}
function removeC(event){
    var box =event.currentTarget;
    box.style.backgroundColor="bisque";
}
function removeD(event){
    var box =event.currentTarget;
    box.style.backgroundColor="rgb(225, 117, 127);";
}
var len=-1;
var ans=[];
var answer=0;
var err=0;
function solve(event){
    var display=document.querySelector('.display');
    var coeff=event.currentTarget;   
    if(coeff===btn[34]){
        if(err==1){
            display.innerHTML="error"; 
        }
        else{
            display.innerHTML=answer;
            ans=[];
        }
    } 
    else{
        var op;
        if(coeff==btn[0]){
            op="&square";
        }
        ++len;
        ans.push(coeff.innerHTML);  
        display.innerHTML=ans.join('');
        var starting=document.querySelectorAll('.start');
        for(var i=0; i<starting.length;i++){
            if(coeff !==starting){
                err=0;
            }
        }
    }
}




