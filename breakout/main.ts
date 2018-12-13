const stage = document.getElementById('root') as HTMLCanvasElement;
const context = stage.getContext('2d') as CanvasRenderingContext2D;
context.fillStyle = 'green';

const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
const BALL_RADIUS = 10;
const BRICK_ROWS = 5;
const BRICK_COLUMNS = 7;
const BRICK_HEIGHT = 20;
const BRICK_GAP = 3;

interface IBrick {
  x: number;
  y: number;
  height: number;
  width: number;
}

function drawIntro() {
  context.clearRect(0, 0, stage.clientWidth, stage.height);
  context.textAlign = 'center';
  context.font = '24px Monaco';
  context.fillText('Press [ < ] and [ > ]', stage.width / 2, stage.height / 2);
}

function drawGameOver(text: string) {
  context.clearRect(stage.width / 4, stage.height / 3, stage.width / 2, stage.height / 3);
  context.textAlign = 'center';
  context.font = '24px Monaco';
  context.fillText(text, stage.width / 2, stage.height / 2);
}

function drawScore(score: string) {
  context.textAlign = 'left';
  context.font = '16px Courier New';
  context.fillText(score, BRICK_GAP, 16);

}

function drawPaddle(position: number) {
  context.beginPath();
  context.rect(
    position - PADDLE_WIDTH / 2,
    context.canvas.height - PADDLE_HEIGHT,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
  );
}

function drawBrick(brick: IBrick) {
  context.beginPath();
  context.rect(
    brick.x - brick.width / 2,
    brick.y - brick.height / 2,
    brick.width,
    brick.height,
  );
  context.fill();
  context.closePath();
}

function drawBricks(bricks: IBrick[]) {
  bricks.forEach(brick => drawBrick(brick));
}
