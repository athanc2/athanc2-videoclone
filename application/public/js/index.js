// function fadeOut(ev){
//     let timer = setInterval(function(){
//         console.log(ev.currentTarget);
//         clearInterval(timer);
//     }),50);
// }

function buildCardHTML(data) {
    return ` <div class="card">
    <p class="card-title"${data.title}</p>
    <img class="card-image"  src="${data.url}" alt="product image">
    </div>`;
}


fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (resp_data) {
        let container = document.getElementById('container');
        resp_data.forEach(function (photo) {
            container.innerHTML += buildCardHTML(photo);
        });
        document.getElementById('photo_count').textContent = resp_data.length;
    })
    .catch(function (error) {
        console.log(error);
    });