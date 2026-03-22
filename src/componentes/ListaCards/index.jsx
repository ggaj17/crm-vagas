import './lista-cards.estilos.css';
import { Trash2 } from "lucide-react";
import { Dialog } from "../Dialog";
import { FormularioEditarCard } from "../FormularioEditarCard";

export function ListaCards ({cards, ref, excluirCard}) {

  return (
 
    <section>
        {cards.map((card, index) => (
            <div className='container-cards' key={index}>
              <div className='header-cards'>
                <span className='titulo-cards'>{card.nome}</span>
                <div className='container-botoes'>
                  <Dialog
                    ref={ref}
                    titulo={'Editar'} >
                      <FormularioEditarCard></FormularioEditarCard>
                  </Dialog>
                  <button className='botao-excluir' onClick={() => excluirCard(card.id)}> 
                    <Trash2 size={20} color="#eae8ee" /></button>
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
    </section>
  )
}