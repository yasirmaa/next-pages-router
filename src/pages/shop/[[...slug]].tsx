import { useRouter } from 'next/router';

// [[...slug]].tsx is a catch-all route that matches /shop/* and /shop/a/b/c
const ShopPage = () => {
  const router = useRouter();
  console.log(router.query);

  return <div>Shop Page</div>;
};

export default ShopPage;
