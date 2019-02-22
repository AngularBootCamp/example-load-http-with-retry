// This observable transformation can be used to simulate a faulty
// network or backend service. It adds random delays and random
// failure probability.

import { Observable, defer, throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export interface FaultyOptions {
  errorProbability?: number;
  maxDelayMs?: number;
}

const defaultOptions = {
  errorProbability: 0.3,
  maxDelayMs: 1000
};

export function faulty<T>(opts?: FaultyOptions): (source: Observable<T>) => Observable<T> {
  const options = Object.assign({}, defaultOptions, opts);
  return (source) => defer<T>(() => {
    return timer(Math.random() * options.maxDelayMs)
      .pipe(mergeMap(_value =>
        (Math.random() < options.errorProbability) ?
          throwError(new Error('Failed in faulty')) :
          source));
  });
}
