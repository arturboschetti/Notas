// Captura dos elementos
const resto = document.getElementById("resto");
const materia = document.getElementById("materia");
const input1 = document.getElementById("i1");
const input2 = document.getElementById("i2");
const btnCadastrar = document.getElementById("cadastrar");
const btnFinalizar = document.getElementById("finalizar");
const divTabela = document.getElementById("tabela");

const materias = [
  "Artes",
  "Biologia",
  "Educação Financeira",
  "Educação Física",
  "Ensino Religioso",
  "Escrita Criativa",
  "Física",
  "Geografia",
  "História",
  "Língua Inglesa",
  "Língua Portuguesa",
  "Literatura",
  "Matemática",
  "Projeto Integrador",
  "Química",
  "Sociologia",
];

let indiceAtual = 0;
const boletim = [];

// Proteção: o código abaixo só roda se estiver na página de cadastro (onde esses elementos existem)
if (materia && btnCadastrar && btnFinalizar) {
  btnFinalizar.disabled = true; // Desativa o botão finalizar no início
  materia.innerText = materias[indiceAtual];
  resto.innerText = indiceAtual + 1 + " de " + materias.length;

  btnCadastrar.addEventListener("click", () => {
    const val1 = input1.value.trim();
    const val2 = input2.value.trim();

    if (val1 === "" || val2 === "") {
      alert("Preencha todos os Campos");
      return;
    }

    const nota1 = Number(val1);
    const nota2 = Number(val2);

    if (nota1 > 10 || nota2 > 10 || nota1 < 0 || nota2 < 0) {
      alert("Notas Invalidas");
      return;
    }

    const novaMateriaObj = {
      id: indiceAtual + 1,
      nome: materias[indiceAtual],
      nota1: nota1,
      nota2: nota2,
    };

    boletim.push(novaMateriaObj);
    console.log(boletim);

    input1.value = "";
    input2.value = "";
    indiceAtual++;

    if (indiceAtual < materias.length) {
      materia.innerText = materias[indiceAtual];
      resto.innerText = indiceAtual + 1 + " de " + materias.length;
    } else {
      materia.innerText = "Cadastro Finalizado!";
      resto.innerText = "";
      btnCadastrar.disabled = true;
      btnFinalizar.disabled = false; // Libera o botão finalizar
    }
  });

  btnFinalizar.addEventListener("click", () => {
    // Limpa a div da tabela para não duplicar se clicar duas vezes
    divTabela.innerHTML = "";

    // 1. Cria a estrutura principal da tabela
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    const th1 = document.createElement("th");
    th1.innerText = "Matéria";

    const th2 = document.createElement("th");
    th2.innerText = "Nota Necessária";

    // Adiciona os cabeçalhos (th) dentro da linha (tr), e a linha no thead
    trHead.appendChild(th1);
    trHead.appendChild(th2);
    thead.appendChild(trHead);
    table.appendChild(thead);

    // 2. Cria o corpo da tabela (onde vão os dados)
    const tbody = document.createElement("tbody");

    // 3. Percorre o boletim e cria uma linha para cada matéria
    boletim.forEach(function (item) {
      const n1 = item.nota1;
      const n2 = item.nota2;
      const media = (60 - n1 * 3 - n2 * 3) / 4;

      const trBody = document.createElement("tr");

      const tdMateria = document.createElement("td");
      tdMateria.innerText = item.nome;

      const tdMedia = document.createElement("td");
      tdMedia.innerText = media.toFixed(1); // toFixed(1) deixa com apenas uma casa decimal

      trBody.appendChild(tdMateria);
      trBody.appendChild(tdMedia);
      tbody.appendChild(trBody);
    });

    // 4. Junta tudo e adiciona na página
    table.appendChild(tbody);
    divTabela.appendChild(table); // Adiciona a variável 'table' ao elemento HTML
  });
}
