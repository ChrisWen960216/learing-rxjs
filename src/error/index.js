/**
 *  Created By ChrisWen
 *  2018/06/11
 *  Error handle for rxjs
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const throwUnluckyNumber = (value) => {
  if (value === 4) {
    throw new Error('UnluckyNumber 4');
  }
  return value;
};
const source$ = Observable.range(1, 5);
const error$ = source$.map(throwUnluckyNumber);
const catch$ = error$.catch((err, caught$) => Observable.of(8));
