export const Input = ({name, id, placeholder, label, value, setValue, type}) => {
  return (
    <>
      <label htmlFor={id} className="title four">{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};
