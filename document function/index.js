console.log("inder")


//let boxes = document.getElementsByClassName("box")
//console.log(boxes)
//
//boxes[2].style.backgroundColor = "red"

//document.getElementById("redbox").style.backgroundColor = "green"

//document.querySelector(".box").style.backgroundColor = "orange"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})