import AddPost from './add-post';
import Posts from './posts';
import Users from './users';
import AddUser from './add-user';

import { Provider as PostsProvider, UserProvider } from '../context';

const Application = () => {
  return (
    <main className="m-auto w-full p-8">
      <header className="mb-12 p-4 text-center ">
        <h1 className="mb-0 text-6xl underline decoration-primary-500">
          Neighborhood Hot Takes
        </h1>
      </header>
      <div className="flex w-full flex-col gap-8 sm:flex-row">
        <UserProvider>
          <section className="w-full">
            <PostsProvider>
              <AddPost />
              <Posts />
            </PostsProvider>
          </section>
          <Users AddUserComponent={<AddUser />} />
        </UserProvider>
      </div>
    </main>
  );
};

export default Application;
