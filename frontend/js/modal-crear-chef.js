const parametro = new URLSearchParams(window.location.search);
const chefId = parametro.get("id");

function modalCrearChef(){
        const modalTitulo = document.getElementById('modal-crear-chef-titulo');
        const modalCuerpo = document.getElementById('modal-crear-chef-cuerpo');
        
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
                    modalTitulo.textContent = 'Registro de nuevo chef';
                    modalCuerpo.innerHTML = `
                        <form id="form-crear-chef">
                            <div class="field">
                                <label class="label">Nombre<span class="required">*</span></label>
                                <div class="control">
                                    <input class="input" maxlength="80" type="text" name="nombre" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Acerca de</label>
                                <div class="control">
                                    <input class="input" maxlength="200" type="text" name="acerca_de">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Especialidad</label>
                                <div class="control">
                                    <input class="input" maxlength="50" type="text" name="especialidad">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Localidad<span class="required">*</span></label>
                                <div class="control">
                                    <input class="input" maxlength="50" type="text" name="localidad" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Imagen (URL)</label>
                                <div class="control">
                                    <input class="input" type="text" name="imagen_url">
                                </div>
                            </div>
                            <button type="submit" class="button is-success" id="crear-chef">Crear chef</button>
                        </form>
                    `;
                    openModal(modal);

                    document.getElementById('form-crear-chef').addEventListener('submit', (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.target);
                        const formDataObj = {};
                        formData.forEach((value, key) => (formDataObj[key] = value));
                        console.log('Datos del formulario:', formDataObj);

                        fetch('http://localhost:3000/api/v1/chefs', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formDataObj)
                        }).then(response => {
                            if (response.ok) {
                                closeModal(modal);
                                alert('chef creado exitosamente.');
                                location.reload();
                            } else {
                                throw new Error('Error al crear el chef.');
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

function modalEditarChef(chef){
        const modalTitulo = document.getElementById('modal-editar-chef-titulo');
        const modalCuerpo = document.getElementById('modal-editar-chef-cuerpo');
        
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
                const modal = document.getElementById(modalId);
                if (chefId && modal) {
                    console.log("hay chefId y modal");
                    if (chef) {
                        modalTitulo.textContent = 'Editando chef: ' + chef.nombre;
                        modalCuerpo.innerHTML = `
                            <form id="form-editar-chef">
                                <div class="field">
                                    <label class="label">Nombre<span class="required">*</span></label>
                                    <div class="control">
                                        <input value="${chef.nombre}" class="input" maxlength="80" type="text" name="nombre" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Categoría</label>
                                    <div class="control">
                                        <input value="${chef.acerca_de}" class="input" maxlength="200" type="text" name="acerca_de">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Especialidad</label>
                                    <div class="control">
                                        <input value="${chef.especialidad}" class="input" maxlength="50" type="text" name="especialidad">
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Localidad<span class="required">*</span></label>
                                    <div class="control">
                                        <input value="${chef.localidad}" class="input" maxlength="50" type="text" name="localidad" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Imagen</label>
                                    <div class="control">
                                        <input value="${chef.imagen_url}" class="input" type="text" name="imagen_url">
                                    </div>
                                </div>
                                <button type="submit" class="button is-success" id="editar-chef">Guardar cambios</button>
                            </form>
                        `;
                        openModal(modal);
    
                        document.getElementById('form-editar-chef').addEventListener('submit', (event) => {
                            event.preventDefault();
                            const formData = new FormData(event.target);
                            const formDataObj = {};
                            formData.forEach((value, key) => (formDataObj[key] = value));
                            console.log('Datos del formulario:', formDataObj);
    
                            fetch(`http://localhost:3000/api/v1/chefs/${chefId}`, {
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
                                    throw new Error('Error al editar el chef.');
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

export { modalCrearChef, modalEditarChef };