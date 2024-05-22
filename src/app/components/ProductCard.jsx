import Image from "next/image";
import Link from "next/link";
import { getPriceAfterDiscount } from "@/helpers/priceAfterDiscount";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl h-[650px] mb-16">
      <Link href={`/product/${product._id}`}>
        <Image
          src={product.imageUrl}
          alt={product.description}
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL={product.imageUrl}
          className="w-full h-[500px]"
        />
        <div className="px-4 py-3 w-full">
          <span className="mr-3 uppercase text-lg font-bold text-black mb-2">
            {product.name}
          </span>
          <p className="text-sm text-gray-400 truncate block capitalize">
            {product.description}
          </p>
          <div className="w-full flex items-center justify-around mt-2">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              د.ك
              {"  "} {getPriceAfterDiscount(product)}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                د.ك
                {"  "} {product.price}
              </p>
            </del>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
