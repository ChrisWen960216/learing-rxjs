/** Created By ChrisWen
 *  2018/05/20
 *  range --- 指定范围
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/map';

// const source$ = Observable.range(1, 100);
const source2$ = Observable.range(1, 10).map(value => value * 20);
source2$.subscribe(
  console.log,
  null,
  () => console.log('Range is Done!'),
);

