export const Select = ({ children, name, id, label, value, setValue }) => {
  return (
    <>
        <label htmlFor={id} className="title four">
          {label}
        </label>
        <select
          name={id}
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {children}
        </select>
    </>
  );
};
