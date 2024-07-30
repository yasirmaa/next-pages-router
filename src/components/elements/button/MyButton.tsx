const MyButton = ({ bgColor }: { bgColor: any }) => {
  return (
    <button className={`${bgColor}-400 py-4 px-2 hover:bg-red-400 transition-all duration-75`}>
      TOMBOL
    </button>
  );
};

export default MyButton;
