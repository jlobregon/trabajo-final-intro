const contenedorRecetas = document.getElementById('contenedor-recetas');
const contenedorChefs = document.getElementById('contenedor-chefs');

Promise.all([
    fetch('http://localhost:3000/api/v1/recetas').then(result => result.json()),
    fetch('http://localhost:3000/api/v1/chefs').then(result => result.json())
])
.then(([recetas, chefs]) => {
    recetas.forEach(receta => {
        const chef = chefs.find(c => c.id === receta.chef_id)
        const elementoReceta = document.createElement('div');
        elementoReceta.classList.add('column', 'is-4-desktop');

        elementoReceta.innerHTML = `
            <div class="card">
                <div class="card-image">
                    <figure class="image is-1by1 receta-imagen">
                    <img src="${receta.imagen_url || 'img/receta-default.jpg'}" alt="Receta">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="${chef.imagen_url || "img/perfil-default.png"}" alt="PFP">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-5">${receta.nombre}</p>
                            <p class="subtitle is-6">${chef.nombre}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            contenedorRecetas.appendChild(elementoReceta);
        });
    chefs.forEach(chef => {
        const elementoChef = document.createElement('div');
        elementoChef.classList.add('column', 'is-3-desktop', 'has-text-centered');
        elementoChef.innerHTML = `
            <figure class="image is-1by1 receta-imagen">
                <img class="is-rounded" src="${chef.imagen_url || 'img/perfil-default.png'}" alt="${chef.nombre}">
            </figure>
            <p class="title is-5">${chef.nombre}</p>
            <p class="subtitle is-6">${chef.especialidad || chef.localidad || ""}</p>
        `;
        contenedorChefs.appendChild(elementoChef);
    });
});
