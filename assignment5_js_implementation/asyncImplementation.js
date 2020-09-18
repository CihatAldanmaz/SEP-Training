/*************Implementing Catch***************/
class MyPromise {
    constructor(executorFn) {
      this.promiseState = 'pending';
      this.resolve = function (data) {
        setTimeout(() => {
          this.promiseState = 'fulfilled';
          this.currentData = data;
          console.log('resolve');
          while (this.thenCallbackQueue.length > 0) {
            const curThenCallbackFn = this.thenCallbackQueue.shift();
            if (this.currentData instanceof MyPromise) {
              console.log('this is a promise');
              this.currentData.then((thenData) => {
                console.log('test');
                this.currentData = curThenCallbackFn(thenData);
              });
            } else {
              console.log('test');
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
	catch(catchCallbackFn) {
		this.catchCallbackQueue.push(catchCallbackFn);
		return this;
	  }
	
}

class NewPromise{
	static PENDING = 'pending';
	static FUlFILLED = 'fulfilled';
	static REJECT = 'rejected';
	constructor(executor){
		this.status = NewPromise.PENDING;
		this.value = null;
		this.callbacks = [];

		try {
			executor(this.resolve.bind(this), this.reject.bind(this));
		} catch (error) {
			this.reject(error);
		}

		
	}
	resolve(value){
		if (this.status == NewPromise.PENDING) {
			this.status = NewPromise.FUlFILLED;
			this.value = value;
			setTimeout(()=>{
				this.callbacks.map(callback => {
					callback.onFulfilled(value);
				})
			})
		}

	}
	reject(reason){
		if (this.status == NewPromise.PENDING) {
			this.status = NewPromise.REJECT;
			this.value = reason;
			setTimeout(()=>{
				this.callbacks.map(callback => {
					callback.onRejected(reason);
				})
			})
		}
	}
	then(onFulfilled, onRejected) {
		if (typeof onFulfilled != "function") {
			onFulfilled = () => {};
		}
		if (typeof onRejected != "function") {
			onRejected = () => {};
		}
		if (this.status == NewPromise.PENDING) {
			this.callbacks.push({
				onFulfilled: value => {
					try {
						onFulfilled(value);
					} catch (error) {
						onRejected(error);
					}
				}, 
				onRejected: value => {
					try {
						onRejected(value);
					} catch (error) {
						onRejected(error);
					}
				}
			});
		}
		if (this.status == NewPromise.FUlFILLED) {
			setTimeout(() => {
				try {
					onFulfilled(this.value);
				} catch (error) {
					onRejected(error);
				}
			})
		}
		if (this.status == NewPromise.REJECT){
			setTimeout(()=>{
				try {
					onRejected(this.value);
				} catch (error) {
					onRejected(error);
				}
			})
		}
	}
}
/**************Implementing myFetch *************/
function myFetch(url, options = {method: "GET"}) {
	return new Promise((res, rej) => {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			const response = {
			json: function () {
				return JSON.parse(xhttp.responseText);
			},
			};
			res(response);
		}
		};
		xhttp.open('GET', url, true);
		if (options.method === "POST") {
			xhttp.setRequestHeader('Content-type', options.headers["Content-type"]);
		}
		xhttp.send();
});
}

  myFetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => {
      console.log('=== fetch Get ====');
      console.log(json);
    });
  myFetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log('=== fetch Post ====');
      console.log(json);
    });

/*********Implementing promise**************/
function promiseAll(...args) {
	return new Promise((resolve, reject) =>{
		let results = [];
		let count = 0;

		args.forEach((value, index) => {
			Promise.resolve(value)
			.then(result => {
				results[index] = result;
				count ++;

				if (count == args.length) {
					resolve(results);
				}
			})
			.catch((err) => reject(err));
		})
	})
}

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 1000);
}); 

promiseAll(p1, p2, p3)
.then(values => { 
  console.log(values); 
});