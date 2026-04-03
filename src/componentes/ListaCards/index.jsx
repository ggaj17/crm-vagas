import { useState } from 'react';
import './lista-cards.estilos.css';
import { Trash2 } from "lucide-react";
import { Dialog } from "../Dialog";
import { FormularioCRM } from '../FormularioCRM';

export function ListaCards({
  cards,
  excluirCard,
  aoFormularioSubmetido,
  vagas,
  senoridade,
  tipo,
  dias,
  etapa,
  tipoSelecionado,
  setTipoSelecionado
}) {
  const [cardEditando, setCardEditando] = useState(null); // guarda o card inteiro

  const handleEditarSubmit = (formData) => {
    aoFormularioSubmetido(formData);
    setCardEditando(null); // fecha o dialog
  };

  return (
    <section>
      {cards.map(card => (
        <div className='container-cards' key={card.id}>
          <div className='header-cards'>
            <span className='titulo-cards'>{card.nome}</span>
            <div className='container-botoes'>
              <button className='botao-editar' onClick={() => setCardEditando(card)}>
                Editar
              </button>
              <button className='botao-excluir' onClick={() => excluirCard(card.id)}>
                <Trash2 size={20} color="#eae8ee" />
              </button>
            </div>
          </div>
          <p>Empresa: {card.empresa}</p>
          <p>Cargo: {card.vaga.nome}</p>
          <p>Senoridade: {card.senoridade.nome}</p>
          <p>Modelo: {card.tipo.nome}</p>
          {card.tipo.nome === 'Híbrido' && <p>Dias de home office: {card.dias?.nome}</p>}
          <p>Remuneração: R$ {card.salario}</p>
          <p>Data Criação do card: {card.data_criacao_card}</p>
          <p>Deadline da vaga: {card.deadline}</p>
          <p>Etapa da vaga: {card.etapa.nome}</p>
        </div>
      ))}

      {cardEditando && (
        <Dialog
          isOpen={true}
          onClose={() => setCardEditando(null)}
          titulo="Editar Card"
        >
          <FormularioCRM
            vagas={vagas}
            valorVaga={cardEditando.vaga}
            senoridade={senoridade}
            valorSenoridade={cardEditando.senoridade}
            tipo={tipo}
            valorTipo={cardEditando.tipo}
            dias={dias}
            valorDias={cardEditando.dias}
            etapa={etapa}
            valorEtapa={cardEditando.etapa}
            nome={cardEditando.nome}
            empresa={cardEditando.empresa}
            salario={cardEditando.salario}
            deadline={cardEditando.deadline}
            tipoSelecionado={tipoSelecionado}
            setTipoSelecionado={setTipoSelecionado}
            id={cardEditando.id}
            aoFormularioSubmetido={handleEditarSubmit}
            acao="editar"
          />
        </Dialog>
      )}
    </section>
  );
}