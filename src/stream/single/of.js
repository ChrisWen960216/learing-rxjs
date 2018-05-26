/** Created By ChrisWen
 *  2018/05/20
 *  of --- 列举数据
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const source$ = Observable.of(1996, 2, 16);

source$.subscribe(
  console.log,
  null,
  () => console.log('Done'),
);

