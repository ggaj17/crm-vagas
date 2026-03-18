import './App.css'
import { useState, useRef } from 'react'
import { Dialog } from "./componentes/Dialog";
import { ListaCards } from './componentes/ListaCards'
import { FormularioCRM } from './componentes/FormularioCRM'

function App() {
  
  const [salario, setSalario] = useState(10000);
  const [cards, setCards] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const inputRef = useRef(null);
  const [fecharDialog, setFecharDialog] = useState(false);

  function handleClick() {
    inputRef.current.focus();
}

  function addCards (card) {
    setCards([...cards, card]);
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
                    salario={salario}
                    setSalario={setSalario}
                    addCards={addCards}
                    dias={dias}
                    etapa={etapa}
                    tipoSelecionado={tipoSelecionado}
                    setTipoSelecionado={setTipoSelecionado}
                    handleClick={handleClick}
                    inputRef={inputRef}
                />
          </Dialog>
        </div>
        <ListaCards cards={cards} />
    </main>
  )
}

export default App
