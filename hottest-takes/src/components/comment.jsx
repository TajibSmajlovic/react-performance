import { memo } from 'react';

import User from './user';
import { useActions } from '../hooks';

const PostComment = ({ comment, postId }) => {
  const { removeComment } = useActions();

  return (
    <article className="flex flex-col gap-2 rounded-sm border-2 border-l-8 border-primary-700 p-2 pl-4 shadow-md">
      <User user={comment.user} />
      <p>{comment.text}</p>
      <div className="flex place-content-end">
        <button onClick={() => removeComment(postId, comment.id)}>
          ⛔️ Delete
        </button>
      </div>
    </article>
  );
};

export default memo(PostComment);
