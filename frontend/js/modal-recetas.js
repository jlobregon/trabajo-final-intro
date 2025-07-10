function modalesRecetas(recetas){
        const modalTitulo = document.getElementById('modal-titulo');
        const modalCuerpo = document.getElementById('modal-cuerpo');
        
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
                const recetaId = trigger.dataset.recetaId;
                const modal = document.getElementById(modalId);

                if (recetaId && modal) {
                    const receta = recetas.find(r => r.id == recetaId);
                    if (receta) {
                        modalTitulo.textContent = receta.nombre;
                        modalCuerpo.innerHTML = `
                            <img src="${receta.imagen_url || 'img/receta-default.jpg'}"
                                style="width: 100%; max-height: 300px; object-fit: cover;" class="mb-3">
                            <p><strong>Descripción:</strong> ${receta.descripcion || 'Sin descripción.'}</p>
                        `;
                        openModal(modal);
                    }
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

    document.getElementById('toggle-filtros').addEventListener('click', () => {
    const filtros = document.getElementById('filtros-avanzados');
    filtros.classList.toggle('is-hidden');
    });
}

export { modalesRecetas };