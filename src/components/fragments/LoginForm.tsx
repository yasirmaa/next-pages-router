import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../elements/button';
import InputForm from '../elements/input';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { query, push } = useRouter();
  const callbackUrl: any = query.callbackUrl || '/';

  const handleLogin = async () => {
    const { email, password } = formik.values;
    setError('');
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
        callbackUrl: callbackUrl,
      });
      if (!result?.error) {
        setLoading(false);
        push(callbackUrl);
      } else {
        setLoading(false);
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('error');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleLogin,
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
    }),
  });

  const handleForm = (event: any) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {error && <div className="text-red-500 text-xs">{error}</div>}
      <InputForm
        onChange={handleForm}
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
      />
      {formik.errors.email ? (
        <div className="text-red-500 text-xs">{formik.errors.email}</div>
      ) : null}
      <InputForm
        onChange={handleForm}
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
      />
      {formik.errors.password && (
        <div className="text-red-500 text-xs">{formik.errors.password}</div>
      )}
      <div className="my-4">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
