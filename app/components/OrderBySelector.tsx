const OrderBySelector = () => {
  return (
    <div className="order-select-wrapper">
      <select className="order-select">
        <option value="">Order By</option>
        <option value="most">Most Voted (Z → A)</option>
        <option value="less">Less Voted (A → Z)</option>
      </select>
    </div>
  );
};

export default OrderBySelector;
