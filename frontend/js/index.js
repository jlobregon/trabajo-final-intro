const columnas = [];
columnas[0] = document.getElementById('recetas-cl-1');
columnas[1] = document.getElementById('recetas-cl-2');
columnas[2] = document.getElementById('recetas-cl-3');
let currentIndex = 0;

fetch('http://localhost:3000/api/v1/recetas')
    .then(result => result.json())
    .then(data => {
        data.forEach(receta => {
            const elementoReceta = document.createElement('div');
            elementoReceta.classList.add('card');

            elementoReceta.innerHTML = `
                <div class="card-image">
                    <figure class="image is-1by1 receta-imagen">
                    <img src="img/rata1-2.jpg" alt="Receta">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="" alt="PFP">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-5">${receta.nombre}</p>
                            <p class="subtitle is-6">NOMBRE DE PERFIL</p>
                        </div>
                    </div>
                </div>
                `;
            if (currentIndex === 3) { currentIndex = 0 };
            columnas[currentIndex].appendChild(elementoReceta);
            currentIndex++;
        });
    });
