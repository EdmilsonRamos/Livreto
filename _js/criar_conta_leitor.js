// Salvar no LocalStorage
var form= document.getElementById('formulario');

form.addEventListener("submit",(e)=> {
    e.preventDefault();

    var a= document.getElementById('nome');
    var b= document.getElementById('data');
    var c= document.getElementById('email');
    var d= document.getElementById('tel');
    var e= document.getElementById('pass1');
    var f= document.getElementById('pass2');

    if(e.value==f.value){
    localStorage.setItem("nome", a.value);
    a.value="";
    
    localStorage.setItem("data",b.value);
    b.value="";

    localStorage.setItem("email",c.value);
    c.value="";

    localStorage.setItem("telefone",d.value);
    d.value="";

    localStorage.setItem("passe1",e.value);
    e.value="";


    window.location.href=("../_texto/iniciar_sessao.html");
    }else{
        alert('A palavra passe deve ser igual');
    }
});


var cancelar= document.getElementById("canc");

cancelar.addEventListener("click", ()=>{
    
    window.location.href= '../_texto/pagina_inicial.html';
});

// Códigos para ver e ocultar senha
var versenha= document.getElementById("inputCheckbox");

versenha.addEventListener("click", ()=>{
    var tipo= pass1.type=="password";

    if(tipo){
        mostrarPass();
    }else{
        ocultarPass();
    }
});

function mostrarPass(){
    pass1.setAttribute("type","text");
    pass2.setAttribute("type","text");
}

function ocultarPass(){
    pass1.setAttribute("type","password");
    pass2.setAttribute("type","password");
}