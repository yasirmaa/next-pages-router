import fetcher from '@/lib/swr/fetcher';
import ProductView from '@/views/product';
// import { useEffect, useState } from 'react';
import useSWR from 'swr';

const ProductPage = () => {
  // const [products, setProducts] = useState<Product[]>([]);

  const { data, isLoading } = useSWR('http://localhost:3000/api/product', fetcher);

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/product')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       setProducts(data.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }, []);

  return <ProductView products={isLoading ? [] : data?.data} />;
};

export default ProductPage;
