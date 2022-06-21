function Title({ priority = 2, className = "title", children }) {
  const HTag = `h${priority}`;
  return (
    <>
      <HTag className={className}>{children}</HTag>
      {/* <div onChangeCapture={}></div> */}
    </>
  );
}

export default Title;
