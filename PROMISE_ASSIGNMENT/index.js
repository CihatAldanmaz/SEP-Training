function randomTimer() {
    return Math.random() * 5000;
}

class MyPromise {
    constructor(executorFn) {
      this.promiseState = 'pending';
      this.resolve = function (data) {
        setTimeout(() => {
          this.promiseState = 'fulfilled';
          this.currentData = data;
          while (this.thenCallbackQueue.length > 0) {
            const curThenCallbackFn = this.thenCallbackQueue.shift();
            if (this.currentData instanceof MyPromise) {
              this.currentData.then((thenData) => {
                this.currentData = curThenCallbackFn(thenData);
              });
            } else {
              this.currentData = curThenCallbackFn(this.currentData);
            }
          }
        }, 0);
      };
      this.reject = function () {};
      this.thenCallbackQueue = [];
      executorFn(this.resolve.bind(this), this.reject.bind(this));
    }
  
    then(thenCallbackFn) {
      this.thenCallbackQueue.push(thenCallbackFn);
      return this;
    }
    
}

  const p = new MyPromise((resolve, reject) => {
    let timer = randomTimer();
    console.log('delayTimer:', timer);
    setTimeout(() => {
      resolve('hello');
    }, timer);
  })
    .then((data1) => {
      console.log('data1', data1);
      return new MyPromise((resolve, reject) => {
        setTimeout(() => {
          resolve('Hey Patrick');
        }, 1000);
      });
    })
    .then((data2) => {
      console.log('data2', data2);
    });