function Section({ tag="section", className, children }) {
  const TagName = tag;
  return (
    <TagName className={className}>
      <div className="container">{children}</div>
    </TagName>
  );
}

export default Section;
