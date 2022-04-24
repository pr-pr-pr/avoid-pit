function Item({ title, address }) {
  return (
    <div className="item">
      <div className="title">{title}</div>
      <div className="address">{address}</div>
    </div>
  );
}

export default Item;