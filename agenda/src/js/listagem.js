const lista = document.getElementById("lista");
const agendamentos = obterAgendamentos();

agendamentos.forEach(item => {
  const row = `
    <tr>
      <td>${item.nome}</td>
      <td>${item.data}</td>
      <td>${item.hora}</td>
      <td>${item.descricao}</td>
    </tr>
  `;

  lista.innerHTML += row;
});