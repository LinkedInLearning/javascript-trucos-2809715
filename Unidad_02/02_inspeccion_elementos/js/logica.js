function init(){
document.getElementById("submit").addEventListener("click", e=>{
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;

        document.getElementById("error").innerHTML = "No se encontró el usuario "+email;
    })
    
}

window.onload = init;
