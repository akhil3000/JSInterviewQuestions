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