import './lista-cards.estilos.css';
import { Trash2 } from "lucide-react";
import { Dialog } from "../Dialog";
import { FormularioCRM } from '../FormularioCRM';

export function ListaCards ({cards, ref, excluirCard, setTipoSelecionado, aoFormularioSubmetido, vagas, senoridade, tipo, dias, etapa, tipoSelecionado}) {

  console.log(cards);
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
                    <FormularioCRM
                    vagas={vagas}
                    valorVaga={card.vaga}
                    senoridade={senoridade}
                    valorSenoridade={card.senoridade}
                    tipo={tipo}
                    valorTipo={card.tipo}
                    dias={dias}
                    valorDias={card.dias}
                    etapa={etapa}
                    valorEtapa={card.etapa}
                    nome={card.nome}
                    empresa={card.empresa}
                    salario={card.salario}
                    deadline={card.deadline}
                    tipoSelecionado={tipoSelecionado}
                    setTipoSelecionado={setTipoSelecionado}
                    id={card.id}
                    aoFormularioSubmetido={aoFormularioSubmetido}
                    acao={'editar'}
                  >
                  </FormularioCRM>
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