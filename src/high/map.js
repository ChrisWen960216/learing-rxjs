import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/concatMap';

const dragBox = document.getElementsByClassName('drag-box')[0];

const mouseDown$ = Observable.fromEvent(dragBox, 'mousedown');
const mouseUp$ = Observable.fromEvent(dragBox, 'mouseup');
const mouseMove$ = Observable.fromEvent(dragBox, 'mousemove');
const mouseOut$ = Observable.fromEvent(dragBox, 'mouseout');

const drag$ = mouseDown$.concatMap((startEvent) => {
  const initialLeft = dragBox.offsetLeft;
  const initialTop = dragBox.offsetTop;
  const stop$ = Observable.merge(mouseUp$, mouseOut$);

  return mouseMove$.takeUntil(stop$).map(moveEvent => ({
    x: moveEvent.x - startEvent.x + initialLeft,
    y: moveEvent.y - startEvent.y + initialTop,
  }));
});

drag$.subscribe((event) => {
  dragBox.style.left = `${event.x}px`;
  dragBox.style.top = `${event.y}px`;
});

