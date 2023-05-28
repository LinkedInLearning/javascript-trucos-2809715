navigator.serviceWorker.register('worker.js').then(() => {
    console.log("servide worker registrado");
})

document.getElementById("btn").addEventListener("click", ()=>{

    let urls = [
        "assets/images/img1.jpg",
        "assets/images/img2.jpg",
        "assets/images/img3.jpg",
        "assets/images/img4.jpg",
        "assets/images/img5.jpg"
    ];
    
    let aleatorio = Math.round(Math.random()*4);

    fetch(urls[aleatorio]).then(response => {
        return response.blob();
    }).then(blob => {
        let url = URL.createObjectURL(blob);
        let imgTag = document.createElement("img");
        imgTag.src = url;
        document.body.appendChild(imgTag);
    })
})