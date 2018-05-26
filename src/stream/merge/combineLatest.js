import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';

const source1$ = Observable.timer(500, 1000);
const source2$ = Observable.timer(1000, 1000);
const combineL$ = Observable.combineLatest(source1$, source2$);
combineL$.subscribe(
  console.log,
  null,
  () => console.log('CombineLatest Completed!'),
);

