import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AuthLayout = ({ title, children }: any) => {
  const { query } = useRouter();
  const callbackUrl: any = query.callbackUrl || '/';

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="backdrop-blur-sm md:bg-white/30 w-2/3 flex rounded-2xl shadow-lg p-5">
        <div className="md:w-1/2 w-full md:px-16 px-4 flex flex-col justify-center">
          <h2 className="font-bold text-2xl text-slate-700">{title}</h2>
          <p className="text-sm mt-4 text-slate-700">
            {title === 'Login'
              ? 'If you already a member, easily log in'
              : 'If you are new here, register now'}
          </p>
          {children}
          <Navigation type={title} />
          {title === 'Login' && (
            <button onClick={() => signIn('google', { redirect: false, callbackUrl })}>
              SignIn with Google
            </button>
          )}
        </div>
        <div className="hidden md:flex w-1/2 bg-slate-300 rounded-2xl md:items-center">
          <Image src="/unicorn.svg" alt="" width={100} height={100} style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ type }: any) => {
  if (type === 'Login') {
    return (
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don&apos;t have an account?{' '}
        <Link
          href="/auth/register"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{' '}
        <Link
          href="/auth/login"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
