import './App.css'
import { useState, useRef } from 'react'
import { Dialog } from "./componentes/Dialog";
import { ListaCards } from './componentes/ListaCards'
import { FormularioCRM } from './componentes/FormularioCRM'

function App() {
  const [cards, setCards] = useState([]);
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const idRef = useRef(1); //Gerador de IDS apenas enquanto não tiver backend

  function addCards(card) {
    setCards([...cards, card]);
    idRef.current++;
  }

  function updateCard(cardAtualizado) {
    setCards(prevCards => prevCards.map(c => c.id === cardAtualizado.id ? cardAtualizado : c));
  }

  const excluirCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  }

  function aoFormularioSubmetido(formData) {
    let idCard = formData.get('id');
    idCard = idCard === '' ? idRef.current : parseInt(idCard);

    const card = {
      id: idCard,
      nome: formData.get('nome') || 'Nome Indefinido',
      empresa: formData.get('empresa') || 'Empresa Indefinida',
      vaga: vagas.find(v => v.nome === formData.get('vaga')) || {},
      senoridade: senoridade.find(s => s.nome === formData.get('senoridade')) || {},
      tipo: tipo.find(t => t.nome === formData.get('tipo')) || {},
      dias: dias.find(d => d.nome === formData.get('dias')) || {},
      etapa: etapa.find(e => e.nome === formData.get('etapa')) || {},
      salario: formData.get('salario') || '00,00',
      data_criacao_card: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      deadline: formData.get('data') ? formData.get('data').split('-').reverse().join('/') : '31/12/2026'
    };

    if (formData.get('acao') === 'adicionar') {
      addCards(card);
      setIsOpenAdd(false);
    } else {
      updateCard(card);
      // O fechamento do dialog de edição será controlado dentro do ListaCards
    }
  }

  const vagas = [
    { nome: 'Desenvolvedor Front-end', id: 1 },
    { nome: 'Desenvolvedor Back-end', id: 2 },
    { nome: 'Desenvolvedor Full Stack', id: 3 },
    { nome: 'Analista de QA', id: 4 },
    { nome: 'Analista de DevOps', id: 5 }
  ];

  const senoridade = [
    { nome: 'Júnior', id: 1 },
    { nome: 'Pleno', id: 2 },
    { nome: 'Sênior', id: 3 },
    { nome: 'Especialista', id: 4 },
    { nome: 'Tech Lead', id: 5 }
  ];

  const tipo = [
    { nome: 'Presencial', id: 1 },
    { nome: 'Remoto', id: 2 },
    { nome: 'Híbrido', id: 3 }
  ];

  const dias = [
    { nome: '1 dia', id: 1 },
    { nome: '2 dias', id: 2 },
    { nome: '3 dias', id: 3 },
    { nome: '4 dias', id: 4 },
    { nome: '5 dias', id: 5 }
  ];

  const etapa = [
    { nome: 'Análise de currículo', id: 1 },
    { nome: 'Entrevista com RH', id: 2 },
    { nome: 'Entrevista técnica', id: 3 },
    { nome: 'Aguardando resposta', id: 4 },
    { nome: 'Rejeitado', id: 5 },
    { nome: 'Aprovado', id: 6 }
  ];

  return (
    <main>
      <div className='titulo'>
        <span className='titulo-projeto'>Projeto CRM Vagas</span>
        <button onClick={() => setIsOpenAdd(true)}>Adicionar Cards</button>
        <Dialog isOpen={isOpenAdd} onClose={() => setIsOpenAdd(false)} titulo={'Adicionar Cards'}>
          <FormularioCRM
            vagas={vagas}
            senoridade={senoridade}
            tipo={tipo}
            dias={dias}
            etapa={etapa}
            tipoSelecionado={tipoSelecionado}
            setTipoSelecionado={setTipoSelecionado}
            aoFormularioSubmetido={aoFormularioSubmetido}
            acao={'adicionar'}
          />
        </Dialog>
      </div>

      <ListaCards
        cards={cards}
        excluirCard={excluirCard}
        aoFormularioSubmetido={aoFormularioSubmetido}
        vagas={vagas}
        senoridade={senoridade}
        tipo={tipo}
        dias={dias}
        etapa={etapa}
        tipoSelecionado={tipoSelecionado}
        setTipoSelecionado={setTipoSelecionado}
      />
    </main>
  )
}

export default App