import './lista-suspensa.estilos.css'

export function ListaSuspensa (props) {
    return (
        <>
            <label className='label-lista'>{props.label}</label>
            <select className='lista-suspensa' defaultValue={props.default}>
                {props.itens.map(item => <option key={item.id}>{item.nome}</option>)}
            </select>
        </>
    )
}