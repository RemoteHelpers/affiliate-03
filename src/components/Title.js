function Title({ priority = 2, className = "title", children }) {
  const HTag = `h${priority}`;
  return (
    <>
      <HTag className={className}>{children}</HTag>
    </>
  );
}

export default Title;
