import CurrencyInput from 'react-currency-input-field';
import { CampoFormulario } from '../CampoFormulario'
import { Label } from '../Label'
import { Titulo } from '../Titulo'
import { CampoEntrada } from '../CampoEntrada'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa';
import './formulario-crm.estilo.css'

export function FormularioCRM ({vagas, senoridade, tipo, salario, setSalario, addCards}) {

 function aoFormularioSubmetido (formData) {
  //formData é o valor padrão do formulario ao ser submetido.
  //Deixei da forma mais verbosa e também reduzida de selecionar um objeto com o select.
    const card = {
      nome: formData.get('nome'),
      empresa: formData.get('empresa'),
      vaga: vagas.find(function(vaga) {
        return vaga.nome === formData.get('vaga')
        }
      ),
      senoridade: senoridade.find(function(senioridadeItem) {
        return senioridadeItem.nome === formData.get('senoridade')
      }),
      tipo: tipo.find(t => t.nome === formData.get('tipo')),
      salario: salario,
      data_criacao_card: new Date().toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'})
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
                <ListaSuspensa label='Qual é o tipo da vaga?' itens={tipo} name='tipo' />
            </div>
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
            <Botao>Adicionar Vaga</Botao>
        </div>
        </CampoFormulario>
    </form>
  )
}