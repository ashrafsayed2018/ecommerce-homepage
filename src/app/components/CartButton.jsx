import { GlobalContext } from "@/context";
import { addToCart } from "@/services/cart";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";

export default function CartButton({ product }) {
  const { loader, setLoader, user, showCartModal, setShowCartModal } =
    useContext(GlobalContext);

  const router = useRouter();

  async function handleAddToCart(product) {
    setLoader({ loading: true, id: product._id });
    const response = await addToCart({
      productID: product._id,
    });

    if (response.success) {
      toast.success(response.message);
      setShowCartModal(true);

      setLoader({ loading: false, id: "" });
    } else {
      setShowCartModal(true);
      setLoader({ loading: false, id: "" });
      toast.error(response.message);
    }
  }
  return (
    <button
      className="text-center p-3 rounded-xl my-4 mx-auto bg-blue-700 text-white"
      onClick={() =>
        Object.keys(user).length > 0
          ? handleAddToCart(product)
          : router.push("/login")
      }
    >
      {loader && loader.loading && loader.id == product._id ? (
        <Loader text="جاري الاضافة ..." loading={loader} color="white" />
      ) : (
        "اضافة للسلة"
      )}
    </button>
  );
}
