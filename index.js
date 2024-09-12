const containerDiv = document.querySelector(".container");
generateGrid();

const createBtn = document.querySelector(".create");
createBtn.addEventListener("click", getUserInput);

function generateGrid(squaresPerSide = 16) {
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.id = "grid";
    containerDiv.appendChild(gridDiv);
  }

  drawOnGrid();
}

function drawOnGrid() {
  const gridCells = document.querySelectorAll("#grid");
  gridCells.forEach((node) => {
    node.addEventListener("mouseenter", () => {
      node.style["background-color"] = "red";
    });
  });
}

function eraseGrid() {
  const gridCells = document.querySelectorAll("#grid");
  gridCells.forEach((node) => {
    node.remove();
  });
}

function getUserInput() {
  const gridSize = Number(prompt("Enter new Sketchpad Size"));
  if (gridSize <= 100 && typeof gridSize === "number") {
    eraseGrid();
    generateGrid(gridSize);
  } else {
    getUserInput();
  }
}
