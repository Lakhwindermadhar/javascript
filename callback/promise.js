console.log(' this is a promise')

let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if (a<0.5){
        reject("random nunmder is not supporting you")
    }

    else{

    setTimeout(() => {
        console.log('yes i am funny');
        resolve("inder") 
    }, 3000);
}
})

let prom2 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if (a<0.5){
        reject("random nunmder is not supporting you")
    }

    else{

    setTimeout(() => {
        console.log('yes i am funny too 2');
        resolve("inder 2 ") 
    }, 3000);
}
})


let p3 = Promise.all([prom1, prom2])
    p3.then((a) =>{
    console.log(a)
}).catch((err) =>{
    console.log(err)
})
