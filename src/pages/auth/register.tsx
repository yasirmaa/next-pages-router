import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>
        Already have an account? <Link href="/auth/login">login</Link>.
      </p>
    </div>
  );
};

export default RegisterPage;
