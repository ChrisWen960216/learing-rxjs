import { Observable } from 'rxjs';
import { repeat } from 'rxjs/operators';

const source$ = Observable.create((observe) => {
  console.log('On Subscribe');
  setTimeout(() => observe.next(1), 1000);
  setTimeout(() => observe.next(2), 2000);
  setTimeout(() => observe.next(3), 300);
  // setTimeout(() => observe.complete(), 4000);

  return {
    unsubscribe: () => console.log('On UnSubscribe'),
  };
});

const repeated$ = source$.pipe(repeat(2));

repeated$.subscribe(console.log);
