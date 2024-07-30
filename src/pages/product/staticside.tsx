import ProductView from '@/views/product';

const ProductPage = (props: { products: Product[] }) => {
  const { products } = props;
  return <ProductView products={products} />;
};

export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:3000/api/product');
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }
    const data = await res.json();
    return {
      props: {
        products: data.data,
      },
      // Incremental Static Regeneration
      // revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { props: { products: [] } }; // Return an empty array or handle the error as needed
  }
}

export default ProductPage;
