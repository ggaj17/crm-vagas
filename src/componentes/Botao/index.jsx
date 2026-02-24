import './botao.estilo.css'

export function Botao ({ children, onClick }) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}