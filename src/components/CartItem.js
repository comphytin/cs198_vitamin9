import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // TODO 13: Dispatch updateQuantity to increase by 1
    dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}));
  };

  const handleDecrease = () => {
    // TODO 14: Dispatch updateQuantity to decrease by 1
    if (item.quantity > 1) {
        dispatch(updateQuantity({id: item.id, quantity: item.quantity - 1}));
    } else {
        dispatch(removeItem(item.id));
    }
  };

  const handleRemove = () => {
    // TODO 15: Dispatch removeItem with the item's id
    dispatch(removeItem(item.id));
  };

  return (
    <div className="list-group-item">
      
      <div className="d-flex justify-content-between align-items-center">
        <div className="flex-grow-1">
          <h5 className="mb-0">{item.name}</h5>
          <small className="text-muted">${item.price.toFixed(2)} each</small>
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-sm btn-secondary me-2"
              onClick={handleDecrease}
              disabled={item.quantity <= 0}
            >
              -
            </button>
            <span className="mx-2 fw-bold">{item.quantity}</span>
            <button 
              className="btn btn-sm btn-secondary ms-2"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <div className="mx-3" style={{ width: '80px', textAlign: 'right' }}>
            <strong>${(item.price * item.quantity).toFixed(2)}</strong>
          </div>
          <button 
            className="btn btn-sm btn-danger"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;