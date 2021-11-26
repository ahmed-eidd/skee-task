import { toast } from 'react-toastify';

export const customToast = (msg) => {
  toast.success(msg, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  });
};
