//implement fetch, promise catch, promise.all

class HD {
    static PENDING = 'pending';
    static FUFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(executor) {
        this.status = HD.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            executor(this.resovle.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }
    resovle(value) {
        if (this.status == HD.PENDING) {
            this.status = HD.FUFILLED;
            this.value = value;
            this.callbacks.map(callback => {
                callback.onFulfilled(value);
            })
        }

    }
    reject(reason) {
        if (this.status == HD.PENDING) {
            this.status = HD.REJECTED;
            this.value = reason;
            this.callbacks.map(callback => {
                callback.onRejected(reason);
            })
        }
    }
    then(onFulfilled, onRejected) {
        if (typeof onFulfilled !== 'function') {
            onFulfilled = () => { }
        }
        if (typeof onRejected !== 'function') {
            onRejected = () => { }
        }
        if(this.status == HD.PENDING) {
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
        if (this.status == HD.FUFILLED) {
            setTimeout(() => {
                try {
                    onFulfilled(this.value);
                } catch (error) {
                    onRejected(error);
                }
            });
        }
        if (this.status == HD.REJECTED) {
            setTimeout(() => {
                try {
                    onRejected(this.value);
                } catch (error) {
                    onRejected(error);
                }
            });
        }
    }
}

// new Promise((resolve, reject) => {
//     resolve('解决');
//     reject('拒绝');
// }).then(value => {

// }, reason => {
//     console.log(reason);
// })