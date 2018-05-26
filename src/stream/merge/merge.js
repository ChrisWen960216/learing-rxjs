import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';

const source1$ = Observable.timer(0, 1000).map(x => `${x}A`);
const source2$ = Observable.timer(500, 1000).map(y => `${y}B`);
const merge$ = Observable.merge(source1$, source2$);

merge$.subscribe(
  console.log,
  null,
  () => console.log('Merge Completed'),
);

