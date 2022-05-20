function Container({ tag = "div", children, className = "container" }) {
  const WrapperTag = tag;
  return <WrapperTag className={className}>{children}</WrapperTag>;
}

export default Container;
