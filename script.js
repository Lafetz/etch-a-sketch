const divholder=document.querySelector('.divholder');
let divNumber=prompt("enter number of grids you want");
let divHeight=400/divNumber;
const reset=document.querySelector('#reset')
const rainbow=document.querySelector('#rainbow')
const normalColor=document.querySelector("#normal")
const newGrid=document.querySelector('#newGrid')
let Color='black';
let colorRain=true;

newgrid();
addDiv(divNumber,divHeight);
colorful();
normalButton();
colorChange();
resetColor();
 







function addDiv(divsize,divHeight){
    for(let i=0;i<divsize*divsize;i++){
        let div=document.createElement('div');
        div.classList.add('square');
        div.style.maxHeight=`${divHeight}px`
        div.style.minWidth=`${divHeight}px`
        divholder.appendChild(div);

    }
}

function colorChange(){
    const squares=document.querySelectorAll('.square');
squares.forEach(square => {
              square.addEventListener('mouseover',()=>{
                if(!colorRain){Color=`rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;}
                else Color='black';
                  square.style.backgroundColor=Color;
              })    
});
}

function resetColor(){
 
    reset.addEventListener('click',()=>{
        const squares=document.querySelectorAll('.square');
        squares.forEach(square => {
             square.style.backgroundColor="grey";  
             
                      })    
        });
   
}

function randomRgb(){
     return Math.floor(Math.random()*255);
}

function colorful(){
    rainbow.addEventListener('click',()=>colorRain=false);
}
function normalButton(){
    normalColor.addEventListener('click',()=>{
        colorRain=true;
    })
}











function newgrid(){
    newGrid.addEventListener('click',()=>{
        const squares=document.querySelectorAll('.square');
        squares.forEach(square=>{
            divholder.removeChild(square);
        })
        let divNumber=prompt("enter number of grids you want");
        let divHeight=400/divNumber;
        addDiv(divNumber,divHeight);
        colorful();
        normalButton();
        colorChange();
        resetColor();
    }) 
   
}

