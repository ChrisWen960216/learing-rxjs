import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';

const source1$ = Observable.of([1, 2, 3]);
const source2$ = Observable.of(['A', 'B', 'C']);
const zip$ = Observable.zip(source1$, source2$);
zip$.subscribe(
  console.log,
  null,
  () => console.log('Completed'),
);

