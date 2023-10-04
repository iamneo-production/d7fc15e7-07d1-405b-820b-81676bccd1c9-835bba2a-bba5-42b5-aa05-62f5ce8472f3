import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/CartSlice';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, MinusCircle, Trash } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId, itemName) => {

    dispatch(removeFromCart(itemId));
    
    toast.success(`${itemName} removed from cart !`, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
  };


  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };


  const totalAmount = cartItems.reduce((acc, product) => {
    return acc + product.productprice * product.quantity;
  }, 0);
  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className='main'>
    
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className='cart-title-container'>
            <h1 className='cart-title primary'>Your Cart</h1>
            <button className='cart-checkout-btn shadow' onClick={handleCheckout}>Checkout </button>
          </div>
          <div className='shadow bg-white cart-table-container'>
            <table className='cart-data-table'>
              <thead className='cart-data-thead shadow'>
                <tr>
                  <th>
                    Product
                  </th>
                  <th>
                    Product Name
                  </th>
                  <th>
                    Price
                  </th>
                  <th>
                    Order Quantity
                  </th>
                  <th>
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product) => (
                  <tr key={product.pid}>
                    <td>{product.productname}</td>
                    <td>₹ {product.productprice}</td>
                    <td>
                      <span className='d-flex-r'>
                        <button className='data-btn-mini bg-white shadow' onClick={() => handleDecreaseQuantity(product.pid)}> <MinusCircle /> </button>
                        <h3> {product.quantity}</h3>
                        <button className='data-btn-mini bg-white shadow' onClick={() => handleIncreaseQuantity(product.pid)}> <PlusCircle /> </button>
                      </span>
                    </td>
                    <td>
                      <button className='data-btn-mini bg-white shadow' onClick={() => handleRemoveItem(product.pid, product.productname)}><Trash color="#ff0000" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='cart-total'>Total: ₹{totalAmount}</p>
        </div>
      )}


      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     
    </div>
  );
};

export { Cart };