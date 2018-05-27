/** Created By ChrisWen
 *  2018/05/27
 *  switch
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/exhaust';
import 'rxjs/add/observable/interval';

const ho$ = Observable.interval(1000).take(2).map(x => Observable.interval(1500).map(y => `${x}:${y}`).take(2));
const result$ = ho$.switch();
const result2$ = ho$.exhaust();

result$.subscribe(
  console.log,
  null,
  () => console.log('Completed'),
);

result2$.subscribe(
  console.log,
  null,
  () => console.log('Completed'),
);

