document.querySelector(".child").addEventListener("click", (e)=>{
    e.stopPropagation();
    alert("child is clicked")
})

document.querySelector(".childContainer").addEventListener("click", (e)=>{
    e.stopPropagation();
    alert("childContainer is clicked")
})

document.querySelector(".container").addEventListener("click", (e)=>{
    e.stopPropagation();
    alert("container is clicked")
})

///////////////setinterval//////////////////


function getRandomColor(){
    let val1 = Math.random()*233;
    let val2 = Math.random()*233;
    let val3 = Math.random()*233;
    return `rgb(${val1}, ${val2}, ${val3})`
    
}

// setInterval(() => {
//    document.querySelector(".child").style.background = getRandomColor()
// },2000);


////////////setTimout function works only one time and override a timeout use a cleartimeout function////////////////////////////////////
setTimeout(() => {
   document.querySelector(".child").style.background = getRandomColor()
},2000);