import { fromEvent, interval } from 'rxjs';
import { defaultIfEmpty, takeUntil } from 'rxjs/operators';

const debounceBtnEle = document.getElementsByClassName('debounce-btn')[0];
const debounceBtn$ = fromEvent(debounceBtnEle, 'click').pipe(takeUntil(interval(5000)), defaultIfEmpty('No data!'));
debounceBtn$.subscribe(console.log);
