/*<!--In the name of kindly generous ALLAH-->
<!--Thanks ALLAH-->
*/

const body = document.body
const boom = document.getElementById("boom")

const ctx = boom.getContext("2d")

boom.style.width = "100vw"
boom.style.height = "100vh"

window.addEventListener("load",function(){
    boom.setAttribute("width", "" + boom.getBoundingClientRect().width)
    boom.setAttribute("height", "" + boom.getBoundingClientRect().height)
    let color = getComputedStyle(document.body).getPropertyValue("--focus-color")
    ctx.fillStyle =  `rgb(${color})`
    ctx.strokeStyle = `rgb(${color})`
})

const boomW = boom.clientWidth
const boomH = boom.clientHeight
const minimum = Math.min(boomW, boomH)
const step = 1
const r = Math.min(10, minimum / 30)
const dist = Math.min(minimum / 3, 200)
const mouseDist = dist
const countOfDots = 30


let mouseX, mouseY

document.addEventListener("touchmove", (ev) => {
    mouseX = ev.touches[0].pageX
    mouseY = ev.touches[0].pageY
})
document.addEventListener("mousemove", (ev) => {
    mouseX = ev.x
    mouseY = ev.y
})



//an array of dots
//[[x,y,angle,collision]]
let dots
createRandomDots(countOfDots)


function startStarsAnimation(count) {
    for (let i = 0; i < count; i++) {
        let x = parseInt(Math.random() * boomW)
        let y = parseInt(Math.random() * boomH)
        drawCircle(x, y)
    }
}


function createRandomDots(count) {
    dots = []
    for (let i = 0; i < count; i++) {
        let x = parseInt(Math.random() * boomW)
        let y = parseInt(Math.random() * boomH)
        let rad = Math.random() * Math.PI * 2 - Math.PI
        dots.push([x, y, rad, false])
    }
}

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2, 0)
    ctx.closePath()
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function render(step, dist) {
    let lastI = 0
    dots = dots.map(dot => {
        let stepOne = step
        let x1 = dot[0]
        let y1 = dot[1]
        for (let i = lastI + 1; i < dots.length; i++) {
            let otherDot = dots[i]
            let x2 = otherDot[0]
            let y2 = otherDot[1]
            if (Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) <= dist)
                drawLine(x1, y1, x2, y2)
        }
        if (Math.sqrt((mouseX - x1) ** 2 + (mouseY - y1) ** 2) <= mouseDist) {
            stepOne *= 5
        } else if (stepOne != step) {
            stepOne -= Math.round(Math.max(0, (stepOne - step) / 4))
        }
        drawCircle(dot[0], dot[1])
        let dX = stepOne * Math.cos(dot[2]), dY = stepOne * Math.sin(dot[2])
        dot[0] += dX
        dot[1] += dY

        if (!dot[3]) {
            if (dot[0] < 0 || dot[0] > boomW) {
                dot[2] = (dot[2] < 0 ? -1 : 1) * Math.PI - dot[2]
                dot[0] = (dot[0] >= 0) * boomW
            }
            if (dot[1] < 0 || dot[1] > boomH) {
                dot[2] = - dot[2]
                dot[1] = (dot[1] >= 0) * boomH
            }
        } else dot[3] = false
        lastI++
        return dot
    })
}

let inter
function start() {
    inter = setInterval(() => {
        clear()
        render(step, dist)
    }, 50)
}
function end() {
    clearInterval(inter)
}

start()

function clear() {
    ctx.clearRect(0, 0, boomW, boomH)
}