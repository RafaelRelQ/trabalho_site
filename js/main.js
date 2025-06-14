function dropdown1(){
    const dropdown = document.getElementById('dropdown1')
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
};

function dropdown2(){
    const dropdown = document.getElementById('dropdown2')
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
};

function dropdown3(){
    const dropdown = document.getElementById('dropdown3')
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
};

function confirmar(){
    if(confirm("Você deseja cancelar o evento?")){
        alert("Erro, Falha de Cancelamento")
    }else{alert("Cancelamento não feito")}
};
function abrirPopup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}