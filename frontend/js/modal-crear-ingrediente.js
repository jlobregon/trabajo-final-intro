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
                                    <input class="input" maxlength="50" type="text" name="categoria" required>
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
                                    <input class="input" type="text" name="unidad_medida" maxlength="30" placeholder="Por ejemplo gramos, kilos, etc" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                    <input type="checkbox" name="es_vegano"> ¿Es Vegano?
                                </label>
                            </div>
                        </form>
                    `;
                    openModal(modal);
                }
            }

            if (
                event.target.matches('.modal-background') ||
                event.target.matches('.modal-close') ||
                event.target.matches('.modal-card-head .delete') ||
                event.target.matches('.modal-card-foot .button')
            ){
                const modal = event.target.closest('.modal');
                closeModal(modal);
            }

        document.addEventListener('keydown', (event) => {
            if (event.key === "Escape") {
            closeAllModals();
            }
        });
    });
}

export { modalCrearIngrediente };