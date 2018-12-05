import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const promise$ = from(Promise.resolve(1)).pipe(map(number => number * 2));

promise$.subscribe(console.log);
