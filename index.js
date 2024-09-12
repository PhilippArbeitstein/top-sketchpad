const containerDiv = document.querySelector(".container");
generateGrid();


function generateGrid() {
    for(let i = 0; i < 16; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.id = "grid";
        containerDiv.appendChild(gridDiv);
    }
}