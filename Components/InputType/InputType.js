import "./inputType.css";

export default function InputType({
  tag: Tag = "input", //default to input
  type,
  placeholder,
  value,
  user,
  name,
  setUser, //optional
  setName, //optional
  setUnique, //optional
}) {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (setUser) {
      setUser({ ...user, [name]: inputValue });
    } else if (setName) {
      setName(inputValue);
    } else if (setUnique) {
      setUnique(inputValue);
    }
  };
  return (
    <div className="form-input">
      <Tag
        type={type}
        className={`${Tag === "textarea" ? "textarea-field" : "input-field"}`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        rows={Tag === "textarea" ? 5 : undefined}
        required
      />
    </div>
  );
}
