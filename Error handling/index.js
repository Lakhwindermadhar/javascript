let a = prompt("Enter a first number")

let b = prompt("Enter a second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed ! try another number")
}
let x = 1;

let sum = parseInt(a) + parseInt(b)

function main() {

    try {
        console.log("The sum is", sum * x);

    } catch (error) {
        console.log("error occured")
    }
    finally{
        console.log("File is being closed and db connection is being closed");
        
    }
}


let c = main()
