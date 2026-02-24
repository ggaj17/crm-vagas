import CurrencyInput from 'react-currency-input-field';
import { CampoFormulario } from '../CampoFormulario'
import { Label } from '../Label'
import { Titulo } from '../Titulo'
import { CampoEntrada } from '../CampoEntrada'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa';
import './formulario-crm.estilo.css'

export function FormularioCRM ({vagas, senoridade, tipo, salario, setSalario, addCards, dias, etapa, tipoSelecionado, setTipoSelecionado, handleClick, inputRef}) {

 function aoFormularioSubmetido (formData) {
  //formData é o valor padrão do formulario ao ser submetido.
  //Deixei da forma mais verbosa e também reduzida de selecionar um objeto com o select para ter as duas opcoes como exemplos posteriores. O ideal nesse caso sempre será pelo ID!! TROCAR!!! Elevar o estado do card tambem
    const card = {
      nome: formData.get('nome'),
      empresa: formData.get('empresa'),
      vaga: vagas.find(function(vaga) {
        return vaga.nome === formData.get('vaga') //mais verbosa
        }
      ),
      senoridade: senoridade.find(function(senioridadeItem) {
        return senioridadeItem.nome === formData.get('senoridade') //mais verbosa
      }),
      tipo: tipo.find(t => t.nome === formData.get('tipo')), //menos verbosa
      dias: dias.find(d => d.nome === formData.get('dias')),
      etapa: etapa.find(e => e.nome === formData.get('etapa')),
      salario: salario,
      data_criacao_card: new Date().toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'}),
        deadline: formData.get('data').split('-').reverse().join('/') // forma interessante de transformar a data do formato yyyy-mm-dd para dd/mm/yyyy
    }
    
    addCards(card);
 }

  return (
    <form action={aoFormularioSubmetido} className='form-crm'>
        <CampoFormulario>
        <Titulo>Preencha para criar um Card para o CRM</Titulo>
        <div className='container-form'>
            <div className='itens-form'>
                <Label htmlFor="nome">Qual é o nome da vaga?</Label>
                <CampoEntrada type="text" id='nome'name='nome' placeholder='Adicione a vaga' ref={inputRef}/>
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
                <CurrencyInput
                    className='campo-dinehiro'
                    value={salario}
                    onValueChange={(value) => setSalario(value || 0)}
                    prefix="R$ "
                    decimalSeparator=","
                    groupSeparator="."
                    decimalsLimit={2}
                />
            </div>
            <div className='itens-form'>
                <Label htmlFor="data">Qual a deadline da vaga?</Label>
                <CampoEntrada type="date" id='data'name='data'  placeholder='30/02/2026'/>
            </div>
            <div className='itens-form'>
                <ListaSuspensa label='Está em qual etapa da vaga?' itens={etapa} name='etapa'/>
            </div>
            <Botao onClick={handleClick}>Adicionar Vaga</Botao>
        </div>
        </CampoFormulario>
    </form>
  )
}