/** Created By ChrisWen
 *  2018/06/02
 *  Cache
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/windowTime';

const source$ = Observable.timer(0, 100);
const result$ = source$.windowTime(400);
result$.subscribe(
  console.log,
  null,
  () => console.log('Completed'),
);
