import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../TodoList';

type Props = {
  todos: Todo[];
  title: string;
  userId: number;
  id: number;
  key: number;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, userId, id, completed }) => (
  <article
    data-id={id}
    className={classNames('TodoInfo', { 'TodoInfo--completed': completed })}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    <UserInfo id={userId} />
  </article>
);
