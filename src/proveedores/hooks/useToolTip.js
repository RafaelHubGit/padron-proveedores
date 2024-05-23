import { useEffect } from "react";


export const useToolTip = () => {
    useEffect(() => {
        // Habilitar tooltips solo si tienen contenido en el atributo 'title'
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          // Obtener el atributo 'title' y verificar si es no nulo y no vacío
          const title = tooltipTriggerEl.getAttribute('title');
          if (title && title.trim()) {  // Verifica si el título no es nulo y tiene contenido
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
          }
        });
    }, []);
}
