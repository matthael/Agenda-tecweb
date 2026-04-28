import { salvarAgendamento } from "../data/db.js";

const form = document.getElementById("form-agendamento");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const agendamento = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        data: document.getElementById("data").value,
        horario: document.getElementById("horario").value
    };

    salvarAgendamento(agendamento);

    alert("Agendamento realizado com sucesso!");

    form.reset();

    // redireciona
    window.location.href = "./listagem.html";
});