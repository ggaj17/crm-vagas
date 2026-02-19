import './lista-suspensa.estilos.css'

export function ListaSuspensa (props) {
    return (
        <>
            <label className='label-lista'>{props.label}</label>
            <select className='lista-suspensa' defaultValue="" name={props.name}>
                <option value="" disabled>Selecione uma opção</option>
                {props.itens.map(item => <option key={item.id}>{item.nome}</option>)}
            </select>
        </>
    )
}