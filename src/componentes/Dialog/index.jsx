import { useRef } from 'react';
import './dialog.estilo.css';
import { FormularioCRM } from '../FormularioCRM'

export function Dialog({vagas, senoridade, tipo, salario, setSalario, addCards, dias, etapa, tipoSelecionado, setTipoSelecionado, handleClick, inputRef, fecharDialog}) {

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
                <FormularioCRM
                    vagas={vagas}
                    senoridade={senoridade}
                    tipo={tipo}
                    salario={salario}
                    setSalario={setSalario}
                    addCards={addCards}
                    dias={dias}
                    etapa={etapa}
                    tipoSelecionado={tipoSelecionado}
                    setTipoSelecionado={setTipoSelecionado}
                    handleClick={handleClick}
                    inputRef={inputRef}
                />
            </dialog>
            <button onClick={openDialog}>Adicionar Card</button>
        </>
    )
}