import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './login.module.scss';

const LoginView = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/product');
  };
  return (
    <div className={styles.login}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p>
        Don&apos;t have an account? <Link href={'/register'}>Sign up now!</Link>
      </p>
    </div>
  );
};

export default LoginView;
