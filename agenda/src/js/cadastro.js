document.getElementById("formCadastro").addEventListener("submit", function(e) {
  e.preventDefault();

  const agendamento = {
    nome: document.getElementById("nome").value,
    data: document.getElementById("data").value,
    hora: document.getElementById("hora").value,
    descricao: document.getElementById("descricao").value
  };

  salvarAgendamento(agendamento);

  alert("Agendamento salvo!");
  window.location.href = "listagem.html";
});