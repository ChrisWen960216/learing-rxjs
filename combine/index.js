import { of, timer } from 'rxjs';
import {
  concat, tap, map, merge, take,
} from 'rxjs/operators';

const rootEle = document.getElementById('root');

function insertEle(ele) {
  rootEle.appendChild(document.createTextNode(ele));
}

const arrayOne$ = of([1, 2, 3, 4, 5]);
const arrayTwo$ = of([6, 7, 8, 9, 10]);

const timerOne$ = timer(0, 1200).pipe(map(value => ` A${value * 2} `), take(5));
const timerTwo$ = timer(0, 500).pipe(map(value => ` B${value} `), take(5));

arrayOne$.pipe(concat(arrayTwo$), tap(value => insertEle(value))).subscribe();

timerOne$.pipe(merge(timerTwo$), tap(value => insertEle(value))).subscribe();
