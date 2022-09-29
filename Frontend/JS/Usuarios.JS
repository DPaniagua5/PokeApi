const API_URL = 'http://localhost:7000';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response);
        const RespuestaHTML = document.querySelector("#app");

        const tpl = data.map((usuarios) =>  
        `
        <link rel = "stylesheet" href = "../CSS/Ustyle.css">
        <div class = "container">      
            <div class = "card">
            <img src = "${usuarios.Imagen}"> 
            <h4> Nombre:  </h4> <h5> ${usuarios.Usuario}</h5> 
            <h4> Contraseña:  </h4> <h5> ${usuarios.Password}</h5>  
                </div> 
            </div>
           `)
        
        RespuestaHTML.innerHTML = `${tpl}`
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/usuarios`);
xhr.send();