// Init Grid to draw on
const containerDiv = document.querySelector(".container");
generateGrid();

// Get Grid Cells
const gridCells = document.querySelectorAll("#grid");
gridCells.forEach(function(node) {
    node.addEventListener("mouseenter", () => {
        node.style['background-color'] = "red";
    });
});


function generateGrid() {
    for(let i = 0; i < 255; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.id = "grid";
        containerDiv.appendChild(gridDiv);
    }
}

