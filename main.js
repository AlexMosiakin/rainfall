const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const windowWidth = document.body.clientWidth
const windowHeight = document.body.clientHeight

canvas.width = windowWidth
canvas.height = windowHeight

const gravity = 0.5
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 900,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = 30
        this.height = 30
        this.color = 'black'
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity
        }else{
            this.velocity.y = 0
        }
    }
}

class Platform {
    constructor() {
        this.position = {
            x: 600,
            y: 900,
        }
        this.width = 200
        this.height = 30
        this.color = 'blue'
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class RainDrop {
    constructor({x ,y, speed}) {
        this.position = {
            x,
            y,
        }
        this.fallSpeed = speed
        this.width = 1
        this.height = 2
        this.color = 'blue'
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        if(this.position.y + this.height <= canvas.height){
            this.position.y += this.fallSpeed
        }else{
            this.position.x = Math.random() * windowWidth
            this.position.y = 0
        }
    }
}

class StaminaBar {
    constructor() {
        this.position = {
            x: windowWidth - 125,
            y: 25,
        }
        this.width = 100
        this.height = 10
        this.color = 'green'
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player()
const platform = new Platform()
const rainDrops = []
for (let i = 0; i < 10000; i++) {
    let dropX = Math.random() * windowWidth
    let dropY = Math.random() * windowHeight
    let dropSpeed = Math.random() * 5
    rainDrops.push(new RainDrop({
        x: dropX,
        y: dropY,
        speed: dropSpeed,
    }))
}
const staminaBar = new StaminaBar()

const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
    space:{
        pressed: false,
    }
}

const animate = () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0,0, canvas.width, canvas.height)
    //platform.draw()
    rainDrops.forEach((drop) => {
        drop.update()

        if(keys.space.pressed){
            if(drop.position.y >= (player.position.y + player.height) - Math.floor(Math.random() * (100 - 50 + 1) + 50)
                && drop.position.x <= (player.position.x + (player.width / 2))
                && drop.position.x >= player.position.x - Math.floor(Math.random() * (50 - 25 + 1) + 20)){
                drop.position.x -= Math.random() * 50
                drop.position.y -= 20
            }

            if(drop.position.y >= (player.position.y + player.height) - Math.floor(Math.random() * (100 - 50 + 1) + 50)
                && drop.position.x <= (player.position.x + player.width) + Math.floor(Math.random() * (50 - 25 + 1) + 20)
                && drop.position.x >= player.position.x + (player.width / 2)){
                drop.position.x += Math.random() * 50
                drop.position.y -= 20
            }
        }
    })
    staminaBar.draw()
    player.update()

    if(keys.right.pressed) {
        player.velocity.x = 5 
    }else if(keys.left.pressed) {
        player.velocity.x = -5 
    }else{
        player.velocity.x = 0
    }

    if(keys.space.pressed && staminaBar.width > 0){
        staminaBar.width -= 0.5
    }

    // if(staminaBar.width <= 100){
    //     keys.space.pressed = false
    //     staminaBar.width += 0.5
    // }
    

    if(
        player.position.y + player.height <= platform.position.y 
        && player.position.y + player.height + player.velocity.y >= platform.position.y
        && player.position.x + player.width >= platform.position.x
        && player.position.x <= platform.position.x + platform.width
        ){
        player.velocity.y = 0
    }

    
}

animate()

addEventListener('keydown', ({key}) => {

    switch(key){
        case 'ArrowUp':
            player.velocity.y -= 10 
            break
        case 'ArrowRight':
            keys.right.pressed = true
            break
        case 'ArrowDown':
            //player.velocity.y += 10 
            break
        case 'ArrowLeft':
            keys.left.pressed = true
            break
        case ' ':
            keys.space.pressed = true
            break
    }
})

addEventListener('keyup', ({key}) => {
    switch(key){
        case 'ArrowUp':
            //keys.up.pressed = false
            break
        case 'ArrowRight':
            keys.right.pressed = false
            break
        case 'ArrowDown':
            //keys.down.pressed = false
            break
        case 'ArrowLeft':
            keys.left.pressed = false
            break
        case ' ':
            keys.space.pressed = false
            break
    }
})