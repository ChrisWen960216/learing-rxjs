/** Created By ChrisWen
 *  2018/05/20
 *  empty never throw --- 极简操作符
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/never';

// 产生一个直接完结的Observable对象
const empty$ = Observable.empty();
// 直接抛出一个错误
const throw$ = Observable.throw();
// 什么也不做，就这么静静的直到永远~
const never$ = Observable.never();
