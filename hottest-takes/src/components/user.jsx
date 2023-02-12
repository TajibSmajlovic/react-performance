import { memo } from 'react';

import clsx from 'clsx';
import { useUsersActions } from '../hooks';

const User = ({ user, className }) => {
  const { removeUser } = useUsersActions();

  return (
    <article
      className={clsx(
        'flex place-content-between items-start gap-8',
        className,
      )}
    >
      <div className="flex flex-col gap-1 font-sans font-bold">
        <div className="whitespace-nowrap">
          {user.firstName} {user.lastName}
        </div>
        <div className="font-normal text-primary-800">@{user.username}</div>
      </div>
      <button
        className="px-1 py-0 font-normal"
        onClick={() => removeUser(user.id)}
      >
        Remove
      </button>
    </article>
  );
};

export default memo(User);
