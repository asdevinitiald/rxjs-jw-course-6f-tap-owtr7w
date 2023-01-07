import { of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

of(1, 7, 3, 6, 2)
  .pipe(
    filter((value) => value > 5),
    tap((value) => console.log(value)),
    map((value) => value * 2)
    // tap((value) => console.log(value)),
  )
  .subscribe((value) => console.log('Output : ', value));
