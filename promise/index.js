//myFetch
function myFetch(url, data) {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                let response = {
                    json: function () {
                        return JSON.parse(xhttp.responseText);
                    }
                }
                resolve(response);
            }
        }
        xhttp.open(data.method, url, true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        xhttp.send(data.body)

    })
}


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
}).then((response) => response.json())
    .then((json) => {
        console.log('=== fetch Post ====');
        console.log(json);
    });


//myPromiseAll
myPromiseAll = function (promises) {
    let ret = [];
    let num = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            promise.then((result) => {
                ret[i] = result;
                num += 1;
                if (num === promises.length) {
                    resolve(ret);
                }
            }
            )
        })
    })
}

const testFunction = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num);
        }, num * 1000)
    })
}
promises = [testFunction(1), testFunction(2), testFunction(3)];
myPromiseAll(promises).then((response) => {
    console.log('promise all');
    console.log(response);
})

//implementation of catch method
class myPromise {
    constructor(executorFn) {
        this.promiseState = 'Pending';
    }
    this.reject = function () {

}
}