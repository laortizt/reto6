const fill = document.querySelector('.fill') /*se agrega .fill*/
const empties = document.querySelectorAll('.empty') /*se agrega .empty*/

fill.addEventListener('dragstart', dragStart) /*se agrega dragStart*/
fill.addEventListener('dragend', dragEnd) /*se agrega dragEnd */

for(const empty of empties) {
    /*se agrega todo*/
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    /*se agrega todo*/
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill' /*aqui*/
}

function dragOver(e) {
    e.preventDefault() /*aqui*/
}

function dragEnter(e) {
    /*todo*/
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty' /*aqui*/
}

function dragDrop() {
    /*todo*/
    this.className = 'empty'
    this.append(fill)
}