import RegisterForm from '@/components/fragments/RegisterForm';
import AuthLayout from '@/components/layouts/AuthLayout/AuthLayout';

const RegisterPage = () => {
  return (
    <AuthLayout title={'Register'}>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
