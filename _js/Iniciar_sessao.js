//Pegar dados do LocalStorage
var formulario= document.getElementById('formulario');

formulario.addEventListener ("submit",(e) => {
    e.preventDefault();
    if(document.getElementById('email').value==localStorage.getItem("email") && document.getElementById('pass').value== localStorage.getItem("passe1")){
        window.location.href=("../_texto/pagina_autor.html");
    }else{
        window.alert('Palavra passe incorreta');
    }

});


var cancelar= document.getElementById("canc");
cancelar.addEventListener("click", ()=>{
    
    window.location.href= '../_texto/pagina_inicial.html';
});

// Códigos para ver e ocultar senha
var pass= document.getElementById("pass");
var olho= document.getElementById("olho");

olho.addEventListener("click", () =>{
    var tipo= pass.type=="password";

    if(tipo){
        mostrarPass();
    }else{
        ocultarPass();
    }
});

function mostrarPass(){
    pass.setAttribute("type","text");
    olho.setAttribute("src","../_imagens/icons8_invisible_32.png");
}

function ocultarPass(){
    pass.setAttribute("type","password");
    olho.setAttribute("src","../_imagens/icons8_eye_32.png");
}