let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolved!');
    }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Rejected!');
    }, 2000);
});

/*
* Promise.all() 
* All promises are expected. 
* If one of the promises is rejected, the result of rejected is returned.
*/
Promise.all([promise1, promise2])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
/**
 * Promise.race()
 * Returns the fastest promise in race.
 * in the example it will happen after 1ms seconds
 * Resolved for promise result! will return the result.
 */
Promise.race([promise1, promise2])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
