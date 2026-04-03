import { CampoFormulario } from '../CampoFormulario'
import { Label } from '../Label'
import { Titulo } from '../Titulo'
import { CampoEntrada } from '../CampoEntrada'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa';
import './formulario-crm.estilo.css'

export function FormularioCRM({
  vagas, valorVaga,
  senoridade, valorSenoridade,
  tipo, valorTipo,
  dias, valorDias,
  etapa, valorEtapa,
  tipoSelecionado, setTipoSelecionado,
  aoFormularioSubmetido, acao,
  nome = '', empresa = '', salario = '', deadline = '', id = ''
}) {
  return (
    <form action={aoFormularioSubmetido} className='form-crm'>
      <CampoFormulario>
        <Titulo>Preencha para criar um Card para o CRM</Titulo>
        <div className='container-form'>
          <div className='itens-form'>
            <Label htmlFor="nome">Qual é o nome da vaga?</Label>
            <CampoEntrada type="text" id='nome' name='nome' defaultValue={nome} placeholder='Adicione a vaga' />
          </div>
          <div className='itens-form'>
            <Label htmlFor="empresa">Qual é o nome da empresa?</Label>
            <CampoEntrada type="text" id='empresa' name='empresa' defaultValue={empresa} placeholder='Adicione a empresa' />
          </div>
          <div className='itens-form'>
            <ListaSuspensa
              label='Qual é a stack da vaga?'
              itens={vagas}
              name='vaga'
              defaultValue={valorVaga?.nome || ''}
            />
          </div>
          <div className='itens-form'>
            <ListaSuspensa
              label='Qual é o nível da vaga?'
              itens={senoridade}
              name='senoridade'
              defaultValue={valorSenoridade?.nome || ''}
            />
          </div>
          <div className='itens-form'>
            <ListaSuspensa
              label='Qual é o tipo da vaga?'
              itens={tipo}
              name='tipo'
              defaultValue={valorTipo?.nome || ''}
              aoAlterar={setTipoSelecionado}
            />
          </div>
          {tipoSelecionado === 'Híbrido' && (
            <div className='itens-form'>
              <ListaSuspensa
                label='Quantos dias de home office?'
                itens={dias}
                name='dias'
                defaultValue={valorDias?.nome || ''}
              />
            </div>
          )}
          <div className='itens-form'>
            <Label htmlFor="salario">Qual é o salário da vaga?</Label>
            <CampoEntrada type="text" id='salario' name='salario' defaultValue={salario} placeholder='10.000,00' />
          </div>
          <div className='itens-form'>
            <Label htmlFor="data">Qual a deadline da vaga?</Label>
            <CampoEntrada type="date" id='data' name='data' defaultValue={deadline} placeholder='30/02/2026' />
          </div>
          <div className='itens-form'>
            <ListaSuspensa
              label='Está em qual etapa da vaga?'
              itens={etapa}
              name='etapa'
              defaultValue={valorEtapa?.nome || ''}
            />
          </div>
          <input type="hidden" name="acao" value={acao} />
          <input type="hidden" name="id" value={id} />
          <Botao>{acao === 'editar' ? 'Editar Vaga' : 'Adicionar Vaga'}</Botao>
        </div>
      </CampoFormulario>
    </form>
  )
}