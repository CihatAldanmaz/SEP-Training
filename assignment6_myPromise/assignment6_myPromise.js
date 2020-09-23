class myPromise {
  constructor(executorFn) {
    this.promiseState = 'pending';
    this.resolve = function(data) {
      setTimeout(() => {
        this.promiseState = 'fulfilled';
        this.currentData = data;
        while (this.thenCallbackQueue.length > 0) {
          const curThenCallbackFn = this.thenCallbackQueue.shift();
          if (this.currentData instanceof myPromise) {
            this.currentData.then((thenData) => {
              this.currentData = curThenCallbackFn(thenData);
            });
          } else {
            this.currentData = curThenCallbackFn(this.currentData);
          }
        }
      }, 0);
    };
    this.reject = function(error) {
      setTimeout(() => {
        this.promiseState = 'failed';
        this.currentError = error;
        while (this.catchCallbackQueue.length > 0) {
          const curCatchCallbackFn = this.catchCallbackQueue.shift();
          this.currentError = curCatchCallbackFn(this.currentError);
        }
      })
    };
    this.thenCallbackQueue = [];
    this.catchCallbackQueue = [];
    executorFn(this.resolve.bind(this), this.reject.bind(this));
  }
  then(thenCallbackFn, catchCallbackFn) {
    this.thenCallbackQueue.push(thenCallbackFn);
    if (catchCallbackFn) {
      this.catchCallbackQueue.push(catchCallbackFn);
    }
    return this;
  }
  catch(catchCallbackFn) {
    this.catchCallbackQueue.push(catchCallbackFn);
    return this;
  }

  static all(promiseArr) {
    let promiseCompletedNum = 0;
    const promiseCompletedNumMax = promiseArr.length;
    const resovleData = new Array(promiseCompletedNumMax);
    return new myPromise((res, rej) => {
      promiseArr.forEach((promise, index) => {
        promise.then((data) => {
          promiseCompletedNum++;
          resolveData[index] = data;
          if (promiseCompletedNum === promiseCompletedNumMax) {
            res(resovleData);
          }
        });
      });
    });
  }
}