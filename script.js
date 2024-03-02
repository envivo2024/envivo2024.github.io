// Simulación de datos de eventos
const events = [
    { time: "19:00", teams: "UCV vs CuscoFC, Debut Paolo Guerrero" },
    { time: " ", teams: " " },
    // Añade más eventos según sea necesario
];

function displayEvents() {
    const eventListElement = document.getElementById('event-list');
    eventListElement.innerHTML = '';

    events.forEach(event => {
        eventListElement.innerHTML += `<div>${event.time} - ${event.teams}</div>`;
    });

    document.getElementById('last-updated-time').textContent = new Date().toLocaleTimeString();
}
let devToolsOpen = false;




// Actualizar los eventos cada minuto
setInterval(displayEvents, 60000);

// Mostrar los eventos al cargar la página
displayEvents();

