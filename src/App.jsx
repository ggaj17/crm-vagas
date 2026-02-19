import './App.css'
import { useState } from 'react'
import { FormularioCRM } from './componentes/FormularioCRM'
import { ListaCards } from './componentes/ListaCards'

function App() {
  
  const [salario, setSalario] = useState(10000);
  const [cards, setCards] = useState([]);

  function addCards (card) {
    setCards([...cards, card]);
  }

  console.log('Cards criados:', cards);
  
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
    <main>
      <FormularioCRM
        vagas={vagas}
        senoridade={senoridade}
        tipo={tipo}
        salario={salario}
        setSalario={setSalario}
        addCards={addCards}
      />
      <ListaCards cards={cards} />
    </main>
  )
}

export default App
