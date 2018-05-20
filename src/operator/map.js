import { Observable } from 'rxjs/Observable';


const _map = fn => obs$ => new Observable((observable) => {
  obs$.subscribe({
    next: value => observable.next(fn(value)),
    error: error => observable.error(error),
    complete: () => observable.complete(),
  });
});

export default _map;
