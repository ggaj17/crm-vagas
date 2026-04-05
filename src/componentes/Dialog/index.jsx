import { useImperativeHandle, useRef, useEffect } from 'react';
import './dialog.estilo.css';

export function Dialog({children, ref, titulo, isOpen = false, onClose}) {

   const dialogRef = useRef(null);
   const openDialog = () => dialogRef.current.showModal();
   const closeDialog = () => {
      dialogRef.current.close();
      onClose?.();
   };

    useImperativeHandle(ref, () => ({
            abrir: () => dialogRef.current?.showModal(),
            fechar: () => dialogRef.current?.close()
        }));

    useEffect(() => {
        if (isOpen) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [isOpen]);

    useEffect(() => {
        const dialogElement = dialogRef.current;
        
        if (dialogElement) {
            const handleCancel = (e) => {
                e.preventDefault();
                closeDialog();
            };
            dialogElement.addEventListener('cancel', handleCancel);
            return () => dialogElement.removeEventListener('cancel', handleCancel);
        }
    }, []);

    return (
        <dialog ref={dialogRef}>
            <button autoFocus className='botao-fechar' onClick={closeDialog}>X</button>
            {children}
        </dialog>
    )
}