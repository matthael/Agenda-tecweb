import { obterAgendamentos } from "../data/db.js";

const agendamentos = obterAgendamentos();

// pega todos os dias do calendário
const dias = document.querySelectorAll(".day");

agendamentos.forEach(ag => {
    const data = new Date(ag.data);
    const dia = data.getDate(); // ex: 7

    dias.forEach(el => {
        // pega só o número do dia (ignora espaços)
        const numeroDia = el.childNodes[0]?.nodeValue?.trim();

        if (parseInt(numeroDia) === dia) {

            const evento = document.createElement("div");
            evento.classList.add("event");

            evento.innerHTML = `
                <span class="event-time">${ag.horario}</span>
                <span class="event-name">${ag.nome}</span>
            `;

            el.appendChild(evento);
        }
    });
});