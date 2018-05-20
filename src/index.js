// import { Observable } from 'rxjs';
import './operator/index';
import './stream/index';
import './stream/async';
// observable just has one status --- complete or error
// const onSubscribe = (observer) => {
//   observer.next(1);
//   observer.next(2);
//   observer.error('Something is wrong');
//   observer.next(3);
//   observer.complete();
// };

// const source$ = new Observable(onSubscribe);
// const theObserver = {
//   next: item => console.log(item),
//   error: error => console.error(error),
//   complete: () => console.log('completed'),
// };

// source$.subscribe(theObserver);
