const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved');
    }, 1000);
});

promise.then((res) => {
    console.log(res);
}).catch(function(err){
    console.log(err.message);
})
//Callback hell is solved with promises when one callback is passed as argument to another callback promise object is used to ensure successfull implementation of
//callback or rejection it will guarantee the completion of operation
