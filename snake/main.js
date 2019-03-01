import { fromEvent } from 'rxjs';
import {
  tap, map, filter, scan, distinctUntilChanged,
} from 'rxjs/operators';
import { createCanvasElement } from './canvas';

const canvas = createCanvasElement();
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

const DIRECTIONS = {
  37: { x: -1, y: 0 }, // ←
  39: { x: 1, y: 0 }, // →
  38: { x: 0, y: -1 }, // ↑
  40: { x: 0, y: 1 }, // ↓
};

function nextDirection(prev, next) {
  const opposite = next.x === prev.x * (-1) || next.y === prev.y * (-1);
  if (opposite) { return prev; }

  return next;
}

const keydown$ = fromEvent(document, 'keydown');

// 映射按键事件，并且过滤掉除了上下左右之外其他的按键
keydown$.pipe(
  map(e => DIRECTIONS[e.keyCode]),
  filter(direction => !!direction),
  scan(nextDirection),
  distinctUntilChanged(),
  tap(console.log),
).subscribe();
