import { CardsSkeleton } from '@/components/elements/skeleton';
import { inter, lusitana } from '@/lib/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
  colour: number;
  imageUrl: string;
  category: string;
};

const ProductView = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-full px-20">
      <h1 className={`${lusitana.className} text-3xl font-semibold`}>Product Page</h1>
      {products.length === 0 && (
        <div>
          <CardsSkeleton />
        </div>
      )}
      <div className="product-grid__items grid grid-cols-4 gap-5">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="product-card product-grid__card">
              <Link href={`/product/${product.id}`} className="product-card__body">
                <Image
                  src={product.imageUrl}
                  className="hidden md:block w-full"
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <div className="product-description">
                  <div className={`${inter.className} product-card__title font-semibold`}>
                    {product.name}
                  </div>
                  <div
                    className={`${inter.className} product-card__category text-slate-400 font-medium`}
                  >
                    {product.category}
                  </div>
                  <div
                    className={`${inter.className} product-card__colour text-slate-400 font-medium`}
                  >
                    {product.colour} Colour
                  </div>
                </div>
                <div className={`${inter.className} product-card__price font-semibold`}>
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(product.price)}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductView;
