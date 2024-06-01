import { ProductList } from '../../components/ProductList/ProductList';
import './ProductsPages.scss';

export const PhonePage = () => {
  return (
    <div className="content product-page">
      <ProductList pageName="Phones" title="Mobile phones" />
    </div>
  );
};
