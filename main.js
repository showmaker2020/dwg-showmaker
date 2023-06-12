const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})
const CANVAS_WIDTH =  canvas.width = 600;
const CANVAS_HEIGHT =  canvas.height = 600;

const playerImage = new Image();
playerImage.src = './imgaes/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let playerState = 'fall';
let frameX = 0;
let frameY = 1;
let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name : 'idle',
        frames : 7,
    },
    {
        name : 'jump',
        frames: 7,
    },
    {
        name : 'fall',
        frames: 9,
    },
    {
        name : 'run',
        frames: 9,
    },
    {
        name : 'dizzy',
        frames: 11,
    },
    {
        name : 'roll',
        frames: 7,
    },
    {
        name : 'bite',
        frames: 7,
    },
    {
        name : 'ko',
        frames: 12,
    },
    {
        name : 'getHit',
        frames: 4,
    }
];

animationStates.forEach((state, index)=>{
    let frames = {
        loc : [],
    }
    for(let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y : positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.drawimage(img, sx , sy , sh , sw, dx, dy , dw , dh)
    let position = Math.floor(gameFrame/staggerFrame)%spriteAnimations[playerState].loc.length;
    frameX = position*spriteWidth;
    frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); 
    gameFrame++;
    requestAnimationFrame(animate);
    
}; 
animate();

