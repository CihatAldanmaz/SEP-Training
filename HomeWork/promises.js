class MyPromise(executorFn){
  constructor(executorFn){
    this.promiseState = 'pending';
    this.resolve = function(data){
      this.promiseState = 'fullfilled'
      const curThenCallbackFn = this.thenCallbackQueue.shift();
      curThenCallbackFn(data);
      
    };
    this.reject = function(){};
    this.thenCallbackQueue = [];

    executorFn(this.resolve.bind(this), this.reject.bind(this))

  }
  then(thenCallbackFn){
    this.thenCallbackQueue.push(thenCallbackFn)
  }

}

const p = new MyPromise((resolve, reject) => {
  setTimeout(()=>{
    resolve('hello')
  }, 1000)
  .then(data => console.log('data1', data));
});

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

function myFetch(url){
  return new Promise((res, rej) => {
    
  });
}


myFetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));