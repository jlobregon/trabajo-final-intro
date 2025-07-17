import { modalCrearIngrediente, modalEditarIngrediente } from './modal-crear-ingrediente.js';

fetch('http://localhost:3000/api/v1/ingredientes').then(result => result.json()
)
.then(data => {
    return data.sort((a, b) => a.nombre.localeCompare(b.nombre));
}).then(ingredientes => {
    const tablaIngredientes = document.getElementById('tabla-ingredientes');
    ingredientes.forEach(ingrediente => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${ingrediente.nombre}</td>
            <td>${ingrediente.categoria === 'null' || !ingrediente.categoria ? 'Sin categoría' : ingrediente.categoria}</td>
            <td>${ingrediente.calorias_aprox}</td>
            <td>${ingrediente.unidad_medida}</td>
            <td class="has-text-centered is-size-4">${ingrediente.es_vegano ? '✅' : '❌'}</td>
            <td class="has-text-centered"><button title="Editar" id="editar-ingrediente" class="button is-warning js-modal-trigger" data-ingrediente-id="${ingrediente.id}" data-target="modal-editar-ingrediente"">🖋</button></td>
            <td class="has-text-centered"><button title="Eliminar" class="button is-danger eliminar-ingrediente">🗑</button></td>
        `;
        tablaIngredientes.appendChild(tr);
        
        const botonEliminar = tr.querySelector('.eliminar-ingrediente');
        botonEliminar.addEventListener('click', () => {
            fetch(`http://localhost:3000/api/v1/ingredientes/${ingrediente.id}`, {
                method: 'DELETE'
            }).then(() => {
                confirm('¿Estás seguro de que deseas eliminar este ingrediente? Ten en cuenta que si es el único ingrediente de una receta, se eliminará la receta también') &&
                tr.remove();
            }).catch(error => {
                console.error('Error al eliminar el ingrediente:', error);
                alert('Error al eliminar el ingrediente. Inténtalo de nuevo.');
            });
        });
    });
    modalCrearIngrediente();
    modalEditarIngrediente(ingredientes);
});
