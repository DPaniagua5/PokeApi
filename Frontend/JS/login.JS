async function Ingresar(){
    let url = 'http://localhost:7000/login';

    var name = document.getElementById('Nombre').value;
    var pas  = document.getElementById('Contra').value;

        // creando un json
    var data = {
        "usser": name,
        "pass": pas
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
   var d = respuestas.Respuesta;
   if(d == "1"){
    localStorage.setItem('Nombre', name);
    console.log(name)
    alert('bienvenido');
    location.href = "home.html"
    console.log(name)
   }else if (d == "0"){
       alert('Usuario y/o contraseña incorrectos');
   }

}