const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
    // elem.addEventListener("drag",drag);
    // elem.addEventListener("dragend",dragEnd);
})

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
})

//Drag and Drop functions

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragEnter(event) {
    if (!event.target.classList.contains("dropped")) {
        event.target.classList.add("droppable-hover");
    }

}
function dragOver(event) {
    if (!event.target.classList.contains("dropped")) {
        event.preventDefault();
    }

}
function dragLeave(event) {
    if (!event.target.classList.contains("dropped")) {
        event.target.classList.remove("droppable-hover");
    }

}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove("droppable-hover");
    const draggableElementData = event.dataTransfer.getData("text");
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    if (draggableElementData === droppableElementData) {
        event.target.classList.add("dropped");
        const draggableElement = document.getElementById(draggableElementData);
        event.target.style.color = draggableElement.style.color;
        // alert("right");
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
        // event.target.insertAdjacentHTML("afterbegin", `<i class="glyphicon glyphicon-${draggableElementData} icon`)
    }
    else (
        alert("wrong answer .. Try again")
    )
}