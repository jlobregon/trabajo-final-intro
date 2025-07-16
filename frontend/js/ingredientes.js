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
        `;
        tablaIngredientes.appendChild(tr);
    });
});
