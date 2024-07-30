const Label = (props: any) => {
  const { htmlfor, children } = props;
  return (
    <label htmlFor={htmlfor} className="block mb-2 text-sm font-medium text-slate-700 mt-2">
      {children}
    </label>
  );
};

export default Label;
