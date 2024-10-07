type inputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: inputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
};

export default Input;
