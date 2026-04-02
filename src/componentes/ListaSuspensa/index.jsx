import './lista-suspensa.estilos.css'

//exemplo interessante de como fazer um item que pode ser nulo com o operador ?
export function ListaSuspensa (props) {
    return (
        <>
            <label className='label-lista'>{props.label}</label>
            <select className='lista-suspensa' defaultValue={props.defaultValue} name={props.name} tipo={props.tipo} onChange={(e) => props.setTipo?.(e.target.value)}>
                <option value="" disabled>Selecione uma opção</option>
                {props.itens.map(item => <option key={item.id} >{item.nome}</option>)}
            </select>
        </>
    )
}