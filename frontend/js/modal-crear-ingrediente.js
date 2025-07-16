function modalCrearIngrediente(){
        const modalTitulo = document.getElementById('modal-crear-ingrediente-titulo');
        const modalCuerpo = document.getElementById('modal-crear-ingrediente-cuerpo');
        
        function openModal($el) {
            $el.classList.add('is-active');
        }

        function closeModal($el) {
            $el.classList.remove('is-active');
        }

        function closeAllModals() {
            document.querySelectorAll('.modal').forEach(modal => closeModal(modal));
        }

        document.addEventListener('click', (event) => {
            const trigger = event.target.closest('.js-modal-trigger');
            if (trigger) {
                const modalId = trigger.dataset.target;
                const modal = document.getElementById(modalId);
                if (modal) {
                    modalTitulo.textContent = 'Creación de Ingrediente';
                    modalCuerpo.innerHTML = `
                        <form id="form-crear-ingrediente">
                            <div class="field">
                                <label class="label">Nombre</label>
                                <div class="control">
                                    <input class="input" maxlength="80" type="text" name="nombre" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Categoría</label>
                                <div class="control">
                                    <input class="input" maxlength="50" type="text" name="categoria">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Calorías Aproximadas</label>
                                <div class="control">
                                    <input class="input" type="number" name="calorias_aprox" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Unidad de Medida</label>
                                <div class="control">
                                    <input class="input" type="text" name="unidad_medida" maxlength="30" placeholder="Por ejemplo gramos, kilos, etc">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox" name="es_vegano"> ¿Es Vegano?
                                </label>
                            </div>
                            <button type="submit" class="button is-success" id="crear-ingrediente">Crear Ingrediente</button>
                        </form>
                    `;
                    openModal(modal);

                    document.getElementById('form-crear-ingrediente').addEventListener('submit', (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.target);
                        const formDataObj = {};
                        formData.forEach((value, key) => (formDataObj[key] = value));
                        formDataObj.es_vegano = formDataObj.es_vegano === 'on';
                        console.log('Datos del formulario:', formDataObj);

                        fetch('http://localhost:3000/api/v1/ingredientes', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formDataObj)
                        }).then(response => {
                            if (response.ok) {
                                closeModal(modal);
                                alert('Ingrediente creado exitosamente.');
                                location.reload();
                            } else {
                                throw new Error('Error al crear el ingrediente.');
                            }
                        })
                    });
                }
            }

            if (
                event.target.matches('.modal-background') ||
                event.target.matches('.modal-close') ||
                event.target.matches('.modal-card-head .delete')
            ){
                const modal = event.target.closest('.modal');
                closeModal(modal);
            }

            document.addEventListener('keydown', (event) => {
                if (event.key === "Escape") {
                closeAllModals();
            }}
        );
    });
}

function modalEditarIngrediente(ingredientes){
        const modalTitulo = document.getElementById('modal-editar-ingrediente-titulo');
        const modalCuerpo = document.getElementById('modal-editar-ingrediente-cuerpo');
        
        function openModal($el) {
            $el.classList.add('is-active');
        }

        function closeModal($el) {
            $el.classList.remove('is-active');
        }

        function closeAllModals() {
            document.querySelectorAll('.modal').forEach(modal => closeModal(modal));
        }

        document.addEventListener('click', (event) => {
            console.log("se abrio el modal");
            const trigger = event.target.closest('.js-modal-trigger');
            if (trigger) {
                console.log("hay trigger");
                const modalId = trigger.dataset.target;
                const ingredienteId = trigger.dataset.ingredienteId;
                const modal = document.getElementById(modalId);
                if (ingredienteId && modal) {
                    console.log("hay ingredienteId y modal");
                    const ingrediente = ingredientes.find(i => i.id == ingredienteId);
                    if (ingrediente) {
                        modalTitulo.textContent = 'Editando ingrediente: ' + ingrediente.nombre;
                        modalCuerpo.innerHTML = `
                            <form id="form-editar-ingrediente">
                                <div class="field">
                                    <label class="label">Nombre</label>
                                    <div class="control">
                                        <input value="${ingrediente.nombre}" class="input" maxlength="80" type="text" name="nombre" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Categoría</label>
                                    <div class="control">
                                        <input value="${ingrediente.categoria}" class="input" maxlength="50" type="text" name="categoria">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Calorías Aproximadas</label>
                                    <div class="control">
                                        <input value="${ingrediente.calorias_aprox}" class="input" type="number" name="calorias_aprox" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Unidad de Medida</label>
                                    <div class="control">
                                        <input value="${ingrediente.unidad_medida}" class="input" type="text" name="unidad_medida" maxlength="30" placeholder="Por ejemplo gramos, kilos, etc">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="checkbox">
                                        <input type="checkbox" name="es_vegano"> ¿Es Vegano?
                                    </label>
                                </div>
                                <button type="submit" class="button is-success" id="editar-ingrediente">Guardar cambios</button>
                            </form>
                        `;
                        openModal(modal);
    
                        document.getElementById('form-editar-ingrediente').addEventListener('submit', (event) => {
                            event.preventDefault();
                            const formData = new FormData(event.target);
                            const formDataObj = {};
                            formData.forEach((value, key) => (formDataObj[key] = value));
                            formDataObj.es_vegano = formDataObj.es_vegano === 'on';
                            console.log('Datos del formulario:', formDataObj);
    
                            fetch(`http://localhost:3000/api/v1/ingredientes/${ingredienteId}`, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(formDataObj)
                            }).then(response => {
                                if (response.ok) {
                                    closeModal(modal);
                                    alert('Cambios guardados exitosamente.');
                                    location.reload();
                                } else {
                                    throw new Error('Error al editar el ingrediente.');
                                }
                            })
                        });
                    }
                }
            }

            if (
                event.target.matches('.modal-background') ||
                event.target.matches('.modal-close') ||
                event.target.matches('.modal-card-head .delete') ||
                event.target.matches('.modal-card-foot button')
            ){
                const modal = event.target.closest('.modal');
                closeModal(modal);
            }

            document.addEventListener('keydown', (event) => {
                if (event.key === "Escape") {
                closeAllModals();
            }}
        );
    });
}

export { modalCrearIngrediente, modalEditarIngrediente };