import { timer, interval } from 'rxjs';
import {
  take, map, concatAll, mergeAll, zipAll,
} from 'rxjs/operators';

function genObservable(timing) {
  return interval((100000 / timing)).pipe(map(value => `${timing} && ${value}`), take(2));
}

const source$ = timer(0, 500).pipe(take(5), map(value => genObservable(value * 1000)), concatAll());

const mergeSource$ = timer(0, 1000).pipe(take(3), map(value => genObservable(value * 500)), mergeAll());

timer(0, 1000)
  .pipe(
    take(2),
    map(x => interval(1500)
      .pipe(
        map(y => `${x} : ${y}`),
        take(2),
      )),
    zipAll(),
  )
  .subscribe(value => console.log(`zipAll: ${value}`));

source$.subscribe(value => console.log(`ConcatAll: ${value}`));
mergeSource$.subscribe(value => console.log(`MergeAll: ${value}`));
