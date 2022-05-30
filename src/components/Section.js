function Section({ tag = "section", className, id, children }) {
  const TagName = tag;
  return (
    <TagName id={id} className={className}>
      <div className="container">{children}</div>
    </TagName>
  );
}

export default Section;
