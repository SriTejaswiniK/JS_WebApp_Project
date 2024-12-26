function mouseover(x){
    x.style.boxShadow="20px 10px 10px rgb(164, 79, 197)";
    x.style.top="170";
    x.style.left="500";
}
function mouseout(x){
    x.style.boxShadow="20px 10px 10px rgb(230, 226, 226)";
    x.style.top="180";
    x.style.left="510";
}
let inputField=document.getElementById('inputField');
let answer="";
let count=0;
let buttons=document.querySelectorAll('button'); 
for(i of buttons){
    i.addEventListener('click', (e)=>{
        let value=e.target.innerText;
        console.log('Button text is ',value);
        if(count!=0){
            answer="";
            inputField.value=answer;
            count=0;
        }
        else if(value=='Clear'){
            answer="";
            inputField.value=answer; 
        }
        else if(value=='='){
            count++;
            inputField.value=eval(answer);
        }
        else{
            answer=answer+value;
            inputField.value=answer;
        }
    })
}