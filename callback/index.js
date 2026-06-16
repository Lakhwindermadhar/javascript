console.log("inder is a developer")     
console.log( "raj is a coder " )


setTimeout(() => {
    console.log(" i am a coder and a developer as well")
},0);


setTimeout(() => {
    console.log(" i am reached  ata top of a mountain")
},0);

console.log("The End")



const fn = () => { 
    console.log("nothing")
 }

 const callback= (arg, fn) => { 
    console.log(arg)
    fn()
 }

 const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("inder", fn);
    document.head.append(sc)
 }

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js", callback);