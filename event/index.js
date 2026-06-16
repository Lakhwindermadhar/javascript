let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b> hey you clicked the button</b>"
})

button.addEventListener("mouseover", ()=>{
    alert("dont think to click")
})