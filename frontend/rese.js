//adivinho da resenha
function avaliar() {
  const palavra = document.getElementById("palavrachav").value;
  const resultado = document.getElementById("resultado");

    if (palavra.trim() === ""){
        resultado.textContent = "Digite misera"
        resultado.style.color = "red";

        const novaImagem = document.createElement("img");
        novaImagem.src = "cuidado.jpeg";
        novaImagem.style.display = "block";
        novaImagem.style.margin = "20px auto"; 
        novaImagem.style.maxWidth = "300px"; 
        resultado.appendChild(novaImagem);
    } 
    else if (palavra.trim().toLowerCase() === "resenha" || palavra.trim().toLowerCase() === "anamatopeia" || palavra.trim().toLowerCase() === "67" || palavra.trim().toLowerCase() === "amigos" || palavra.trim().toLowerCase() === "parabellum") {
        resultado.textContent = "Parabéns! Você escreveu uma resenha.";
        resultado.style.color = "green";

        const novaImagem = document.createElement("img");
        novaImagem.src = "resenha.gif";
        novaImagem.style.display = "block";
        novaImagem.style.margin = "20px auto"; 
        novaImagem.style.maxWidth = "300px"; 
        resultado.appendChild(novaImagem);
    } else {
        resultado.textContent = "Essa palavra não é uma resenha.";
        resultado.style.color = "orange";

        const novaImagem = document.createElement("img");
        novaImagem.src = "cade.jpeg";
        novaImagem.style.display = "block";
        novaImagem.style.margin = "20px auto"; 
        novaImagem.style.maxWidth = "300px"; 
        resultado.appendChild(novaImagem);
    }

}