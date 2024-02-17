
//Promise Producing
const p=new Promise((resolve,reject)=>{
    resolve("Promise resolved value");
})
//Promise consuming
async function handlePromise(){
    const val=await p;
    console.log(val);
}
handlePromise();