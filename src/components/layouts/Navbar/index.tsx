import Link from 'next/link';
import styles from './Navbar.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href={`/product`}>Home</Link>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {data ? (
        <div>
          <p>{data.user?.username}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </nav>
  );
};

export default Navbar;
