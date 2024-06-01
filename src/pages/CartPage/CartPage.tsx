import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../../components/CartItem/CartItem';
import { Back } from '../../components/Back/Back';
import { Modal } from '../../components/Modal/Modal';
import { useLoading } from '../../hooks/useLoading';
import { Title } from '../../components/Title/Title';
import { Loader } from '../../components/Loader/Loader';

import './CartPage.scss';

export const CartPage = () => {
  const { cartProducts } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoading = useLoading();
  const totalQuantity = cartProducts.reduce((total, product) => {
    return total + (product.quantity || 0);
  }, 0);

  const totalPrice = cartProducts.reduce((total, product) => {
    return total + (product.quantity || 0) * product.price;
  }, 0);

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content product-page cart">
      <Back />

      <h1 className="cart__title">
        <Title title="Cart" />
      </h1>

      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="cart__container">
            <div className="cart__products">
              <CartItem />
            </div>

            {!!cartProducts.length && (
              <div className="cart__block-buy">
                <p className="cart__total-price">{`$${totalPrice}`}</p>

                {totalQuantity === 1 ? (
                  <p className="cart__total-quantity">
                    Total for {totalQuantity} item
                  </p>
                ) : (
                  <p className="cart__total-quantity">
                    Total for {totalQuantity} items
                  </p>
                )}

                <div className="cart__line" />

                <button className="cart__button" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            )}
          </div>

          {isModalOpen && <Modal onClose={handleCloseModal} />}

          {!cartProducts.length && (
            <div className="cart__no-product" aria-label="cart is empty" />
          )}
        </>
      )}
    </div>
  );
};
