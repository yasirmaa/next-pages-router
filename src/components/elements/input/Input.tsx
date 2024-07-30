import { forwardRef, ForwardedRef } from 'react';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, name, placeholder, onChange } = props;
  return (
    <input
      ref={ref}
      onChange={onChange}
      type={type}
      name={name}
      id={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required={true}
    />
  );
});
Input.displayName = 'Input';
export default Input;
