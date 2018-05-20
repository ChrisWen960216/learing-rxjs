/** Created By ChrisWen
 *  2018/05/20
 *  From / FromEvent / FromPromise
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';

const testArray = [1, 2, 3, 4, 5];
const testArray$ = Observable.from(testArray);

const testPromise = Promise.resolve([10, 9, 8, 7]);
const testPromise$ = Observable.fromPromise(testPromise);

const btn = document.getElementById('click');
const btn$ = Observable.fromEvent(btn, 'click');

const commonSub$ = {
  next: value => console.log(value),
  error: null,
  complete: () => console.log('Completed!'),
};

testArray$.subscribe(commonSub$);
btn$.subscribe(commonSub$);
testPromise$.subscribe(commonSub$);
