function Link({ href, dataIndex, onClick, children }) {
  return (
    <a href={href} onClick={onClick} data-index={dataIndex}>
      {children}
    </a>
  );
}

export default Link;
