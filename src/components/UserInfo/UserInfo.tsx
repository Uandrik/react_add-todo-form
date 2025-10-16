import usersFromServer from '../../api/users';

type UserId = {
  id: number;
};

export const UserInfo: React.FC<UserId> = ({ id }) => {
  const user = usersFromServer.find(u => u.id === id);

  return (
    <a className="UserInfo" href={user?.email}>
      {user?.name}
    </a>
  );
};
