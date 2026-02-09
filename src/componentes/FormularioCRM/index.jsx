import CurrencyInput from 'react-currency-input-field';
import { useState } from 'react'
import { CampoFormulario } from '../CampoFormulario'
import { Label } from '../Label'
import { Titulo } from '../Titulo'
import { CampoEntrada } from '../CampoEntrada'
import { Botao } from '../Botao'
import './style.css'

export function FormularioCRM () {

  const [value, setValue] = useState(10000);

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
                <CurrencyInput
                    className='campo-dinehiro'
                    value={value}
                    onValueChange={(value) => setValue(value || 0)}
                    prefix="R$ "
                    decimalSeparator=","
                    groupSeparator="."
                    decimalsLimit={2}
                />
            </div>
            <Botao>Adicionar Vaga</Botao>
        </div>
        </CampoFormulario>
    </form>
  )
}