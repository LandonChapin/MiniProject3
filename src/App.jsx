
import { useState } from 'react';
import './App.css';
import Grocer from './Components/Grocer';
import RunCart from './Components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  
  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems(prev => prev.filter((_, i) => i !== indexToRemove));
  };


  const handleCheckout = () => {
    console.log('Checking out:', cartItems);
    setCartItems([]);
  };

  return (
    <>
      <section className="navbar">
        <nav className="primary-font">
          <ul className="horizontal-menu" id="TaskBar">
            <li>
              <h1 id="cartBtn" className="primary-font" >
                <i className="primary-font" />{' '}
                Cart
              </h1>
            </li>
            <li>
              <h3 className="secondary-font">
                (<span id="cartCount">{cartItems.length}</span>)
              </h3>
            </li>
          </ul>
        </nav>
      </section>

      <div>
        <Grocer onAddToCart={handleAddToCart} />
        <RunCart items={cartItems} onCheckout={handleCheckout} onRemoveItem={handleRemoveFromCart}/>
      </div>
    </>
  );
}


export default App
