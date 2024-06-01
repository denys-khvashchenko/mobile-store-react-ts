import { useContext } from 'react';
import { ProductCards } from '../../components/ProductCards/ProductCards';
import { FavoriteContext } from '../../context/FavoriteContext';
import { Title } from '../../components/Title/Title';
import { Path } from '../../components/Path/Path';
import { useLoading } from '../../hooks/useLoading';
import { Loader } from '../../components/Loader/Loader';

export const FavoritePage = () => {
  const { favoritesProducts } = useContext(FavoriteContext);
  const isLoading = useLoading();

  return (
    <div className="content product-page">
      <Path category="favourites" />

      <Title title="Favourites" />

      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <p className="product-list__quantity">{`${favoritesProducts.length} items`}</p>

          <ProductCards slicedProducts={favoritesProducts} />

          {!favoritesProducts.length && (
            <div className="product-list__no-result" />
          )}
        </>
      )}
    </div>
  );
};
