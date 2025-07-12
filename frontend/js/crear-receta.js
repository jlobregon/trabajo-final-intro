fetch('http://localhost:3000/api/v1/chefs').then(result => result.json())
.then(chefs => {
    const selectChefs = document.getElementById('chef-receta-nueva');

    chefs.forEach(chef => {
        const newOption = document.createElement('option');
        newOption.value = chef.id;
        newOption.textContent = chef.nombre;
        selectChefs.appendChild(newOption);
    });
})