import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './Aside.scss';
import React, { useContext, useEffect, useState } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import { CartContext } from '../../context/CartContext';

type Props = {
  setIsActive: (value: boolean) => void;
};

export const Aside: React.FC<Props> = ({ setIsActive }) => {
  const { favoritesProducts } = useContext(FavoriteContext);
  const { cartProducts } = useContext(CartContext);
  const favoritesCount = favoritesProducts.length;
  const cartCount = cartProducts.length;
  const [animationClass, setAnimationClass] = useState('aside-enter');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setAnimationClass('aside-enter');
  }, []);

  const handleClose = () => {
    setAnimationClass('aside-exit');
    setTimeout(() => {
      setIsVisible(false);
      setIsActive(false);
    }, 300); 
  };

  if (!isVisible) return null;

  const activeLink = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar__item', 'aside__item', {
      'navbar__item-active': isActive,
    });

  const activeFavoriet = ({ isActive }: { isActive: boolean }) =>
    classNames('aside__icon', 'icon', 'aside__icon--favourites', {
      'aside__item-active': isActive,
    });

  const activeCard = ({ isActive }: { isActive: boolean }) =>
    classNames('aside__icon', 'icon', 'aside__icon--cart', {
      'aside__item-active': isActive,
    });

  return (
    <aside className={classNames('aside', animationClass)}>
      <div className="aside__container">
        <nav className="aside__nav">
          <NavLink
            to="/"
            className={activeLink}
            onClick={handleClose}
          >
            home
          </NavLink>
          <NavLink
            to="/phones"
            className={activeLink}
            onClick={handleClose}
          >
            phones
          </NavLink>
          <NavLink
            to="/tablets"
            className={activeLink}
            onClick={handleClose}
          >
            tablets
          </NavLink>
          <NavLink
            to="/accessories"
            className={activeLink}
            onClick={handleClose}
          >
            accessories
          </NavLink>
        </nav>

        <div className="aside__icon-block">
          <NavLink
            to="/favorites"
            className={activeFavoriet}
            aria-label="favourites"
            onClick={handleClose}
          >
            {!!favoritesCount && (
              <div className="aside__icon-favourites-count">
                {favoritesCount}
              </div>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={activeCard}
            aria-label="cart"
            onClick={handleClose}
          >
            {!!cartCount && (
              <div className="aside__icon-cart-count">{cartCount}</div>
            )}
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
