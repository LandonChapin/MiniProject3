
export default function RunCart({ items, onCheckout, onRemoveItem }) {
  const total = items.reduce((sum, item) => sum + (item.price ?? 0), 0);

  return (
    <div id="cartID">
      <h1>Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0, margin: 0}} >
            {items.map((item, index) => (
              <li key={`${item.name}-${index}`}>
                {item.name}:          ${item.price}
                <button type="button" onClick={() => onRemoveItem(index)}>x</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total}</p>
        </>
      )}

      <button type="button" onClick={onCheckout} disabled={items.length === 0}>
        Checkout
      </button>
    </div>
  );
}
