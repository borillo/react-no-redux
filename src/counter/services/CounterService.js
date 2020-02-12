const DELAY = 1500;

const CounterService = {
  costlyIncrement() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, DELAY);
    });
  }
};

export { CounterService };
