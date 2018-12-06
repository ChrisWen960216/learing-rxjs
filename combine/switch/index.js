import { interval } from 'rxjs';
import { map, take, switchAll } from 'rxjs/operators';

interval(1000)
  .pipe(
    take(3),
    map(x => interval(700)
      .pipe(
        map(y => `${x} : ${y}`),
        take(2),
      )),
    switchAll(),
  )
  .subscribe(console.log);
