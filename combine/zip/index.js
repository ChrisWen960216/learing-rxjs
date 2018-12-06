import { timer } from 'rxjs';
import {
  take, map, combineLatest, withLatestFrom,
} from 'rxjs/operators';

const sourceA$ = timer(0, 1500).pipe(map(number => number * 100), take(3));
const sourceB$ = timer(0, 500).pipe(take(5));

const project = (a, b) => `Received ${a} and ${b}`;

const combineSource$ = sourceA$.pipe(combineLatest(sourceB$, project));
const withLatestFrom$ = sourceA$.pipe(withLatestFrom(sourceB$));

combineSource$.subscribe(console.log);
withLatestFrom$.subscribe(console.log);
