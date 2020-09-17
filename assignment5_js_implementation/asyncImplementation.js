/*************Implementing Catch***************/
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

/**************Implementing myFetch *************/
// function myFetch(url, options = {method: "GET"}) {
// 	return new Promise((res, rej) => {
// 		let xhttp = new XMLHttpRequest();
// 		xhttp.onreadystatechange = function () {
// 		if (this.readyState == 4 && this.status == 200) {
// 			// Typical action to be performed when the document is ready:
// 			const response = {
// 			json: function () {
// 				return JSON.parse(xhttp.responseText);
// 			},
// 			};
// 			res(response);
// 		}
// 		};
// 		xhttp.open('GET', url, true);
// 		if (options.method === "POST") {
// 			xhttp.setRequestHeader('Content-type', options.headers["Content-type"]);
// 		}
// 		xhttp.send();
// });
// }

//   myFetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => {
//       console.log('=== fetch Get ====');
//       console.log(json);
//     });
//   myFetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       console.log('=== fetch Post ====');
//       console.log(json);
//     });

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