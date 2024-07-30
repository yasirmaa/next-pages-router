import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// lazy load Navbar component
const Navbar = dynamic(() => import('../Navbar'));

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

const AppShell = (props: AppShellProps) => {
  const router = useRouter();
  const { children } = props;

  return (
    <main>
      {!disableNavbar.includes(router.pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
