interface OrderBySelectorProps {
  onSortChange: (type: "most-voted" | "least-voted") => void;
}

const OrderBySelector: React.FC<OrderBySelectorProps> = ({ onSortChange }) => {
  return (
    <div className="order-select-wrapper">
      <select
        onChange={(e) => {
          const value = e.target.value as "most-voted" | "least-voted";
          onSortChange(value);
        }}
        id="order-by"
        className="order-select"
      >
        <option value="latest" selected disabled>
          Order By
        </option>
        <option value="most-voted">Most Voted (Z → A)</option>
        <option value="least-voted">Less Voted (A → Z)</option>
      </select>
    </div>
  );
};

export default OrderBySelector;
