const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = null;
    this.callbacks = [];
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onFulfilled(value);
        });
      });
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.value = reason;
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onRejected(reason);
        });
      });
    }
  }

  then(onFulfilled = () => {}, onRejected = () => {}) {
    return new MyPromise((resolve, reject) => {
      if (this.status === PENDING) {
        this.callbacks.push({
          onFulfilled,
          onRejected,
        });
      }
      if (this.status === FULFILLED) {
        setTimeout(() => {
          let result = onFulfilled(this.value);
          resolve(result);
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          let result = onRejected(this.value);
          resolve(result);
        });
      }
    });
  }

  catch(onRejected = () => {}) {
    return this.then(undefined, onRejected);
  }

  static all(promises) {
    let results = [];
    let completedPromises = 0;
    return new Promise((resolve, reject) => {
      if (promises.length == 0) {
        resolve(results);
      } else {
        promises.forEach((promise, idx) => {
          promise
            .then((result) => {
              results[idx] = result;
              completedPromises += 1;
              if (completedPromises === promises.length) {
                resolve(results);
              }
            })
            .catch((error) => {
              reject(error);
            });
        });
      }
    });
  }
}

// const asyncOperation = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time);
//     }, time);
//   });
// };

// promises = [asyncOperation(1000), asyncOperation(2000), asyncOperation(3000)];

// MyPromise.all(promises).then((results) => {
//   console.log(results);
// });

new MyPromise((resolve, reject) => {
  resolve('solved');
})
  .then((value) => {
    console.log(value);
    return 'success';
  })
  .then((value) => {
    console.log(value);
  });

console.log('start');
