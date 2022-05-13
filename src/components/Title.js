function Title({ priority, className, children }) {
  const HTag = `h${priority}`;
  return (
    <>
      <HTag className={className}>{children}</HTag>
    </>
  );
}

export default Title;
