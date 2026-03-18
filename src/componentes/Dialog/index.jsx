import { useRef } from 'react';
import './dialog.estilo.css';

export function Dialog({children, fecharDialog}) {

   const dialogRef = useRef(null);
   const openDialog = () => dialogRef.current.showModal();
   const closeDialog = () =>  dialogRef.current.close();

   if (fecharDialog) {
    closeDialog();
   }

    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus className='botao-fechar' onClick={closeDialog}>X</button>
                {children}
            </dialog>
            <button onClick={openDialog}>Adicionar Card</button>
        </>
    )
}