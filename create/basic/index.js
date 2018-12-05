/**
 *  Created By ChristianWen
 *  2018/11/07
 *  创建Observable
 */

import {
  Observable, interval, empty, fromEvent,
} from 'rxjs';
import { map, concatAll, take } from 'rxjs/operators';
// import 'rxjs/add/operator/take';

const hello$ = Observable.create((observer) => {
  observer.next('Hello');
  observer.next('World');
});

const timeInterval$ = interval(10000);
const empty$ = empty();

hello$.subscribe(console.log);
timeInterval$.subscribe(number => console.log(number * 2));
empty$.subscribe({ complete: () => console.log('Completed') });

/**
 * Create a button click observable
 */
const $clikBtn = document.getElementById('click-btn');
const $numContainer = document.getElementById('number-container');
const clickBtn$ = fromEvent($clikBtn, 'click');

clickBtn$.pipe(
  map(() => interval(1000).pipe(take(100))),
  concatAll(),
).subscribe({
  next: (value) => { $numContainer.innerHTML = value; },
});
