import { timer } from 'rxjs';
import { take, combineLatest } from 'rxjs/operators';

const sourceA$ = timer(0, 500).pipe(take(3));
const sourceB$ = timer(500, 500).pipe(take(5));

const project = (a, b) => `Received ${a} and ${b}`;

const combineSource$ = sourceA$.pipe(combineLatest(sourceB$, project));

combineSource$.subscribe(console.log);
