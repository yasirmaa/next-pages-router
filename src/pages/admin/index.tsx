import { useSession } from 'next-auth/react';

const AdminPage = () => {
  const { data, status } = useSession();
  return (
    <div>
      <h1>Admin Page</h1>
      <p>Halo Bang {data?.user?.email}</p>
    </div>
  );
};

export default AdminPage;
