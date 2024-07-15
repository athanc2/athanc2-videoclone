function buildCardHTML(data) {
    return;
}


fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
    .then(function (resp) {
        resp.json();
    })
    .then(function (resp_data) {
        let container = document.getElementById('container');
        resp_data.forEach(function (photo)){
            container.innerHTML += buildCardHTML(photo);
        }
    })