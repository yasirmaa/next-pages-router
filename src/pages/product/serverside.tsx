import ProductView from '@/views/product';

const ProductPage = (props: { products: Product[] }) => {
  const { products } = props;
  return <ProductView products={products} />;
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/product');
  const data = await res.json();

  return { props: { products: data.data } };
}

export default ProductPage;
