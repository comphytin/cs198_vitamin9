import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import CartItem from './CartItem';

function Cart() {
  const dispatch = useDispatch();
  
  // TODO 8: Use useSelector to get items from the cart state
  // TODO 9: Use useSelector to get totalQuantity from the cart state

  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleClearCart = () => {
    // TODO 10: Dispatch clearCart action
    dispatch(clearCart());
  };

  // TODO 11: Calculate total price (price * quantity for each item)
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="container mt-4">
      {/* TODO 12: Build the cart UI */}
      {/* Show: "Cart (X items)" title, list of CartItem components, total price, Clear Cart button */}
      {/* If cart is empty, show "Your cart is empty" */}
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Cart ({totalQuantity} {totalQuantity === 1 ? 'item' : 'items'})</h3>
        </div>
        <div className="card-body">
          {items.length === 0 ? (
            <p className="text-muted text-center mb-0">Your cart is empty</p>
          ) : (
            <>
              <div className="list-group mb-3">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
                <button 
                  className="btn btn-danger"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;