import './style.css'

//interessante reparar como o spread consegue passar todos os elementos do input através da props como type, name e etc.
export function CampoEntrada (props) {
  return (<input className='campo' {...props}></input>)
}