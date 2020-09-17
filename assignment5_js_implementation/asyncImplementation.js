//Promise
class MyPromise{
	constructor(executorFn) {
		this.promiseState = "pending";
		this.resolve = function(data){
			setTimeout(()=>{
				this.promiseState = "fulfilled";
				this.currentData = data;
				while (this.thenCallbackQueue.length > 0) {
					const curThenCallbackFn = this.thenCallbackQueue.shift();
					if (this.currentData instanceof Promise) {
						this.currentData.then((thenData) =>{
							this.currentData = curThenCallbackFn(this.currentData);
						})
					} else {
						this.currentData = curThenCallbackFn(this.currentData);
					}
				}
			}, 0);
		}
		this.reject = function(){

		}
		this.thenCallbackQueue = [];
		executorFn(this.resolve.bind(this), this.reject.bind(this));
	}
	
	.then(thenCallbackFn){
		this.thenCallbackQueue.push(thenCallbackFn);
	}
}

//promise: different API fetch calls, don't care of the orders of return, but want to have them ready all promises;
//Implement promise.all
//Implement myFetch with post method
//reject: how to use reject and implement reject, catch;
plugin: gitLens
function myFetch(url) {
	return new Promise((res, rej) =>{
		//XHR API call
		//need to define .json methods for response
	})
}