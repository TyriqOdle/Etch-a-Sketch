const grid = document.querySelector(".grid");
const colorPiker = document.querySelector("#Color")
const inputSize = document.querySelector("#gridSize")
const eraser_text = document.querySelector(".eraser-text")
let eraser_toggle = false

createGrid()

inputSize.addEventListener("input", createGrid)
colorPiker.addEventListener("input",colorChange)

document.addEventListener("keydown", function(e){
    if(e.key == 'Control' && eraser_toggle == false){
        eraser_toggle = true
        colorChange()
    }else if (e.key == 'Control' && eraser_toggle == true){
        eraser_toggle = false
        colorChange()
    }
        
    
})










function createGrid(){
    grid.innerHTML = ""
    
    const gridSize = inputSize.value
    for(i = 0; i <=gridSize; i++){
        let div = document.createElement(`div${i}`);
        div.setAttribute("style", " border-left: 1px solid black; border-right : 1px solid black; display: flex; flex-direction: column;  ");
        grid.appendChild(div);
    
        for(j = 0; j <= gridSize; j++){
            let div2 = document.createElement("divInner");
            div2.setAttribute("style", "border-top: 1px solid black; width: 40px; height: 40px; background-color: white");
            div2.classList.toggle("square")
            div.appendChild(div2);
        }
    }
    colorChange()

}



function colorChange(){
    if(eraser_toggle == false){
        eraser_text.textContent = `Press "CTRL" for eraser | Eraser: OFF`
        
        const color = colorPiker.value
        const boxs = document.querySelectorAll(".square")
        boxs.forEach((box) =>{
            box.addEventListener("mouseover", () =>{
                box.style.background = color
            } )
        } )
        
    }else if (eraser_toggle == true){
        eraser_text.textContent = `Press "CTRL" for eraser | Eraser: ON`
        const boxs = document.querySelectorAll(".square")
        boxs.forEach((box) =>{
            box.addEventListener("mouseover", () =>{
                box.style.background = "white"
            } )
        } )
    }

}