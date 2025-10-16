import { TodoInfo } from '../TodoInfo';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

export type Todos = {
  todos: Todo[];
};

export const TodoList: React.FC<Todos> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(t => (
      <TodoInfo
        todos={todos}
        key={t.id}
        title={t.title}
        userId={t.userId}
        id={t.id}
        completed={t.completed}
      />
    ))}
  </section>
);
