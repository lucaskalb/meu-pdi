import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export const getServerSideProps = withPageAuthRequired();

export default function Dashboard({ user }: { user: any }) {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

