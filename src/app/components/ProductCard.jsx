import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product._id}`} className="w-full mb-16">
      <div className="image">
        <Image
          src={product.imageUrl}
          alt={product.description}
          width={400}
          height={400}
          priority={true}
          className="w-full h-[600px] sm:h-screen"
        />
      </div>
      <div className="text-center mt-8 flex flex-col gap-y-2">
        <p>{product.description}</p>
        <p className="text-sm font-thin text-gray-500">{product.category}</p>
        <p className="italic">KWD {product.price}</p>
      </div>
    </Link>
  );
}
