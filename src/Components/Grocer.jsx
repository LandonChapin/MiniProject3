
import itemList from './Inventory';
import './Grocer.css';

export default function Grocer({ onAddToCart }) {
  return (
    <div>
      <h1 className="Title">Groceries</h1>
      <div className="cards">
        {itemList.map((item, index) => (
          <div className="card" key={`${item.name}-${index}`}>
            <div className="Text1">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
            <button type="button" onClick={() => onAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
