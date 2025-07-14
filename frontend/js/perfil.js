const parametro = new URLSearchParams(window.location.search);
const chefId = parametro.get("id");
let recetas = [];
import { modalesRecetas } from './modal-recetas.js';

if (chefId) {
  Promise.all([
    fetch(`http://localhost:3000/api/v1/recetas/chefs/${chefId}`).then(result => result.json()),
    fetch(`http://localhost:3000/api/v1/chefs/${chefId}`).then(result => result.json())
])

    .then(([resRecetas, chef]) => {
        document.getElementById("chef-nombre").textContent = chef.nombre;
        document.getElementById("chef-especialidad").textContent = chef.especialidad || "";
        document.getElementById("chef-localidad").textContent = chef.localidad || "";
        document.getElementById("chef-imagen").src = chef.imagen_url || "img/perfil-default.png";

        recetas = resRecetas;
        const recetasContainer = document.getElementById("chef-recetas");
            recetas.forEach(receta => {
                const div = document.createElement("div");
                div.classList.add("column", "is-4");

                div.innerHTML = `
                    <div class="card">
                        <a class="js-modal-trigger" data-target="modal-receta" data-receta-id="${receta.id}">
                            <div class="card-image">
                                <figure class="image is-1by1">
                                    <img src="${receta.imagen_url || 'img/receta-default.jpg'}" alt="${receta.nombre}">
                                </figure>
                            </div>
                        </a>
                        <div class="card-content">
                            <p class="title is-6 js-modal-trigger" data-target="modal-receta" data-receta-id="${receta.id}" style="cursor: pointer;">
                                ${receta.nombre}
                            </p>
                        </div>
                    </div>
                `;
                recetasContainer.appendChild(div);
            });
        modalesRecetas(recetas);
    });

}