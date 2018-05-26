/** Created By ChrisWen
 *  2018/05/26
 *  Concat
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';

const source1$ = Observable.of([1, 2, 3, 4, 5]);
const source2$ = Observable.of([9, 10, 11, 12]);
const concated$ = Observable.concat(source1$, source2$);


concated$.subscribe(
  console.log,
  null,
  () => console.log('Completed'),
);

