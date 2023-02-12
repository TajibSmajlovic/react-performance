import { useUsers } from '../hooks';
import User from './user';

const Users = ({ AddUserComponent }) => {
  const users = useUsers();

  return (
    <section className="flex w-full flex-col gap-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      {AddUserComponent}
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          className="border-2 border-primary-600 p-2 text-sm shadow-sm"
        />
      ))}
    </section>
  );
};

export default Users;
