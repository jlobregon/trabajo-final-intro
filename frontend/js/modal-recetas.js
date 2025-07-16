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
                        modal.dataset.recetaId = receta.id;
                        openModal(modal);
                    }
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
            }
        });
    });

    document.getElementById('boton-borrar-receta').addEventListener('click', () => {
    const recetaId = document.getElementById('modal-receta').dataset.recetaId;
        if (recetaId) {
            fetch(`http://localhost:3000/api/v1/recetas/${recetaId}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (!response.ok) throw new Error('Error al eliminar la receta');
                closeAllModals();
                location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('No se pudo eliminar la receta. Inténtalo de nuevo más tarde.');
            });
        }
    });

    document.getElementById('boton-editar-receta').addEventListener('click', () => {
        const recetaId = document.getElementById('modal-receta').dataset.recetaId;
        if (recetaId) {
            window.location.href = `editar-receta.html?id=${recetaId}`;
        } else {
            alert('No se pudo obtener el ID de la receta para editar.');
        }
    });
}

export { modalesRecetas };