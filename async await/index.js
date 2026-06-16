// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("inder")
//         }, 3000);
//     })

// }


async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data

}

async function main() {
    console.log("Laoding page");

    console.log("Doing somthing important")

    console.log("Load data");

    console.log("data");

    let data = await getData()

    console.log(data);

    console.log("process data");

    console.log("task is showning");

}

main()