 import './lista-cards.estilos.css';

export function ListaCards ({cards}) {
  return (
 
    <section>
        {cards.map((card, index) => (
            <div className='container-cards' key={index}>
              <h2>{card.nome}</h2>
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
    </section>
  )
}