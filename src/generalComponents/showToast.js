import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export const showToast = (title = "No texto", icon = "error" ) => {
    Swal.fire({
        title: title,
        icon: icon,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });
}
