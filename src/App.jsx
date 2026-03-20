import './App.css'
import { useState } from 'react'
import { Dialog } from "./componentes/Dialog";
import { ListaCards } from './componentes/ListaCards'
import { FormularioCRM } from './componentes/FormularioCRM'

function App() {
  
  const [cards, setCards] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [fecharDialog, setFecharDialog] = useState(false);

  function addCards (card) {
    setCards([...cards, card]);
  }

  function aoFormularioSubmetido (formData) {
    //formData é o valor padrão do formulario ao ser submetido.
    //Deixei da forma mais verbosa e também reduzida de selecionar um objeto com o select para ter as duas opcoes como exemplos posteriores. O ideal nesse caso sempre será pelo ID!! TROCAR!!! Elevar o estado do card tambem
      const card = {
        nome: formData.get('nome') || 'Sem nome da vaga definida',
        empresa: formData.get('empresa') || 'Sem empresa definida',
        vaga: vagas.find(function(vaga) {
          return vaga.nome === formData.get('vaga')
          }) || {},
        senoridade: senoridade.find(function(senioridadeItem) {
          return senioridadeItem.nome === formData.get('senoridade') //mais verbosa
        }) || {},
        tipo: tipo.find(t => t.nome === formData.get('tipo')) || {}, //menos verbosa
        dias: dias.find(d => d.nome === formData.get('dias')) || {},
        etapa: etapa.find(e => e.nome === formData.get('etapa')) || {},
        salario: formData.get('salario') || '00,00',
        data_criacao_card: new Date().toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'}),
          deadline: formData.get('data').split('-').reverse().join('/') || '31/12/2026'// forma interessante de transformar a data do formato yyyy-mm-dd para dd/mm/yyyy
      }
      
      addCards(card);
      setFecharDialog(true);
   }
  
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
    },
    {
      nome: 'Analista de QA',
      id: 4
    },
    {
      nome: 'Analista de DevOps',
      id: 5
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
    },
    {
      nome: 'Especialista',
      id: 4
    },
    {
      nome: 'Tech Lead',
      id: 5
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

  const dias = [
    {
      nome: '1 dia',
      id: 1
    },
    {
      nome: '2 dias',
      id: 2
    },
    {
      nome: '3 dias',
      id: 3
    },
    {
      nome: '4 dias',
      id: 4
    },
    {
      nome: '5 dias',
      id: 5
    }
  ];

  const etapa = [
    {
      nome: 'Análise de currículo',
      id: 1
    },
    {
      nome: 'Entrevista com RH',
      id: 2
    },
    {
      nome: 'Entrevista técnica',
      id: 3
    },
    {
      nome: 'Aguardando resposta',
      id: 4
    },
    {
      nome: 'Rejeitado',
      id: 5
    },
    {
      nome: 'Aprovado',
      id: 6
    }
  ];

  return (
    <main>
      <div className='titulo'>
      <span className='titulo-projeto'>Projeto CRM Vagas</span>
        <Dialog
          fecharDialog={fecharDialog}>
            <FormularioCRM
                    vagas={vagas}
                    senoridade={senoridade}
                    tipo={tipo}
                    dias={dias}
                    etapa={etapa}
                    tipoSelecionado={tipoSelecionado}
                    setTipoSelecionado={setTipoSelecionado}
                    aoFormularioSubmetido={aoFormularioSubmetido}
                />
          </Dialog>
        </div>
        <ListaCards cards={cards} />
    </main>
  )
}

export default App
