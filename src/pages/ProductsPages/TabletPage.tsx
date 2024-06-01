import { ProductList } from '../../components/ProductList/ProductList';
import './ProductsPages.scss';

export const TabletPage = () => {
  return (
    <div className="content product-page">
      <ProductList pageName="Tablets" title="Tablets" />
    </div>
  );
};
