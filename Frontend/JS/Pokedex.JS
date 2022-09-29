const API_URL = 'http://localhost:7000';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response);
        const RespuestaHTML = document.querySelector("#app");
        
        const tpl = data.map((pokemon) =>  
        `
        <link rel = "stylesheet" href = "../CSS/Pstyle.css">
        <div class = "container">      
            <div class = "card">
            <img src = "${pokemon.Imagen}"> 
            <h4> Número:  </h4> ${pokemon.Numero} 
            <h4> Nombre:  </h4> ${pokemon.Nombre} 
            <h4> Tipo:  </h4>   ${pokemon.Tipo} 
            <h4> Ataque:  </h4> ${pokemon.Ataque}
                </div> 
            </div>
           `)
        
        RespuestaHTML.innerHTML = `${tpl}`
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/pokedex`);
xhr.send();


