async function FNumero(){
    let url = 'http://localhost:7000/numero';

    var numero = document.getElementById('Numero').value;

        // creando un json
    var data = {
        "num": numero
    }
    const respuestas = await fetch(url,{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    })
    .then((res)=> res.json())
    .then((data) => {
        return data
    })
   let contenedor = document.getElementById('app');
   contenedor.innerHTML =  `
   <link rel = "stylesheet" href = "../CSS/Pstyle.css">
   <div class = "container">      
       <div class = "card">
       <img src = "${respuestas.Imagen}"> 
       <h4> Número:  </h4> ${respuestas.Numero} 
       <h4> Nombre:  </h4> ${respuestas.Nombre} 
       <h4> Tipo:  </h4>   ${respuestas.Tipo} 
       <h4> Ataque:  </h4> ${respuestas.Ataque}

           </div> 
       </div>
      `;
}

async function FNombre(){
    let url = 'http://localhost:7000/nombre';

    var numero = document.getElementById('Nombre').value;

        // creando un json
    var data = {
        "nom": numero
    }
    const respuestas = await fetch(url,{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    })
    .then((res)=> res.json())
    .then((data) => {
        return data
    })
    let contenedor = document.getElementById('app');
   contenedor.innerHTML =  `
   <link rel = "stylesheet" href = "../CSS/Pstyle.css">
   <div class = "container">      
       <div class = "card">
       <img src = "${respuestas.Imagen}"> 
       <h4> Número:  </h4> ${respuestas.Numero} 
       <h4> Nombre:  </h4> ${respuestas.Nombre} 
       <h4> Tipo:  </h4>   ${respuestas.Tipo} 
       <h4> Ataque:  </h4> ${respuestas.Ataque}

           </div> 
       </div>
      `;
}

async function FTipo(){
    let url = 'http://localhost:7000/tipo';

    var tipo = document.getElementById('Tipo').value;

        // creando un json
    var data = {
        "type": tipo
    }
    const respuestas = await fetch(url,{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    })
    .then((res)=> res.json())
    .then((data) => {
        return data
    })       
    const RespuestaHTML = document.querySelector("#app");
    var i = 0;
    for(var i = 0; i<respuestas.length; i++){
        if(respuestas[i].Tipo == "Agua"){
        
            RespuestaHTML.innerHTML =
            `
            <link rel = "stylesheet" href = "../CSS/PAstyle.css">
            <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[0].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[0].Numero} 
                <h4> Nombre:  </h4> ${respuestas[0].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[0].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[0].Ataque}
                    </div> 
                </div>
                <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[1].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[1].Numero} 
                <h4> Nombre:  </h4> ${respuestas[1].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[1].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[1].Ataque}
                    </div> 
                </div>
                <div class = "container">  
                <div class = "card">
                <img src = "${respuestas[2].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[2].Numero} 
                <h4> Nombre:  </h4> ${respuestas[2].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[2].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[2].Ataque}
                    </div> 
                </div>
                <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[3].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[3].Numero} 
                <h4> Nombre:  </h4> ${respuestas[3].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[3].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[3].Ataque}
                    </div> 
                </div>
                <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[4].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[4].Numero} 
                <h4> Nombre:  </h4> ${respuestas[4].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[4].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[4].Ataque}
                    </div> 
                </div>
               `
        
           }else if(respuestas[i].Tipo == "Fuego"){
            RespuestaHTML.innerHTML =
            `
            <link rel = "stylesheet" href = "../CSS/PFstyle.css">
            <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[0].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[0].Numero} 
                <h4> Nombre:  </h4> ${respuestas[0].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[0].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[0].Ataque}
                    </div> 
                </div>
                <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[1].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[1].Numero} 
                <h4> Nombre:  </h4> ${respuestas[1].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[1].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[1].Ataque}
                    </div> 
                </div>
                <div class = "container">  
                <div class = "card">
                <img src = "${respuestas[2].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[2].Numero} 
                <h4> Nombre:  </h4> ${respuestas[2].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[2].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[2].Ataque}
                    </div> 
                </div>
                <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[3].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[3].Numero} 
                <h4> Nombre:  </h4> ${respuestas[3].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[3].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[3].Ataque}
                    </div> 
                </div>
                <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[4].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[4].Numero} 
                <h4> Nombre:  </h4> ${respuestas[4].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[4].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[4].Ataque}
                    </div> 
                </div>
               `
           }else if(respuestas[i].Tipo == "Hierva"){
            RespuestaHTML.innerHTML =
            `
            <link rel = "stylesheet" href = "../CSS/PHstyle.css">
            <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[0].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[0].Numero} 
                <h4> Nombre:  </h4> ${respuestas[0].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[0].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[0].Ataque}
                    </div> 
                </div>
                <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[1].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[1].Numero} 
                <h4> Nombre:  </h4> ${respuestas[1].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[1].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[1].Ataque}
                    </div> 
                </div>
                <div class = "container">  
                <div class = "card">
                <img src = "${respuestas[2].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[2].Numero} 
                <h4> Nombre:  </h4> ${respuestas[2].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[2].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[2].Ataque}
                    </div> 
                </div>
                <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[3].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[3].Numero} 
                <h4> Nombre:  </h4> ${respuestas[3].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[3].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[3].Ataque}
                    </div> 
                </div>
                <div class = "container">      
                <div class = "card">
                <img src = "${respuestas[4].Imagen}"> 
                <h4> Número:  </h4> ${respuestas[4].Numero} 
                <h4> Nombre:  </h4> ${respuestas[4].Nombre} 
                <h4> Tipo:  </h4>   ${respuestas[4].Tipo} 
                <h4> Ataque:  </h4> ${respuestas[4].Ataque}
                    </div> 
                </div>
               `
           }

    }
    

}
