import { inter } from '@/lib/fonts/fonts';
import Image from 'next/image';

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div className="product-card__body w-1/3 m-auto">
      <Image
        src={product.imageUrl ?? product.imageUrl}
        className="hidden md:block w-full"
        alt={product.name}
        width={500}
        height={500}
      />
      <div className="product-description">
        <div className={`${inter.className} product-card__title font-semibold`}>{product.name}</div>
        <div className={`${inter.className} product-card__category text-slate-400 font-medium`}>
          {product.category}
        </div>
        <div className={`${inter.className} product-card__colour text-slate-400 font-medium`}>
          {product.colour} Colour
        </div>
      </div>
      <div className={`${inter.className} product-card__price font-semibold`}>
        {new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(product.price)}
      </div>
    </div>
  );
};

export default ProductDetail;
