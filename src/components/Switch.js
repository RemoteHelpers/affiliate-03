function Switch({ onChange, value }) {
  return (
    <label className="switch">
      <input
        checked={value}
        className="js-input"
        type="checkbox"
        onChange={onChange}
        value={value}
      />
      <span className="slider"></span>
    </label>
  );
}

export default Switch;
