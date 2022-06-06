function Form({ className, formFields, onSubmit }) {
  return (
    <form className={className} onSubmit={onSubmit}>
      <div className="input-container">
        {formFields
          .filter(({ tag }) => tag === "input")
          .map(({ name, placeholder, required, type }) => {
            return (
              <input
                key={`input: ${name}`}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
              />
            );
          })}
      </div>
      {formFields
        .filter(({ tag }) => tag !== "input")
        .map(({ tag, name, placeholder, required, type }) => {
          const Tag = tag;
          return (
            <Tag
              key={`${tag}: ${name}`}
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
            />
          );
        })}
      <button className="submit-btn">Send</button>
    </form>
  );
}

export default Form;
