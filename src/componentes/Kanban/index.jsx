import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import './kanban.styles.css';

const Kanban = ({ cards = [] }) => {
  const [boardData, setBoardData] = useState({
    'analise': {
      nome: 'Análise de currículo',
      cards: cards.filter(c => c.etapa?.nome === 'Análise de currículo')
    },
    'rh': {
      nome: 'Entrevista com RH',
      cards: cards.filter(c => c.etapa?.nome === 'Entrevista com RH')
    },
    'tecnica': {
      nome: 'Entrevista técnica',
      cards: cards.filter(c => c.etapa?.nome === 'Entrevista técnica')
    },
    'aguardando': {
      nome: 'Aguardando resposta',
      cards: cards.filter(c => c.etapa?.nome === 'Aguardando resposta')
    },
    'rejeitado': {
      nome: 'Rejeitado',
      cards: cards.filter(c => c.etapa?.nome === 'Rejeitado')
    },
    'aprovado': {
      nome: 'Aprovado',
      cards: cards.filter(c => c.etapa?.nome === 'Aprovado')
    }
  });

  // Sincronizar quando cards mudar
  React.useEffect(() => {
    setBoardData(prev => ({
      'analise': {
        ...prev['analise'],
        cards: cards.filter(c => c.etapa?.nome === 'Análise de currículo')
      },
      'rh': {
        ...prev['rh'],
        cards: cards.filter(c => c.etapa?.nome === 'Entrevista com RH')
      },
      'tecnica': {
        ...prev['tecnica'],
        cards: cards.filter(c => c.etapa?.nome === 'Entrevista técnica')
      },
      'aguardando': {
        ...prev['aguardando'],
        cards: cards.filter(c => c.etapa?.nome === 'Aguardando resposta')
      },
      'rejeitado': {
        ...prev['rejeitado'],
        cards: cards.filter(c => c.etapa?.nome === 'Rejeitado')
      },
      'aprovado': {
        ...prev['aprovado'],
        cards: cards.filter(c => c.etapa?.nome === 'Aprovado')
      }
    }));
  }, [cards]);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // Se soltou fora de um droppable
    if (!destination) return;

    // Se soltou no mesmo lugar
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Obter o card que foi arrastado
    const card = boardData[source.droppableId].cards[source.index];
    
    // Remover do lugar de origem
    const newBoardData = { ...boardData };
    newBoardData[source.droppableId].cards.splice(source.index, 1);
    
    // Adicionar no novo lugar
    newBoardData[destination.droppableId].cards.splice(destination.index, 0, card);
    
    setBoardData(newBoardData);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="kanban-container">
        {Object.entries(boardData).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided, snapshot) => (
              <div
                className={`kanban-column ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3 className="kanban-column-title">{column.nome}</h3>
                <div className="kanban-cards-container">
                  {column.cards.map((card, index) => (
                    <Draggable key={card.id} draggableId={String(card.id)} index={index}>
                      {(provided, snapshot) => (
                        <div
                          className={`kanban-card ${snapshot.isDragging ? 'dragging' : ''}`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="card-header">
                            <h4>{card.nome}</h4>
                            <span className="card-id">#{card.id}</span>
                          </div>
                          <p className="card-empresa">{card.empresa}</p>
                          <div className="card-info">
                            <span className="badge">{card.vaga?.nome}</span>
                            <span className="badge seniority">{card.senoridade?.nome}</span>
                          </div>
                          <div className="card-footer">
                            <span className="card-salary">{card.salario}</span>
                            <span className="card-date">{card.data_criacao_card}</span>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                <div className="kanban-count">{column.cards.length} card(s)</div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;