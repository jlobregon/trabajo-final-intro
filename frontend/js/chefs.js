import { modalCrearChef } from './modal-crear-chef.js';
const contenedorChefs = document.getElementById('contenedor-chefs');

fetch('http://localhost:3000/api/v1/chefs').then(result => result.json())
.then(chefs => {
    if(!Array.isArray(chefs) || chefs.length === 0) {
            contenedorChefs.innerHTML = '<p class="has-text-centered">No hay chefs disponibles.</p>';
        } else {
            chefs.forEach(chef => {
                const div = document.createElement('div');
                div.classList.add('column', 'is-3-desktop', 'has-text-centered');
                div.innerHTML = `
                    <a href="perfil.html?id=${chef.id}" class="js-modal-trigger">
                        <figure class="image is-1by1 tarjeta-imagen">
                            <img class="is-rounded" src="${chef.imagen_url || 'img/perfil-default.png'}" alt="${chef.nombre}">
                        </figure>
                        <p class="title is-5">${chef.nombre}</p>
                        <p class="subtitle is-6">${chef.especialidad || chef.localidad || ""}</p>
                    </a>
                `;
                contenedorChefs.appendChild(div);
            });
        }
    }
);
modalCrearChef();