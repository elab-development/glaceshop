function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  defaultValue = "",
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value ?? defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="input-field textarea-field"
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="input-field"
        />
      )}
    </div>
  );
}

export default InputField;