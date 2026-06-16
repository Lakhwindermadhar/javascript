const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
};

const randomDelay = () => {
    return new Promise((resolve) => {
        let timeout = 1 + 6 * Math.random(); // 1 to 7 seconds
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    });
};

async function main() {
    const text = [
        "Initialized Hacking now reading your data",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ];

    // Animate dots on the last item
    const dotInterval = setInterval(() => {
        let allDivs = document.body.getElementsByTagName("div");
        if (allDivs.length === 0) return;

        let last = allDivs[allDivs.length - 1];
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, -3);
        } else {
            last.innerHTML += ".";
        }
    }, 300);

    for (const item of text) {
        await addItem(item); // Await each item to simulate step-by-step loading
    }

    clearInterval(dotInterval); // Stop dot animation after all messages are shown
}

main();