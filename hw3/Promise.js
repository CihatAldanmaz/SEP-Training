class MyPromise {

    constructor(executor) {
        this.state = 'pending';
        this.data = null;
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }
    resolve(data) {
        if (this.state === 'pending') {
            this.state = 'fulfilled';
            this.data = data;
        }
    }
    reject(data) {
        if (this.state === 'pending') {
            this.data = data;
            this.state = 'rejected';
        }
    }
    then(forFulfilled, forRejected) {
        if (typeof forFulfilled != "function") {
            forFulfilled = () => { };
        }
        if (typeof forRejected != "function") {
            forRejected = () => { };
        }
        if (this.state === 'fulfilled') {
            try {
                forFulfilled(this.data);
                return this;
            } catch (error) {
                forRejected(error);
            }
        }

        if (this.state === 'rejected') {
            try {
                forRejected(this.data);
            }
            catch (error) {
                console.log(error);
            }
        }

        return new MyPromise((resolve, reject) => {

        })
    }
    catch(forRejected) {
        return this.then(undefined, forRejected);
    }

}


new MyPromise((resolve, reject) => {
    resolve();
    // reject();
    // throw 'on-no';
}).then(
    value => {
        console.log('a');
    }
)
    .catch(
        value => {
            console.log('error');
        }
    )

    // (
    //     err => (console.log('catchininginging')));

// new Promise((resolve, reject) => {
//     //resolve(null);
//     // reject();
//     throw 'on-no';
// }).then(
//     value => {
//         console.log('成功处理');
//     }
// ).catch(err => console.log('catchininginging'));


function myfetch(url) {
  return new Promise((res, rej) => {
    var xhttp = new XMLHttpRequest();
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
    xhttp.send();
  });
}

myfetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

