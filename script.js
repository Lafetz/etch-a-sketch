const divholder=document.querySelector('.divholder');
const divNumber=prompt("enter number of grids you want");
divholder.style.height=`${divNumber*100+divNumber*2}px`
divholder.style.width=`${divNumber*100+divNumber*2}px`
for(let i=0;i<divNumber*divNumber;i++){
    let div=document.createElement('div');
    div.classList.add('square');
    divholder.appendChild(div) 
}


