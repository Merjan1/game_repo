const KeyUp = 38
const KeyDown = 40
const KeyLeft = 37
const KeyRight = 39
let moveUp = false
let moveDown = false
let moveLeft = false
let moveRight = false

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")


let myObj = {
    x: 10,
    y: 10
}

function draw() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.height)
    context.fillRect(myObj.x, myObj.y, 50, 50)
}

function keydownHandler(event) {
    event.preventDefault()
    let key = event.keyCode

    switch (key) {
        case KeyUp:
        case !KeyDown:
            moveUp = true
            break
        case KeyDown:
        case !KeyUp:
            moveDown = true
            break
        case KeyRight:
        case !KeyLeft:
            moveRight = true
            break
        case KeyLeft:
        case !KeyRight:
            moveLeft = true
            break
    }
}


function keyupHandler(event) {
    event.preventDefault()
    let key = event.keyCode

    switch (key) {
        case KeyUp:
        case !KeyDown:
            moveUp = false
            break
        case KeyDown:
        case !KeyUp:
            moveDown = false
            break
        case KeyRight:
        case !KeyLeft:
            moveRight = false
            break
        case KeyLeft:
        case !KeyRight:
            moveLeft = false
            break
    }
}




function move() {
    if (moveUp) {
        myObj.y--
    }
    if (moveDown) {
        myObj.y++
    }
    if (moveRight) {
        myObj.x++
    }
    if (moveLeft) {
        myObj.x--
    }

}

function update() {
    requestAnimationFrame(update, canvas)
    move()
    draw()
}



window.addEventListener("keydown", keydownHandler)
window.addEventListener("keyup", keyupHandler)


update()