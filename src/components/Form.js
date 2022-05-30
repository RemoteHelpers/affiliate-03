function Form({ className, formFields, onSubmit }) {
  return (
    <form className={className} onSubmit={onSubmit}>
      <div className="input-container">
        {formFields
          .filter(({ tag }) => tag === "input")
          .map(({ name, placeholder, required, hidden, type }) => {
            return (
              <input
                key={`input: ${name}`}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                hidden={hidden}
              />
            );
          })}
      </div>
      {formFields
        .filter(({ tag }) => tag !== "input")
        .map(({ tag, name, placeholder, required, hidden, type }) => {
          const Tag = tag;
          return (
            <Tag
              key={`${tag}: ${name}`}
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              hidden={hidden}
            />
          );
        })}
      <button className="submit-btn">Send</button>
    </form>
  );
}

export default Form;
// <Tag
//   key={name}
//   type={type}
//   name={name}
//   placeholder={placeholder}
//   required={required}
//   hidden={hidden}
// />
