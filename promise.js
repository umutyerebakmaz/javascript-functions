let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Resolved!');
    }, 1000);
});

let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('Rejected!');
    }, 2000);
});

Promise.all([promise1,promise2])
    .then(function(success){
        console.log(success);
    })
    .catch(function(error){
        console.log(error);
    });

/*
* Promise.all, tüm promiseların cevabı beklenir. promiselardan birisi rejected ise rejected sonucu döner.
* Promise.race, race te ise en hızlı promise hangisiyse onun sonucu döner. örnekte 1ms saniye sonra gerçekleşecek
* promise sonucu için Resolved! sonucu dönecektir.
* */
