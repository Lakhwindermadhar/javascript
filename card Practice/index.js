function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;

    // Format views properly (e.g., 1.2M, 850K)
    if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
        viewStr = (views / 1000).toFixed(1) + "K";
    } else {
        viewStr = views.toString();
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="Thumbnail">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} • ${viewStr} views • ${monthsOld} months ago</p>
            </div>
        </div>
    `;

    // Append instead of replacing HTML
    document.querySelector(".container").innerHTML += html;
}

    