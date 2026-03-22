import { useImperativeHandle, useRef } from 'react';
import './dialog.estilo.css';

export function Dialog({children, ref, titulo}) {

   const dialogRef = useRef(null);
   const openDialog = () => dialogRef.current.showModal();
   const closeDialog = () =>  dialogRef.current.close();

    useImperativeHandle(ref, () => ({
            abrir: () => dialogRef.current?.showModal(),
            fechar: () => dialogRef.current?.close()
        }));

    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus className='botao-fechar' onClick={closeDialog}>X</button>
                {children}
            </dialog>
            <button onClick={openDialog}>{titulo}</button>
        </>
    )
}