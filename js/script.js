function loadData(callback) {
    fetch('./api/autos.js')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error al cargar los datos:', error));
}
function displayData() {
    loadData(data => {
        const autos = document.getElementById('autos');
        autos.innerHTML = '';
        data.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            row.forEach(item => {
                const card = document.createElement('div');
                card.className = 'col-md-4 mb-3';
                const cardHtml = `
                    <div class="card">
                        <img  src="${item.image}" class="card-img-top" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="c">Precio: $${item.price}</p>
                            <p class="card-text">ID: ${item.id}</p>
                            <button class="btn btn-primary btn-fullscreard-texten" data-bs-toggle="modal" data-bs-target="#cardModal" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">Ver más</button>
                            <button class="btn btn-success btn-cotizar" data-url="./cotizaciones.html">Cotizar</button>
                        </div>
                    </div>
                `;
                card.innerHTML = cardHtml;
                rowDiv.appendChild(card);
            });
            autos.appendChild(rowDiv);
        });
    });
}
document.getElementById('cardModal').addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    const image = button.getAttribute('data-image');
    const modalBody = document.getElementById('modalCardDetails');
    modalBody.innerHTML = `
        <img src="${image}" class="card-img-top" alt="${name}">
        <div class="card-body">
            <br>
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Precio: $${price}</p>
            <p class="card-text">ID: ${id}</p>
            <br>
            <button class="btn btn-success btn-cotizar" data-url="./cotizaciones.html">Cotizar</button>

        </div>
    `;
});

document.addEventListener('click', function (event) {
    if (event.target.matches('.btn-cotizar')) {
        const url = event.target.getAttribute('data-url');
        window.location.href = url;
    }
});
window.onload = displayData;


