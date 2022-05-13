function List({ list, className }) {
  return <ul className={className}>{list.map(el => el)}</ul>;
}

export default List;
