import { CreateIntervalValue } from './interfaces';

export function createInterval (fn: Function, ms: number): CreateIntervalValue {
  let interval;
  const run = () => {
    interval = setInterval(fn, ms);
  };

  return {
    start () {
      run();
    },
    reset () {
      clearInterval(interval);
      run();
    }
  };
}
