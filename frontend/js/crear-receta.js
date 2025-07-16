fetch('http://localhost:3000/api/v1/chefs').then(result => result.json())
.then(chefs => {
    const selectChefs = document.getElementById('chef-receta-nueva');

    chefs.forEach(chef => {
        const newOption = document.createElement('option');
        newOption.value = chef.id;
        newOption.textContent = chef.nombre;
        selectChefs.appendChild(newOption);
    });
});

fetch('http://localhost:3000/api/v1/ingredientes').then(result => result.json())
.then(ingredientes => {
    const selectIngredientes = document.getElementById('ingredientes-receta-nueva');

    ingredientes.forEach(ingrediente => {
        const newOption = document.createElement('option');
        newOption.value = ingrediente.id;
        newOption.textContent = ingrediente.nombre;
        newOption.dataset.unidad = ingrediente.unidad_medida;
        selectIngredientes.appendChild(newOption);
    });
});

document.getElementById('agregar-ingrediente').addEventListener('click', () => {
    const selectIngredientes = document.getElementById('ingredientes-receta-nueva');
    const ingredienteSeleccionado = selectIngredientes.value;
    const ingredientesList = document.getElementById('ingredientes-lista');

    if (ingredienteSeleccionado) {
        const newItem = document.createElement('li');
        const name = document.createElement('span');
        name.textContent = selectIngredientes.options[selectIngredientes.selectedIndex].text;
        newItem.appendChild(name);
        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.min = '1';
        cantidadInput.placeholder = 'Cantidad';
        cantidadInput.value = '1';
        newItem.appendChild(cantidadInput);
        const unidadSpan = document.createElement('span');
        unidadSpan.textContent = selectIngredientes.options[selectIngredientes.selectedIndex].dataset.unidad;
        newItem.appendChild(unidadSpan);
        newItem.dataset.idIngrediente = ingredienteSeleccionado;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.type = 'button';
        botonEliminar.addEventListener('click', () => {
            ingredientesList.removeChild(newItem);
        });
        botonEliminar.classList.add('button', 'is-danger', 'is-small');
        newItem.appendChild(botonEliminar);
        ingredientesList.appendChild(newItem);
        selectIngredientes.value = '';
    }
});

document.getElementById('form-crear-receta').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ingredientesList = document.getElementById('ingredientes-lista');
    const ingredientes = [];

    ingredientesList.querySelectorAll('li').forEach(item => {
        const idIngrediente = parseInt(item.dataset.idIngrediente);
        const cantidad = parseInt(item.querySelector('input[type="number"]').value);
        ingredientes.push({ id: idIngrediente, cantidad: cantidad });
    });

    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    formDataObj.ingredientes = ingredientes;

    fetch('http://localhost:3000/api/v1/recetas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Receta creada:', data);
        alert('Receta creada exitosamente');
    })
    .catch(error => {
        console.error('Error al crear la receta:', error);
        alert('Error al crear la receta. Inténtalo de nuevo.');
    });
});
