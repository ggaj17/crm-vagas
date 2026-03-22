import { CampoFormulario } from '../CampoFormulario'
import { Label } from '../Label'
import { Titulo } from '../Titulo'
import { CampoEntrada } from '../CampoEntrada'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa';
import './formulario-editar-card.estilo.css'

export function FormularioEditarCard ({vagas, senoridade, tipo, dias, etapa, tipoSelecionado, setTipoSelecionado, aoFormularioSubmetido}) {

  return (
    <form action={aoFormularioSubmetido} className='form-crm'>
        {/* TEM QUE FAZER!! */}
        {/* <CampoFormulario>
        <Titulo>Preencha para criar um Card para o CRM</Titulo>
        <div className='container-form'>
            <div className='itens-form'>
                <Label htmlFor="nome">Qual é o nome da vaga?</Label>
                <CampoEntrada type="text" id='nome'name='nome' placeholder='Adicione a vaga'/>
            </div>
            <div className='itens-form'>
                <Label htmlFor="empresa">Qual é o nome da empresa?</Label>
                <CampoEntrada type="text" id='empresa'name='empresa'  placeholder='Adicione a empresa'/>
            </div>
            <div className='itens-form'>
                <ListaSuspensa label='Qual é a stack da vaga?' itens={vagas} name='vaga' />
            </div>
            <div className='itens-form'>
                <ListaSuspensa label='Qual é o nível da vaga?' itens={senoridade} name='senoridade' />
            </div>
            <div className='itens-form'>
                <ListaSuspensa label='Qual é o tipo da vaga?' itens={tipo} name='tipo' tipo={tipoSelecionado} setTipo={setTipoSelecionado} />
            </div>
            {tipoSelecionado === 'Híbrido' && <div className='itens-form'>
                <ListaSuspensa label='Quantos dias de home office?' itens={dias} name='dias' />
            </div>}
            <div className='itens-form'>
                <Label htmlFor="salario">Qual é o salário da vaga?</Label>
                <CampoEntrada type="text" id='salario'name='salario'  placeholder='10.000,00'/>
            </div>
            <div className='itens-form'>
                <Label htmlFor="data">Qual a deadline da vaga?</Label>
                <CampoEntrada type="date" id='data'name='data'  placeholder='30/02/2026'/>
            </div>
            <div className='itens-form'>
                <ListaSuspensa label='Está em qual etapa da vaga?' itens={etapa} name='etapa'/>
            </div>
            <Botao>Adicionar Vaga</Botao>
        </div>
        </CampoFormulario> */}
    </form>
  )
}