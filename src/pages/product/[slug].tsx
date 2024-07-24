import { useRouter } from 'next/router';

const DetailProduct = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Detail Product</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default DetailProduct;
