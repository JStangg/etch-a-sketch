
const gridSize = 16

const board = function() {
    
    const container = document.querySelector(".container")

    for (row = 0; row < gridSize; row++) {
        const allRows = document.createElement('div')
        allRows.className = 'all-rows'
        container.appendChild(allRows)
    }

    const getAllRows = document.querySelectorAll('.all-rows')

    getAllRows.forEach(eachRow => {
        for (let i = 0; i < gridSize; i++) {
            eachRow.style.height = 600 / gridSize + 'px'

            const square = document.createElement('div')
            square.className = 'square'
            eachRow.appendChild(square)
        }
    })
}

const addHoverEffect = function() {
    const allSquares = document.querySelectorAll('.square')

    allSquares.forEach(eachSquare => {
        eachSquare.addEventListener('mouseover', () => {
            eachSquare.className = 'square change-color'
        })
    })
}

board()
addHoverEffect()


