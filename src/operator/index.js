import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';

console.log(map);

const source$ = Observable.of(1, 2, 3);
const result$ = source$.pipe(map(value => value * 2));

result$.subscribe(console.log);
