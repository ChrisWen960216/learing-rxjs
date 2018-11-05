// import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import { map, filter } from 'rxjs/operators';

import colors from 'colors';

const source$ = of(1, 2, 3);
const double$ = obs$ => obs$.map(item => item * 2);
const result$ = source$.let(double$);
const resultPipe$ = source$.pipe(
  filter(number => number % 2 === 0),
  map(number => number * 2),
);

result$.subscribe(console.log);
resultPipe$.subscribe(
  number => console.log(colors.green(number)),
);
