fetch('http://localhost:3000/api/v1/ingredientes').then(result => result.json()
).then(ingredientes => {
    const tablaIngredientes = document.getElementById('tabla-ingredientes');
    ingredientes.forEach(ingrediente => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${ingrediente.nombre}</td>
            <td>${ingrediente.categoria}</td>
            <td>${ingrediente.calorias_aprox}</td>
            <td>${ingrediente.unidad_medida}</td>
            <td>${ingrediente.es_vegano ? '✅' : '❌'}</td>
            <td class="has-text-centered"><button title="Editar" class="button is-warning">🖋</button></td>
            <td class="has-text-centered"><button title="Eliminar" class="button is-danger">🗑</button></td>
        `;
        tablaIngredientes.appendChild(tr);
    });
});
