/**
 *  Created By ChristianWen
 *  2018/11/07
 *  创建Observable
 */

import { Observable, interval, empty } from 'rxjs';

const hello$ = Observable.create((observer) => {
  observer.next('Hello');
  observer.next('World');
});

const timeInterval$ = interval(10000);
const empty$ = empty();

hello$.subscribe(console.log);
timeInterval$.subscribe(number => console.log(number * 2));
empty$.subscribe({ complete: () => console.log('Completed') });
