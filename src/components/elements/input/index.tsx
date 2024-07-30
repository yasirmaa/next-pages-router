import { forwardRef, Ref } from 'react';
import Input from './Input';
import Label from './Label';

interface InputFormProps {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg?: string;
}

const InputForm = forwardRef(function InputForm(props: InputFormProps, ref: Ref<HTMLInputElement>) {
  const { type, name, placeholder, label, onChange, errorMsg } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        ref={ref}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
      ></Input>
      <p className="text-[10px] text-red-600">{errorMsg}</p>
    </div>
  );
});

export default InputForm;
