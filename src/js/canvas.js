import threeImageSrc from '../img/three.png'
import playerImageSrc from '../img/player.png'
import stoneImageSrc from '../img/stone.png'
import cloudImageSrc from '../img/cloud.png'

const threeImage = new Image()
threeImage.src = threeImageSrc

const playerImage = new Image()
playerImage.src = playerImageSrc

const stoneImage = new Image()
stoneImage.src = stoneImageSrc

const cloudImage = new Image()
cloudImage.src = cloudImageSrc

const canvas = document.querySelector('canvas')
const scoreElement = document.querySelector('#score')
const scoreTotal = document.querySelector('.score-total')
const tryAgain = document.querySelector('.score-total-btn')
const ctx = canvas.getContext('2d')

const windowWidth = document.body.clientWidth
const windowheight = document.body.clientHeight

canvas.width = windowWidth
canvas.height = windowheight

const gravity = 0.5

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

let winCondition = true

let scrollOffset = 0

let score = 0
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = 50
        this.height = 150
        this.image = playerImage
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
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
    constructor({x ,y, width, height, color}) {
        this.position = {
            x,
            y,
        }
        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Background {
    constructor({x ,y, width, height, color}) {
        this.position = {
            x,
            y,
        }
        this.width = width
        this.height = height
        this.color = color
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Three {
  constructor({x ,y, width, height}) {
      this.position = {
          x,
          y,
      }
      this.width = width
      this.height = height
      this.image = threeImage
  }

  draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}

class Cloud {
  constructor({x ,y, width, height}) {
      this.position = {
          x,
          y,
      }
      this.width = width
      this.height = height
      this.image = cloudImage
  }

  draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
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
        if(this.position.y + this.height <= (windowheight - 150) ){
            this.position.y += this.fallSpeed
        }else{
            this.position.x = Math.random() * windowWidth
            this.position.y = 0
        }
    }
}
class Collision {
  constructor({x ,y, width, height}) {
    this.position = {
        x,
        y,
    }
    this.width = width
    this.height = height
    this.image = stoneImage
}

draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
}
}

const player = new Player()
const platforms = [new Platform({
    x: 0,
    y: windowheight - 150,
    width: windowWidth,
    height: 150,
    color: '#594240'
})]
const backgrounds = [new Background({
    x: 0,
    y: 200,
    width: windowWidth,
    height: 450,
    color: '#98FFA2'
}),
new Background({
  x: 0,
  y: 0,
  width: windowWidth,
  height: 200,
  color: '#98F3FF'
})]
const collisions = [new Collision({
    x: windowWidth,
    y: windowheight - 100,
    width: 50,
    height: 50,
})]
const rainDrops = []
for (let i = 0; i < 10000; i++) {
    // let dropX = Math.random() * windowWidth 
    // let dropY = Math.random() * (windowheight - 300)
    // let dropSpeed = Math.random() * 5
    // rainDrops.push(new RainDrop({
    //     x: dropX,
    //     y: dropY,
    //     speed: dropSpeed,
    // }))
}

const forest = [
  new Three({
    x: -85,
    y: windowheight - 600,
    width: 300,
    height: 500,
  }),
  new Three({
    x: 300,
    y: windowheight - 440,
    width: 200,
    height: 340,
  }),
  new Three({
    x: (windowWidth / 2) - 150,
    y: windowheight - 650,
    width: 300,
    height: 550,
  }),
  new Three({
    x: (windowWidth / 1.3) - 110,
    y: windowheight - 470,
    width: 220,
    height: 370,
  }),
  new Three({
    x: windowWidth - 150,
    y: windowheight - 600,
    width: 300,
    height: 500,
  }),
]

const sky = [
  new Cloud({
    x: 50,
    y: 80,
    width: 100,
    height: 50,
  }),
  new Cloud({
    x: (windowWidth / 4) - 50,
    y: 40,
    width: 100,
    height: 50,
  }),
  new Cloud({
    x: (windowWidth / 2) - 50,
    y: 80,
    width: 100,
    height: 50,
  }),
  new Cloud({
    x: (windowWidth / 1.3) - 50,
    y: 40,
    width: 100,
    height: 50,
  }),
  new Cloud({
    x: windowWidth - 150,
    y: 80,
    width: 100,
    height: 50,
  }),
]

const animate = () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0,0, canvas.width, canvas.height)
    platforms.forEach((platform) => {
        platform.draw()
    })
    backgrounds.forEach((background) => {
        background.draw()
    })
    collisions.forEach((collision) => {
        collision.draw()
    })
    sky.forEach((cloud) => {
      cloud.draw()
    })
    forest.forEach((three) => {
      three.draw()
    })

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
    player.update()

    if(keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5 + (scrollOffset / 1000000)
    }else{
        player.velocity.x = 0

        if(keys.right.pressed && winCondition){
            scrollOffset += 1
            collisions.forEach((collision) => {
                collision.position.x -= 5 + (scrollOffset / 100)
            })
            forest.forEach((three) => {
              three.position.x -= (scrollOffset / 100)
            })
            sky.forEach((cloud) => {
              cloud.position.x -= (scrollOffset / 100)
            })
        }
    }
    
    platforms.forEach((platform) => {
        if(
            player.position.y + player.height <= platform.position.y + 100
            && player.position.y + player.height + player.velocity.y >= platform.position.y + 100
            ){
            player.velocity.y = 0
        }
    })

    collisions.forEach((collision) => {
        if(
            player.position.y + player.height <= collision.position.y 
            && player.position.y + player.height + player.velocity.y >= collision.position.y
            && player.position.x + player.width >= collision.position.x
            && player.position.x <= collision.position.x + collision.width
            ){
            player.velocity.y = 0
        }
        
        if( player.position.x + player.width >= collision.position.x
            && player.position.x <= collision.position.x + collision.width
            && player.position.y + player.height + player.velocity.y >= collision.position.y){
                player.velocity.x = 0
                winCondition = false
            }

        if(collision.position.x + collision.width <= 0){
            collisions.shift()
            if(winCondition && player.position.x >= 400){
                let platformX = windowWidth
                let platformY = windowheight - 100
                collisions.push(new Collision({
                    x: platformX,
                    y: platformY,
                    width: 50,
                    height: 50,
                }))
            }
        }
    })

    forest.forEach((three) => {
      if(three.position.x + three.width <= - 100){
        three.position.x = windowWidth
      }
    })

    sky.forEach((cloud) => {
      if(cloud.position.x + cloud.width <= - 100){
        cloud.position.x = windowWidth
      }
    })

    if(scrollOffset > 2000){
        console.log('you win')
    }

    if(winCondition){
        scoreElement.innerHTML = `<span>Your score: ${scrollOffset}</span>`
        scoreTotal.classList.add('hide')
    }else{
      scoreTotal.classList.remove('hide')
    }
}



animate()

addEventListener('keydown', ({key}) => {

    switch(key){
        case 'ArrowUp':
            if(player.velocity.y === 0 && winCondition){
                player.velocity.y -= 10
            }
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

tryAgain.addEventListener('click', () => {
  location.reload();
})

