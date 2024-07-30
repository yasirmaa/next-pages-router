import { useEffect, useRef, useState } from 'react';
import Button from '../elements/button';
import InputForm from '../elements/input';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    const dataInput = formik.values;
    try {
      const result = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataInput),
      });
      if (result.status === 200) {
        push('/auth/login');
      } else {
        alert('User already exists');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    },
    onSubmit: handleRegister,
    validationSchema: yup.object().shape({
      firstname: yup.string().min(3).required(),
      lastname: yup.string().min(3).required(),
      username: yup.string().min(8, 'Username minimal 8').required(),
      email: yup.string().email().required(),
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

  useEffect(() => {
    inputRef.current!.focus;
  }, []);

  const handleForm = (event: any) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };

  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <InputForm
        onChange={handleForm}
        ref={inputRef}
        type="text"
        name="firstname"
        label="Firstname"
        placeholder="Enter your firstname"
        errorMsg={formik.errors.firstname}
      />
      <InputForm
        onChange={handleForm}
        type="text"
        name="lastname"
        label="Lastname"
        placeholder="Enter your lastname"
        errorMsg={formik.errors.lastname}
      />
      <InputForm
        onChange={handleForm}
        type="text"
        name="username"
        label="Username"
        placeholder="Enter your username"
        errorMsg={formik.errors.username}
      />
      <InputForm
        onChange={handleForm}
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
        errorMsg={formik.errors.email}
      />
      <InputForm
        onChange={handleForm}
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        errorMsg={formik.errors.password}
      />
      <div className="my-4">
        <Button type="submit" disabled={isLoading}>
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
