const contenedorRecetas = document.getElementById('contenedor-recetas');
const contenedorChefs = document.getElementById('contenedor-chefs');
import { modalesRecetas } from './modal-recetas.js';
let recetas = [];

Promise.all([
    fetch('http://localhost:3000/api/v1/recetas').then(result => result.json()),
    fetch('http://localhost:3000/api/v1/chefs').then(result => result.json())
])
.then(([resRecetas, chefs]) => {
    if (!Array.isArray(resRecetas) || resRecetas.length === 0) {
    contenedorRecetas.innerHTML = '<p>No hay recetas disponibles.</p>';
    } else {
        recetas = resRecetas;
    
        recetas.forEach(receta => {
            const chef = chefs.find(c => c.id === receta.chef_id);
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('column', 'is-4-desktop');
    
            tarjeta.innerHTML = `
                <div class="card">
                    <a class="js-modal-trigger" data-target="modal-receta" data-receta-id="${receta.id}">
                        <div class="card-image">
                            <figure class="image is-1by1 tarjeta-imagen">
                                <img src="${receta.imagen_url || 'img/receta-default.jpg'}" alt="Receta">
                            </figure>
                        </div>
                    </a>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48 tarjeta-imagen">
                                    <img class="is-rounded" src="${chef.imagen_url || 'img/perfil-default.png'}" alt="PFP">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-5 js-modal-trigger nombre-recetas" data-target="modal-receta" data-receta-id="${receta.id}" style="cursor: pointer;">
                                    ${receta.nombre}
                                </p>
                                <p class="subtitle is-6">
                                    <a class="autor-receta" href="perfil.html?id=${chef.id}">${chef.nombre}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedorRecetas.appendChild(tarjeta);
        });
        modalesRecetas(recetas);
    }
});