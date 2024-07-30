const Button = (props: any) => {
  const { type, children, classname, onClick } = props;
  return (
    <button
      disabled={props.disabled}
      type={type}
      onClick={onClick}
      className={`${classname} text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
    >
      {children}
    </button>
  );
};

export default Button;
