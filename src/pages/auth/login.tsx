import LoginForm from '@/components/fragments/LoginForm';
import AuthLayout from '@/components/layouts/AuthLayout/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout title={'Login'}>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
