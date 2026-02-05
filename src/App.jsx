import './App.css'
import { useState } from 'react'

function Titulo ({children}) {
  return (
    <h2>{children}</h2>
  )
}

function CampoFormulario ({children}) {
  return <fieldset>{children}</fieldset> //uma linha não precisa de parenteses
}

function Label ({children, htmlFor}) {
  return <label className='label' htmlFor={htmlFor}>{children}</label>
}

//interessante reparar como o spread consegue passar todos os elementos do input através da props. type, name e etc.
function CampoEntrada (props) {
  return (<input className='campo' {...props}></input>)
}

function FormularioCRM () {
  return (
    <form action="" className='form-crm'>
      <CampoFormulario>
        <Titulo>Preencha para criar um Card para o CRM</Titulo>
        <div className='container-form'>
          <div className='itens-form'>
            <Label htmlFor="nome">Qual é o nome da vaga?</Label>
            <CampoEntrada type="text" id='nome' placeholder='Adicione a vaga'/>
          </div>
          <div className='itens-form'> 
            <Label htmlFor="stack">Qual é a stack da vaga?</Label>
            <CampoEntrada type="text" id='stack' placeholder='Adicione a stack'/>
          </div>
          <div className='itens-form'>
            <Label htmlFor="salario">Qual é o salário da vaga?</Label>
            <CampoEntrada type="text" id='salario' placeholder='Adicione o valor do salário'/>
          </div>
        </div>
      </CampoFormulario>
    </form>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
        <main>
        <FormularioCRM></FormularioCRM>
        </main>
  )
}

export default App
