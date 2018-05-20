/** Created By ChrisWen
 *  2018/05/20
 *  Async Stream
 */

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

// 等同于 setInterval 这个动作没有结束的说法，所以 complete 永远不会被触发
// 可以手动 unsubscribe

// const asyncSource$ = Observable.interval(1000);

/** timer 等同于 setTimeout,调用之后立刻完结.
* timer 拥有第二个参数，产生一个持续吐出数据的Observable对象.
* timer(2000,1000) 2S后产生一个每间隔1S吐出数据的Observable对象，该对象永远不会被complete(除非手动unsubscribe)
* interval 就是简写的 timer
*/
const asyncSoureceEnd$ = Observable.timer(2000);

const result$ = asyncSoureceEnd$.map(value => value + 1);
result$.subscribe(
  console.log,
  null,
  () => console.log('Timer is Done!'),
);

