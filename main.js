const container=document.querySelector('.container')
let griditem

function removeChildAll(node) {
    while (node.lastElementChild) {
        node.removeChild(node.lastElementChild);
    }
}

function makeGrid(rows,cols){
    removeChildAll(container)
    for(var i=0;i<(rows*cols);i++){
        const griddiv=document.createElement('div')
        griddiv.classList.add('grid-item')
        container.appendChild(griddiv)
    }
    container.style.cssText=`grid-template-rows: repeat(${rows}, 1fr);grid-template-columns: repeat(${cols}, 1fr);`
}

function addColor(){
    griditem=document.querySelectorAll('.grid-item')
    griditem.forEach((sq)=>{
        sq.addEventListener('mouseover',()=>{
        sq.classList.add('grid-color')
        })
    })
}

function makeColorGrid(rows,cols){
    makeGrid(rows,cols)
    addColor()
}


makeColorGrid(16,16)

function reset(){
    griditem.forEach((sq)=>{
        sq.classList.remove('grid-color')
        sq.style.removeProperty("background");
    })
}

function changeGrid(){                
    const rc=prompt('enter value between 1 and 100')
    makeColorGrid(rc,rc)
}

function black(){
    griditem=document.querySelectorAll('.grid-item')
    griditem.forEach((sq)=>{
        sq.addEventListener('mouseover',()=>{
        sq.style.cssText=`background:black`
        })
    })
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorful(){
    griditem=document.querySelectorAll('.grid-item')
    griditem.forEach((sq)=>{
        sq.addEventListener('mouseover',()=>{
        sq.style.cssText=`background:${randomColor()}`
        })
    })
}
