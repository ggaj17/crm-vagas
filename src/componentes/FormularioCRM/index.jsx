import CurrencyInput from 'react-currency-input-field';
import { useState } from 'react'
import { CampoFormulario } from '../CampoFormulario'
import { Label } from '../Label'
import { Titulo } from '../Titulo'
import { CampoEntrada } from '../CampoEntrada'
import { Botao } from '../Botao'
import './formulario-crm.estilo.css'
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioCRM () {

  const [value, setValue] = useState(10000);

  const vagas = [
    {
      nome: 'Desenvolvedor Front-end',
      id: 1
    },
    {
      nome: 'Desenvolvedor Back-end',
      id: 2
    },
    {
      nome: 'Desenvolvedor Full Stack',
      id: 3
    }
  ];

  const senoridade = [
    {
      nome: 'Júnior',
      id: 1
    },
    {
      nome: 'Pleno',
      id: 2
    },
    {
      nome: 'Sênior',
      id: 3
    }
  ];

  const tipo = [
    {
      nome: 'Presencial',
      id: 1
    },
    {
      nome: 'Remoto',
      id: 2
    },
    {
      nome: 'Híbrido',
      id: 3
    }
  ];

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
                <Label htmlFor="empresa">Qual é o nome da empresa?</Label>
                <CampoEntrada type="text" id='empresa'placeholder='Adicione a empresa'/>
            </div>
            <div className='itens-form'>
                <ListaSuspensa label='Qual é a stack da vaga?' itens={vagas} default={vagas[2].id} />
            </div>
            <div className='itens-form'>
                <ListaSuspensa label='Qual é o nível da vaga?' itens={senoridade} default={senoridade[0]} />
            </div>
            <div className='itens-form'>
                <ListaSuspensa label='Qual é o tipo da vaga?' itens={tipo} default={tipo[0].id} />
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