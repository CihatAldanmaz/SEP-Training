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

