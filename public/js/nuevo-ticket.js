// Referencias al HTML
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnAtender = document.querySelector('button');

const socket = io();

socket.on('connect', () => {
	btnAtender.disabled = false;
});

socket.on('disconnect', () => {
	btnAtender.disabled = true;
});

socket.on('ultimo-ticket', (ultimo) => {
	lblNuevoTicket.innerText = 'Ticket ' + ultimo;
});

btnAtender.addEventListener('click', () => {
	socket.emit('siguiente-ticket', null, (ticket) => {
		lblNuevoTicket.innerText = ticket;
	});
});
