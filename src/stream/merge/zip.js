import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/interval';

const source1$ = Observable.of(1, 2, 3);
const source2$ = Observable.of('A', 'B', 'C');
const source3$ = Observable.interval(1000);
const zip$ = Observable.zip(source1$, source2$, source3$);
zip$.subscribe(
  console.log,
  null,
  () => console.log('Completed'),
);

