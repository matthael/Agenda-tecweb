const KEY = "agendamentos_reserva_ai";

export function salvarAgendamento(novo) {
    const lista = JSON.parse(localStorage.getItem(KEY)) || [];
    lista.push(novo);
    localStorage.setItem(KEY, JSON.stringify(lista));
}

export function obterAgendamentos() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}