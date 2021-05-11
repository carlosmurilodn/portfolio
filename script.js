var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
})

var tela = document.querySelectorAll("header, section, footer");
var t;
for (let t = 0; t < tela.length; t++) {
    tela[t].addEventListener("click", function(){
        document.querySelector(".container").classList.remove("show-menu");
    })    
}


/*var tela = document.querySelector("#conhecimentos");
tela.addEventListener("click", function(){
    document.querySelector(".container").classList.remove("show-menu");
})

var tela = document.querySelector("#projetos");
tela.addEventListener("click", function(){
    document.querySelector(".container").classList.remove("show-menu");
})

var tela = document.querySelector("#contato");
tela.addEventListener("click", function(){
    document.querySelector(".container").classList.remove("show-menu");
})

var tela = document.querySelector("#orcamento");
tela.addEventListener("click", function(){
    document.querySelector(".container").classList.remove("show-menu");
})

var tela = document.querySelector("footer");
tela.addEventListener("click", function(){
    document.querySelector(".container").classList.remove("show-menu");
})*/

document.querySelector("#qtde").addEventListener("change",atualizarPreco)
document.querySelector("#js").addEventListener("change",atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change",atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change",atualizarPreco)
document.querySelector("#prazo").addEventListener("change",function(){
    const prazo = document.querySelector("#prazo").value;
    if (prazo==1) {
        document.querySelector("label[for=prazo]").innerHTML=`Prazo: ${prazo} semana`;
    } else {
        document.querySelector("label[for=prazo]").innerHTML=`Prazo: ${prazo} semanas`;
    }
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value;
    const temJS = document.querySelector("#js").checked;
    const incluiLayout = document.querySelector("#layout-sim").checked;
    const prazo = document.querySelector("#prazo").value;
    let preco = qtde * 100;
    if(temJS) preco *= 1.1;
    if(incluiLayout) preco += 500;
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia;

    document.querySelector("#preco").innerHTML= `R$ ${preco.toFixed(2)}`;
}
