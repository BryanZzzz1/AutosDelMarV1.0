document.getElementById('cotizacionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const cotizacionData = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        modelo: document.getElementById('modelo').value,
        anio: document.getElementById('anio').value
    };

    // Enviar los datos a la API
    fetch('http://localhost:3000/cotizaciones', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cotizacionData)
    })
    .then(response => response.json())
    .then(data => {
        
        alert('¡Cotización enviada con éxito!');

    })
    .catch(error => {
        console.error('Error:', error);
        
        alert('Se produjo un error al enviar la cotización. Por favor, inténtalo de nuevo.');
    });
});