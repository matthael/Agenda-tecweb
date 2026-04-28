function salvarAgendamento(agendamento) {
  let lista = JSON.parse(localStorage.getItem("agenda")) || [];
  lista.push(agendamento);
  localStorage.setItem("agenda", JSON.stringify(lista));
}

function obterAgendamentos() {
  return JSON.parse(localStorage.getItem("agenda")) || [];
}