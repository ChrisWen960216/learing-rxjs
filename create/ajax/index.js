import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tap } from 'rxjs/operators';

const rootElem = document.getElementById('root');
const btnElem = document.getElementsByClassName('ajax-btn')[0];


const personInfo$ = ajax('https://api.github.com/users/ChrisWen960216', { responseType: 'json' })
  .pipe(
    tap((value) => { rootElem.innerHTML = `<h1>${value.response.login}</h1>`; }),
  )
  .subscribe();

fromEvent(btnElem, 'click')
  .subscribe(
    () => personInfo$,
  );
