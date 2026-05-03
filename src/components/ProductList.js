import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import products from '../data/products';

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // TODO 6: Dispatch addItem action with the product
    dispatch(addItem({ ...product, quantity: 1}));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Products</h2>
      {/* TODO 7: Create a grid of product cards */}
      {/* Map over products and display each one */}
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100">
              {product.image && (
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <p className="card-text fw-bold">${product.price}</p>
                <button 
                  className="btn btn-primary mt-auto"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;