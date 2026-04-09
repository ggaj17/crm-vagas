import Kanban from '../Kanban';

export function ListaCards({ cards }) {
  return (
    <section>
      <Kanban cards={cards} />
    </section>
  );
}