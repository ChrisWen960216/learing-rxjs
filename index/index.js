import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 *  Created By ChristianWen
 *  2018/10/29
 *  如何产生事件，这是发布者的责任，是Observable的工作
 *  如何响应式事件，这是订阅者的责任，是subscribe来决定
 */

const onSubscribe = (observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
};

const source$ = new Observable(onSubscribe);
const theObserver = {
  next: item => console.log(item),
};

source$.subscribe(theObserver);
