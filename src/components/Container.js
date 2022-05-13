function Container({ tag, children, className }) {
  const WrapperTag = tag;
  return <WrapperTag className={className}>{children}</WrapperTag>;
}

export default Container;
