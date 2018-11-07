import './index.scss';

import { fromEvent } from 'rxjs';
import { takeUntil, map, concatAll } from 'rxjs/operators';

const $box = document.getElementsByClassName('root')[0];
const { body: $body } = document;

const onMouseDown$ = fromEvent($box, 'mousedown');
const onMouseUp$ = fromEvent($body, 'mouseup');
const onMouseMove$ = fromEvent($body, 'mousemove');

// const interval$ = interval(1000).pipe(takeUntil(onMouseUp$)).subscribe(console.log);

onMouseDown$.pipe(
  map(() => onMouseMove$.pipe(takeUntil(onMouseUp$))),
  concatAll(),
  map(m => ({
    x: m.clientX,
    y: m.clientY,
  })),
)
  .subscribe((position) => {
    $box.style.left = `${position.x}px`;
    $box.style.top = `${position.y}px`;
  });
