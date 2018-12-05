import { from, fromEventPattern } from 'rxjs';
import { map } from 'rxjs/operators';
import EventEmitter from 'events';

const promise$ = from(Promise.resolve(1)).pipe(map(number => number * 2));

const eventEmitter = new EventEmitter();

const addHandler = handler => eventEmitter.addListener('msg', handler);
const delHandler = handler => eventEmitter.removeListener('msg', handler);

const event$ = fromEventPattern(addHandler, delHandler);

const eventSubscribe$ = event$.subscribe({
  next: console.log,
  error: error => console.error(error),
  complete: console.info('Completed'),
});

eventEmitter.emit('msg', 'Hello');
eventEmitter.emit('msg', 'World');

eventSubscribe$.unsubscribe();

promise$.subscribe(console.log);
