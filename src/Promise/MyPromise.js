class MyPromise {
  constructor(executor) {
    executor();
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

const asyncOperation = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

promises = [asyncOperation(1000), asyncOperation(2000), asyncOperation(3000)];

MyPromise.all(promises).then((results) => {
  console.log(results);
});
