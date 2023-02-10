

const URL = "https://randomuser.me/api/"
const $nombre = document.querySelector("#nombre");
const $ocupacion = document.querySelector("#ocupacion");
const $fotoDePerfil =document.querySelector("#fotoDePerfil");
const $numeroDeTelefono = document.querySelector("#numeroTelefono");
const $correoElectronico = document.querySelector("#correoElectronico");
const sobreMiTexto=["Aliquam erat volutpat. Nam posuere nibh non mattis suscipit. Nam et elementum neque. Praesent laoreet ultricies convallis. Aliquam arcu risus, eleifend et facilisis sit amet, fermentum ac nisl. Proin tellus risus, imperdiet et pulvinar vel, dictum et tortor.","Praesent ultrices pulvinar finibus. Etiam scelerisque luctus augue, sit amet convallis massa pharetra eget. Pellentesque vulputate pellentesque urna, quis elementum elit consequat ut. Vivamus ut dictum dui. Nulla vitae pulvinar tellus, eu eleifend ipsum.","Aenean et est erat. Quisque non ante maximus, venenatis nibh sit amet, molestie sem. Nam finibus enim sed aliquet egestas. Nulla id leo libero. Cras eu hendrerit odio. Praesent pretium volutpat nibh eu malesuada. Vivamus purus augue, malesuada nec egestas"];
const sobreMiBloque = document.querySelector("#info");
const bordeSobreMi = document.querySelector("#contenido");
const $boton1 = document.querySelector("#boton1");
const $boton2 = document.querySelector("#boton2");
const $boton3 = document.querySelector("#boton3");
const $githubPerfil = document.querySelector("#githubPerfil");

sobreMiBloque.textContent= sobreMiTexto[0];

function pedirUsuario(){
    fetch (URL)
        .then(respuesta => respuesta.json())
        .then(data=>{
            console.log("Datos recibidos correctamente");
            cargarUsuario(data);
        })
        .catch(error => console.error(error)); 
};

pedirUsuario();

function cargarUsuario(info){
    //Carga el nombre de usuario
    $nombre.textContent = `${info.results[0].name.first} ${info.results[0].name.last}`;

    //Carga segun el sexo la ocupación
    if (info.results[0].gender === "male"){
        $ocupacion.textContent="Diseñador Web Frontend";
    }else{
        $ocupacion.textContent="Diseñadora Web Frontend";
    }
    //Carga el nombre en el <title>
    document.title= `Hola! Soy ${info.results[0].name.first} ${info.results[0].name.last} :)`

    //Carga el perfil de la persona en Github
    $githubPerfil.textContent = "/" + info.results[0].name.first.toLowerCase()+ info.results[0].name.last.toLowerCase();
    //Carga la foto de perfil

    $fotoDePerfil.setAttribute("src",info.results[0].picture.large)

    //Carga el número de teléfono
    $numeroDeTelefono.textContent = info.results[0].cell;

    //Carga el correo electrónico
    $correoElectronico.textContent= info.results[0].email;
}


$boton1.addEventListener("click",mostrarSobreMi);
$boton2.addEventListener("click",mostrarSobreMi);
$boton3.addEventListener("click",mostrarSobreMi);

function mostrarSobreMi(e){
    let boton = e.target.id;

    if(boton=== "boton1"){
        sobreMiBloque.textContent= sobreMiTexto[0];
        bordeSobreMi.classList.remove("marco2");
        bordeSobreMi.classList.remove("marco3");
        bordeSobreMi.classList.add("marco1");
    }else if(boton === "boton2"){
        sobreMiBloque.textContent= sobreMiTexto[1];
        bordeSobreMi.classList.remove("marco1");
        bordeSobreMi.classList.remove("marco3");
        bordeSobreMi.classList.add("marco2");
    }else{
        sobreMiBloque.textContent= sobreMiTexto[2];
        bordeSobreMi.classList.remove("marco1");
        bordeSobreMi.classList.remove("marco2");
        bordeSobreMi.classList.add("marco3");
    }
};
