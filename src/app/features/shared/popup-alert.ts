import Swal from 'sweetalert2';

const TITLE_ERROR = 'Error';
const TITLE_INFO = 'Importante';
const TITLE_OK = 'Ok';
const TITLE_SUCCESS = 'Exito';
const INVALID_OR_MISSING_FIELDS = 'Hay campos invalidos o faltantes por llenar, porfavor revisar!';
const CONTACT_SUPPORT = 'Algo salio mal, porfavor contacta a soporte!';
const ACCESS_DENIED = `No tienes permiso para este modulo, por favor revisar!`;



const show_popup = (title: string, message: string) => {
  return Swal.fire({
    title: title,
    confirmButtonText: 'OK',
    confirmButtonColor: '#4facff',
    customClass: {
      popup: 'sweet-customized-popup',
      actions: 'sweet-customized-actions',
      confirmButton: 'sweet-customized-confirm-button',
    },
    text: message,
  })
};

export {
  show_popup,
  TITLE_SUCCESS,
  TITLE_INFO,
  TITLE_ERROR,
  TITLE_OK,
  INVALID_OR_MISSING_FIELDS,
  CONTACT_SUPPORT,
  ACCESS_DENIED
}



