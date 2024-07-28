import { inter } from '@/lib/fonts/fonts';
import fetcher from '@/lib/swr/fetcher';
import ProductDetail from '@/views/product/detail';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const DetailProduct = (props: { product: Product }) => {
  const router = useRouter();
  const { slug } = router.query;

  // client side rendering
  // const { data, error, isLoading } = useSWR(`http://localhost:3000/api/product/${slug}`, fetcher);
  // const product = data?.data;

  // server side rendering
  const { product } = props;

  return (
    <div className="">
      <h1>Detail Product</h1>
      {/* client side */}
      {/* {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ProductDetail product={product}/>
      )} */}

      {/* server side */}
      <ProductDetail product={product} />
    </div>
  );
};

export default DetailProduct;

// export async function getServerSideProps({ params }: { params: { slug: string } }) {
//   const res = await fetch(`http://localhost:3000/api/product/${params.slug}`);
//   const data = await res.json();

//   return { props: { product: data.data } };
// }

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/product');
  const data = await res.json();

  const paths = data.data.map((product: Product) => ({
    params: { slug: product.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const res = await fetch(`http://localhost:3000/api/product/${params.slug}`);
  const data = await res.json();

  return { props: { product: data.data } };
}
