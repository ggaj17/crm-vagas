import './lista-suspensa.estilos.css'

export function ListaSuspensa({ label, itens, name, defaultValue, aoAlterar }) {
  return (
    <>
      <label className='label-lista'>{label}</label>
      <select
        className='lista-suspensa'
        name={name}
        defaultValue={defaultValue}
        onChange={(e) => aoAlterar?.(e.target.value)}
      >
        <option value="" disabled>Selecione uma opção</option>
        {itens.map(item => (
          <option key={item.id} value={item.nome}>
            {item.nome}
          </option>
        ))}
      </select>
    </>
  )
}