import { useRouter } from 'next/router';

// [[...slug]].tsx is a catch-all route that matches /shop/* and /shop/a/b/c
const ShopPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>Shop Page</h1>
      <p>Slug: {router.query.slug}</p>
    </div>
  );
};

export default ShopPage;
