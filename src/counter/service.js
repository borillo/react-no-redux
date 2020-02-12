const LATENCY = 1500;

class CounterService {
  static costlyIncrement() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, LATENCY);
    });
  }
}

export {CounterService}