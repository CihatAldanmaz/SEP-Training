// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const fetch = require("node-fetch");

// class MyPromise{
//   constructor(promiseFn){
//     this.status = 'pending';
    
    // this.resolve = (data) => {
    //   setTimeout(() => {
    //     this.status = 'fullfilled';
    //     const currentData = data;
    //     while(this.thenCallbackQueue.length > 0){
    //       const curThenCallbackFn = this.thenCallbackQueue.shift();

    //       if(this.currentData instanceof MyPromise){
    //         console.log('this is a promise');
    //         this.currentData.then(thenData => {
    //           this.currentData = curThenCallbackFn(thenData);
    //         }); 
    //       } else{
    //         this.currentData = curThenCallbackFn(this.currentData);
    //       };
    //     };
    //   }, 0);
    // };

//     this.reject = (error) => {
//       setTimeout(() => {
//         this.status = 'failed';
//         this.currentError = error;
//         while(this.cathCallbackQueue.length > 0){
//           const curCatchCallbackFn = this.cathCallbackQueue.shift();
//           this.currentError = curCatchCallbackFn(this.currentError);
//         }
//       }, 0);
//     };
    
//     this.thenCallbackQueue = [];
//     this.cathCallbackQueue = [];
//     promiseFn(this.resolve.bind(this), this.reject.bind(this));
//   }

//   then(thenCallbackFn,catchCallbackFn){
//     this.thenCallbackQueue.push(thenCallbackFn);
//     if (catchCallbackFn){
//       this.cathCallbackQueue.push(catchCallbackFn);
//     };
//     return this;
//   };

//   catch(catchCallbackFn){
//     this.cathCallbackQueue.push(catchCallbackFn);
//     return this;
//   };

//   static all(promiseArr){
//     let promiseCompleted = 0;
//     let maxPromiseCall = promiseArr.length;
//     const resolveData = new Array(promiseArr.length);
//     return new MyPromise( (resolve, reject) => {
//       promiseArr.forEach((promise, index) => {
//         promise.then(data => {
//           promiseCompleted++;
//           resolveData[index] = data;
//           if(promiseCompleted === maxPromiseCall){
//             resolve(resolveData);
//           }
//         });
//       });
//     });
//   };

// };


// function getUP(userId) {
//   return new MyPromise((resolve, reject) => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         data = JSON.parse(xhttp.responseText);
//         resolve(data);
//       }
//     };
//     xhttp.open(
//       'GET',
//       'https://jsonplaceholder.typicode.com/todos/' + userId,
//       true
//     );
//     xhttp.send();
//   });
// }

// getUP(1)
// .then(data => console.log(data));

// const promise1 = fetch(
//   'https://jsonplaceholder.typicode.com/todos/1'
// ).then((res) => res.json());

// const promise2 = fetch(
//   'https://jsonplaceholder.typicode.com/todos/2'
// ).then((res) => res.json());

// const promise3 = fetch(
//   'https://jsonplaceholder.typicode.com/todos/3'
// ).then((res) => res.json());

// MyPromise.all([promise1, promise2, promise3])
// .then(values => values);


class MyPromise{
  constructor(firstCall){
    this.status = 'pending'
    
    this.resolve = (data) => {
      setTimeout(() => {
        this.status = 'fullfilled';
        const currentData = data;

        while(this.thenCallbackQueue.length > 0){
          const curThenCallbackFn = this.thenCallbackQueue.shift();
          
          if(this.currentData instanceof MyPromise){
            this.currentData.then(thenData =>
            {console.log('thenData => ', thenData);
            console.log('curThenCallbackFn => ', curThenCallbackFn);
            this.currentData = curThenCallbackFn(thenData)}
            );
          } else { 
            // console.log('this is from else', currentData);
              this.currentData = curThenCallbackFn(currentData);
          }
        };
      },0)
    };
    this.reject = error => {
      setTimeout(() => {
        this.status = 'failed';
        while(this.catchCallbackQueue.length > 0){
          const currCatchFn = this.catchCallbackQueue.shift();
          currCatchFn(error);
        }
      },0);
    };

    this.thenCallbackQueue = [];
    this.catchCallbackQueue = [];
    firstCall(this.resolve.bind(this), this.reject.bind(this));
  };

  then(thenCallbackFn, catchCallbackFn){
    this.thenCallbackQueue.push(thenCallbackFn);
    if (catchCallbackFn){
      this.catchCallbackQueue.push(catchCallbackFn);
    };
    return this;
  };

  catch(catchCallbackFn){
    this.catchCallbackQueue.push(catchCallbackFn);
    return this;
  };
};


const promiseFunction = userId => {
  return new MyPromise((resolve, reject) => {
    const obj = { 
     key: 'one',
     value: 'two',
     userId: userId
    };
    resolve(obj);
  })
};

promiseFunction(3)
.then(data => {console.log(data); return promiseFunction(2)})
.then(data => {console.log(data); return promiseFunction(1)})
.then(data2 => console.log(data2))
