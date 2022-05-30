function Button({ className = "btn", type = "button", onClick, children }) {
  return (
    <>
      <button className={className} type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
