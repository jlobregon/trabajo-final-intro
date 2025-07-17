const URLParams = new URLSearchParams(window.location.search);
const recetaID = URLParams.get("id");
if (!recetaID) {
    alert('Error al cargar la receta. Inténtalo de nuevo.');
    location.href = "http://localhost:8080/404.html";
}

const chefsPromise = fetch('http://localhost:3000/api/v1/chefs').then(result => result.json())
.then(chefs => {
    const selectChefs = document.getElementById('chef-receta');

    chefs.forEach(chef => {
        const newOption = document.createElement('option');
        newOption.value = chef.id;
        newOption.textContent = chef.nombre;
        selectChefs.appendChild(newOption);
    });
});

const ingredientesPromise = fetch('http://localhost:3000/api/v1/ingredientes').then(result => result.json())
.then(data => {
    return data.sort((a, b) => a.nombre.localeCompare(b.nombre));
})
.then(ingredientes => {
    const selectIngredientes = document.getElementById('ingredientes-receta');

    ingredientes.forEach(ingrediente => {
        const newOption = document.createElement('option');
        newOption.value = ingrediente.id;
        newOption.textContent = ingrediente.nombre;
        newOption.dataset.unidad = ingrediente.unidad_medida;
        selectIngredientes.appendChild(newOption);
    });
});

document.getElementById('agregar-ingrediente').addEventListener('click', () => {
    const selectIngredientes = document.getElementById('ingredientes-receta');
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

document.getElementById('form-editar-receta').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ingredientesList = document.getElementById('ingredientes-lista');
    const ingredientes = [];

    if (ingredientesList.querySelectorAll('li').length === 0) {
        alert('Debes agregar al menos un ingrediente.');
        return;
    }

    ingredientesList.querySelectorAll('li').forEach(item => {
        const idIngrediente = parseInt(item.dataset.idIngrediente);
        const cantidad = parseInt(item.querySelector('input[type="number"]').value);
        ingredientes.push({ id: idIngrediente, cantidad: cantidad });
    });

    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    formDataObj.ingredientes = ingredientes;
    console.log('Datos del formulario:', formDataObj);

    fetch(`http://localhost:3000/api/v1/recetas/${recetaID}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response);
        }
        return response.json()
    })
    .then(data => {
        console.log('Receta editada:', data);
        alert('Receta editada exitosamente');
        location.href = 'http://localhost:8080/';
    })
    .catch(error => {
        console.error('Error al editar la receta:', error);
        alert('Error al editar la receta. Inténtalo de nuevo.');
    });
});

Promise.all([chefsPromise, ingredientesPromise])
.then(() => {
    return fetch(`http://localhost:3000/api/v1/recetas/${recetaID}`);
}).then(result => {
    if (!result.ok) {
        throw new Error(result);
    }
    return result.json();
})
.then(receta => {
    document.getElementById('nombre-receta').value = receta.nombre;
    document.getElementById('descripcion-receta').value = receta.descripcion;
    document.getElementById('tiempo-preparacion').value = receta.tiempo_estimado;
    document.getElementById('dificultad-receta').querySelectorAll('input[type="radio"]').forEach(radio => {
        if (parseInt(radio.value) === receta.nivel_dificultad) {
            radio.checked = true;
        }
    });
    document.getElementById('categoria-receta').value = receta.categoria;
    document.getElementById('imagen-receta').value = receta.imagen_url;
    document.getElementById('chef-receta').querySelectorAll('option').forEach(chef => {
        if (parseInt(chef.value) === receta.chef_id) {
            chef.selected = true;
        }
    });
    const ingredientesList = document.getElementById('ingredientes-lista');
    receta.ingredientes.forEach(ingrediente => {
        const newItem = document.createElement('li');
        const name = document.createElement('span');
        name.textContent = ingrediente.nombre_ingrediente;
        newItem.appendChild(name);
        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.min = '1';
        cantidadInput.placeholder = 'Cantidad';
        cantidadInput.value = ingrediente.cantidad_ingredientes;
        newItem.appendChild(cantidadInput);
        const unidadSpan = document.createElement('span');
        unidadSpan.textContent = ingrediente.unidad_medida;
        newItem.appendChild(unidadSpan);
        newItem.dataset.idIngrediente = ingrediente.ingrediente_id;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.type = 'button';
        botonEliminar.addEventListener('click', () => {
            ingredientesList.removeChild(newItem);
        });
        botonEliminar.classList.add('button', 'is-danger', 'is-small');
        newItem.appendChild(botonEliminar);
        ingredientesList.appendChild(newItem);
    });
}).catch(error => {
    console.error('Error al obtener la receta:', error);
    alert('Error al cargar la receta. Inténtalo de nuevo.');
    location.href = "http://localhost:8080/404.html";
});