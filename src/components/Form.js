function Form({ className, formFields, onSubmit }) {
  return (
    <form className={className} onSubmit={onSubmit}>
      {formFields.map(({ tag, type, name, placeholder, required, hidden }) => {
        const Tag = tag;
        return (
          <Tag
            key={name}
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
