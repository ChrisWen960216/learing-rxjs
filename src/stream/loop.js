/** Created By ChrisWen
 *  2018/0520
 *  generate --- 循环创建数据
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/generate';
import 'rxjs/add/operator/repeat';

const source$ = Observable.generate(
  2,
  value => value < 10,
  value => value + 1,
  value => value,
).repeat(2);

source$.subscribe(
  console.log,
  null,
  () => console.log('Generate is Done'),
);

